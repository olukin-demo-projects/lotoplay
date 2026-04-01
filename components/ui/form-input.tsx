interface FormInputProps {
  id: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  label: string;
}

export function FormInput({ id, type, placeholder, autoComplete, label }: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm tracking-widest text-foreground/70 mb-2 block">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full px-4 py-2 bg-form-input-bg border border-form-input-border rounded-lg text-foreground placeholder:text-md placeholder:font-semibold placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:outline-none transition-all"
      />
    </div>
  );
}
