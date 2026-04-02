"use client"

import * as React from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
  name: z.string().min(2, "Ім'я повинно містити щонайменше 2 символи"),
  email: z.email("Введіть коректну email адресу"),
  message: z.string().min(10, "Повідомлення повинно містити щонайменше 10 символів"),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [rateLimited, setRateLimited] = React.useState(false)
  const [resetTime, setResetTime] = React.useState<Date | null>(null)
  const [timeRemaining, setTimeRemaining] = React.useState(0)

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const validateForm = (data: z.infer<typeof formSchema>): boolean => {
    try {
      formSchema.parse(data)
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
          const fieldName = issue.path[0] as keyof z.infer<typeof formSchema>
          form.setError(fieldName, {
            message: issue.message,
          })
        })
      }
      return false
    }
  }

  // Check localStorage for existing rate limit on component mount
  React.useEffect(() => {
    const stored = localStorage.getItem('contactFormRateLimit')
    if (stored) {
      const { resetTime: storedResetTime } = JSON.parse(stored)
      const now = Date.now()
      
      if (storedResetTime && now < storedResetTime) {
        // Still within rate limit period
        setRateLimited(true)
        setResetTime(new Date(storedResetTime))
        setTimeRemaining(storedResetTime - now)
      } else {
        // Rate limit expired, clear storage
        localStorage.removeItem('contactFormRateLimit')
      }
    }
  }, [])

  // Timer for countdown
  React.useEffect(() => {
    if (rateLimited && resetTime) {
      const interval = setInterval(() => {
        const now = new Date()
        const remaining = Math.max(0, resetTime.getTime() - now.getTime())
        setTimeRemaining(remaining)
        
        if (remaining === 0) {
          setRateLimited(false)
          setResetTime(null)
          localStorage.removeItem('contactFormRateLimit')
          clearInterval(interval)
        }
      }, 1000)
      
      return () => clearInterval(interval)
    }
  }, [rateLimited, resetTime])

  const formatTimeRemaining = (ms: number): string => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!validateForm(data)) {
      return
    }

    // Check if rate limited before submitting
    if (rateLimited) {
      toast("Будь ласка, зачекайте", {
        description: `Ви зможете відправити повідомлення через ${formatTimeRemaining(timeRemaining)}`,
        position: "bottom-right",
      })
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast("Повідомлення успішно відправлено!", {
          position: "bottom-right",
        })
        setSubmitStatus('success')
        form.reset()
        
        // Save rate limiting to localStorage after successful submission
        if (result.resetTime) {
          setRateLimited(true)
          setResetTime(new Date(result.resetTime))
          setTimeRemaining(new Date(result.resetTime).getTime() - Date.now())
          localStorage.setItem('contactFormRateLimit', JSON.stringify({
            resetTime: new Date(result.resetTime).getTime()
          }))
        }
      } else {
        if (result.rateLimited) {
          setRateLimited(true)
          setResetTime(new Date(result.resetTime))
          setTimeRemaining(new Date(result.resetTime).getTime() - Date.now())
          
          // Save rate limiting to localStorage on backend error
          localStorage.setItem('contactFormRateLimit', JSON.stringify({
            resetTime: new Date(result.resetTime).getTime()
          }))
          
          toast("Забагато запитів", {
            description: `Спробуйте ще раз через ${formatTimeRemaining(timeRemaining)}`,
            position: "bottom-right",
          })
        } else {
          setErrorMessage(result.message || 'Помилка відправки форми')
          setSubmitStatus('error')
          toast("Помилка відправки", {
            description: result.message || 'Спробуйте ще раз',
            position: "bottom-right",
          })
        }
      }
    } catch {
      setErrorMessage('Помилка з\'єднання. Спробуйте ще раз.')
      setSubmitStatus('error')
      toast("Помилка з\'єднання", {
        description: 'Перевірте інтернет-з\'єднання',
        position: "bottom-right",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4 mb-6 items-start">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-name">
                  Ім&apos;я
                </FieldLabel>
                <Input
                  {...field}
                  id="contact-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Ваше ім'я"
                  autoComplete="name"
                  disabled={isSubmitting || rateLimited}
                  className={(isSubmitting || rateLimited) ? 'cursor-not-allowed' : ''}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-email">
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id="contact-email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="example@mail.com"
                  autoComplete="email"
                  disabled={isSubmitting || rateLimited}
                  className={(isSubmitting || rateLimited) ? 'cursor-not-allowed' : ''}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="mb-6">
              <FieldLabel htmlFor="contact-message">
                Повідомлення
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  {...field}
                  id="contact-message"
                  placeholder="Розкажи про свої ідеї..."
                  rows={3}
                  className={`min-h-24 resize ${(isSubmitting || rateLimited) ? 'cursor-not-allowed' : ''}`}
                  aria-invalid={fieldState.invalid}
                  disabled={isSubmitting || rateLimited}
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="tabular-nums">
                    {field.value.length}/500 символів
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FieldDescription>
                Опишіть ваші ідеї або запитання
              </FieldDescription>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </FieldGroup>

      {rateLimited && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
          <div className="flex items-center justify-between">
            <div>
              <strong>Обмеження відправки</strong>
              <p className="text-sm mt-1">
                Ви можете відправляти повідомлення раз на 5 хвилин
              </p>
            </div>
            <div className="text-lg font-mono">
              {formatTimeRemaining(timeRemaining)}
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Дякуємо за ваше повідомлення! Ми зв&apos;яжемося з вами найближчим часом.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errorMessage}
        </div>
      )}

      <div className="flex gap-4">
        <Button
          type="submit"
          variant="submit"
          size="submit"
          disabled={isSubmitting || rateLimited}
        >
          {rateLimited 
            ? `Доступно через ${formatTimeRemaining(timeRemaining)}`
            : isSubmitting 
              ? 'Відправка...' 
              : 'Відправити'
          }
        </Button>
      </div>
    </form>
  )
}
