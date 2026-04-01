# Грим та Грім - Офіційний сайт

Сучасний веб-сайт українського рок-гурту «Грим та Грім», побудований на Next.js 16 з акцентом на продуктивність, доступність та SEO-оптимізацію.

## 🎯 Про проект

«Грим та Грім» — це офіційний сайт українського рок-гурту, який демонструє сучасний підхід до веб-розробки. Проект створений з використанням передових технологій для забезпечення найкращого користувацького досвіду та максимальної видимості в пошукових системах.

### Ключові особливості

- **Повністю адаптивний дизайн** для всіх пристроїв
- **SEO-оптимізація** з розширеними структурованими даними
- **WCAG 2.1 AA сумісність** для доступності
- **Ліниве завантаження** медіа-контенту
- **Паралакс-ефекти** для покращення UX
- **Інтерактивна карта** розташування
- **Автоматизоване тестування** з Playwright

## 🚀 Технологічний стек

### Core Framework
- **Next.js 16** - React framework з App Router
- **React 19** - UI бібліотека
- **TypeScript 5** - Типобезпека

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS фреймворк
- **shadcn/ui** - Компонентна бібліотека
- **Radix UI** - Доступні компоненти
- **class-variance-authority** - Варіативність стилів

### SEO & Performance
- **react-schemaorg** - Структуровані дані Schema.org
- **schema-dts** - Типізація Schema.org
- **next/font** - Оптимізація шрифтів

### Testing & Quality
- **Playwright** - E2E тестування та скриншот-тестування
- **React Doctor** - Аналіз якості React-коду
- **ESLint** - Лінтинг коду

### Package Manager
- **pnpm** - Ефективне управління залежностями

## 📁 Структура проекту

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Кореневий layout
│   ├── page.tsx           # Головна сторінка
│   └── globals.css        # Глобальні стилі
├── components/                   # React компоненти
│   ├── ui/                      # shadcn/ui компоненти
│   │   ├── button.tsx          # Кнопка з варіантами (cta, submit)
│   │   ├── form-input.tsx      # Поле вводу форми
│   │   ├── form-textarea.tsx   # Текстове поле форми
│   │   └── video-container.tsx # Відео контейнер з анімаціями
│   ├── SEOHead.tsx        # SEO мета-теги та Schema.org
│   ├── GoogleMap.tsx      # Google Maps інтеграція
│   └── LazyGoogleMap.tsx  # Ліниве завантаження карти з плейсхолдером
├── hooks/                 # Кастомні React хуки
│   ├── useParallax.tsx    # Паралакс ефекти
│   ├── useVideoExpansion.tsx # Розширення відео
│   └── useVideoPreload.tsx # Завантаження відео
├── utils/                 # Утиліти
│   └── handleSmoothScroll.ts # Плавна прокрутка
├── lib/                   # Бібліотеки
│   └── utils.ts           # Загальні утиліти
├── tests/                 # Тести
│   └── screenshot-tests/  # Скриншот-тести
│       └── homepage.spec.ts
├── public/                # Статичні ресурси
└── spec/                  # Дизайн специфікації
```

## 🎨 Компоненти та функціональність

### SEOHead.tsx
Компонент для SEO-оптимізації:
- **Meta теги**: Open Graph, Twitter Cards, Geo теги
- **Структуровані дані**: Schema.org для MusicGroup та MusicEvent
- **Мультиязичність**: Підтримка української локалізації
- **Event розмітка**: Автоматична генерація для концертів

### GoogleMap.tsx
Інтеграція Google Maps з:
- **Ліниве завантаження** для продуктивності
- **Налаштовувані параметри**: zoom, pitch, heading
- **Responsive дизайн** для всіх пристроїв
- **Accessibility** підтримка

### LazyGoogleMap.tsx
Оптимізована версія Google Maps:
- **Відкладене завантаження** через 2 секунди після page load
- **Плейсхолдер з анімацією** завантаження
- **Suspense fallback** для кращого UX
- **Мемоізація** компонента для ефективності

### VideoContainer.tsx
Комплексний компонент для відео контенту:
- **VideoContainer**: Основний контейнер з float/expanded логікою
- **VideoWrapper**: Обгортка з hover ефектами
- **VideoImage**: Статичне зображення з opacity анімаціями
- **VideoElement**: Відео елемент з ref підтримкою
- **VideoBackdrop**: Декоративний фон
- **CVA варіанти**: Розширення/звуження з плавними переходами

### Form Components
- **FormInput**: Стандартизоване поле вводу з label та стилями
- **FormTextarea**: Текстове поле з налаштовуваною кількістю рядків
- **Accessibility**: Правильні атрибути та семантика
- **Consistent styling**: Єдиний дизайн для всіх форм

### Button Component
Розширена кнопка з варіантами:
- **cta variant**: Для головних закликів до дії
- **submit variant**: Для форм з hover ефектами
- **asChild**: Підтримка рендерингу як інші елементи
- **Radix UI integration**: Доступність та функціональність

## 🏗️ Архітектура компонентів

### Component Variants (CVA)
Використання `class-variance-authority` для гнучкості:
- **VideoContainer**: Expanded/collapsed стани
- **Button**: Multiple variants (cta, submit, secondary)
- **Consistent styling**: Єдина система дизайн-токенів
- **Type safety**: TypeScript інтерфейси для всіх props

### Performance Optimizations
- **Lazy loading**: Google Maps та відео контент
- **Debounced scroll handlers**: Оптимізація прокрутки
- **Memoization**: useMemo для дорогих обчислень
- **Suspense boundaries**: Плавне завантаження компонентів
- **Smart preloading**: Відео завантажується при потребі

### Accessibility Features
- **Semantic HTML**: Правильна структура документа з `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`
- **ARIA attributes**: Базова підтримка з `aria-label`, `aria-labelledby`, `role` атрибутами
- **Focus indicators**: Візуальні стилі для `focus-visible` станів на кнопках та формах
- **Form accessibility**: Правильні `label` прив'язки через `htmlFor` та `id`
- **Screen reader support**: Alt тексти для зображень та семантична розмітка
- **Navigation structure**: Логічний порядок елементів для стандартної таб-навігації

### Кастомні хуки

#### useParallax
- Створює паралакс-ефект при прокрутці
- Оптимізований для продуктивності
- Вимикається в тестовому середовищі

#### useVideoExpansion
- **Debounce optimization**: 30ms затримка для плавності
- **Smart collapse logic**: Розширення/звуження з урахуванням напрямку прокрутки
- **Performance optimized**: useRef для стану та clearTimeout для cleanup
- Вимикається в тестовому середовищі

#### useVideoPreload
- Ліниве завантаження відео
- Завантажує при вході в viewport або через 15с
- Оптимізація bandwidth

## ♿ WCAG 2.1 AA Сумісність

Проект розроблений з дотриманням базових стандартів доступності:

### Семантична розмітка
- Правильне використання HTML5 тегів (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)
- ARIA атрибути для покращення навігації (`aria-label`, `aria-labelledby`)
- Логічна структура документа з правильним ієрархічним порядком

### Навігація та фокус
- **Стандартна таб-навігація** підтримується через природний порядок елементів
- **Focus-visible стилі** для інтерактивних елементів (кнопки, посилання)
- **Form focus management** через правильні label прив'язки
- **Покращення для клавіатури** можливі через додаткову імплементацію

### Контраст та читабельність
- Контрастність тексту відповідає WCAG AA вимогам
- **Чіткі фокус індикатори** на кнопках (`focus-visible:ring-3`)
- **Колірна контрастність** оптимізована для відповідності WCAG стандартам
- Масштабованість тексту без втрати функціональності

#### WCAG Color Contrast Validation
![WCAG Color Contrast Check](spec/wcag/dequeuniversity.com_rules_axe_4.11_color-contrast.png)

- **Змінено червоний колір кнопок** для відповідності WCAG AA вимогам
- **Використано інструменти** [Deque University Color Contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast) для валідації
- **Перевірено контрастність** для всіх текстових елементів та кнопок за допомогою Lighthouse report

### Медіа-контент
- Alt тексти для всіх зображень
- Семантична розмітка для відео контенту
- Описи для складних візуальних елементів

### Потенційні покращення
- Додаткові keyboard event handlers для Enter-навігації
- Skip links для швидкого доступу до контенту
- Розширена ARIA підтримка для динамічного контенту
- Focus trapping для модальних вікон (за потреби)

## 🔍 SEO Оптимізація

### Технічне SEO
- **Core Web Vitals** оптимізація
- **Meta теги** для всіх сторінок
- **Canonical URLs** та hreflang
- **Robots.txt** та sitemap.xml

### Структуровані дані
- **MusicGroup** schema для гурту
- **MusicEvent** schema для концертів
- **Organization** schema для контактів
- **BreadcrumbList** для навігації

### Контентна оптимізація
- Семантична HTML розмітка
- Оптимізовані зображення з WebP
- Ліниве завантаження медіа
- Мобільна оптимізація

## 🧪 Тестування

### Playwright Screenshot Testing
Детальна інформація в [README-PLAYWRIGHT.md](./README-PLAYWRIGHT.md)

#### Основні команди
```bash
# Запустити всі тести
pnpm test

# Оновити скриншоти
pnpm test:screenshot

# Запустити в headed режимі
pnpm test:headed

# Переглянути звіти
pnpm test:report
```

#### Структура тестів
- **Full page screenshots** для візуальної регресії
- **Component-level screenshots** для окремих секцій
- **Cross-browser тестування** (Chrome, Firefox, Safari)
- **Responsive тестування** (Desktop, Mobile, Tablet)

### React Doctor
Аналіз якості React-коду для виявлення проблем:

```bash
# Запустити повний аналіз
pnpm react-doctor

# Порівняти з попереднім станом
pnpm react-doctor:diff
```

React Doctor перевіряє:
- **Безпеку**: Вразливості та best practices
- **Продуктивність**: Оптимізація рендерингу
- **Архітектуру**: Структуру компонентів
- **Коректність**: Потенційні баги
- **Сумісність**: Versії залежностей

## 📈 Lighthouse Testing

Детальна інформація про тестування продуктивності з Lighthouse доступна в [README-LIGHTHOUSE.md](./README-LIGHTHOUSE.md)

### Швидкі команди
```bash
# Основний тест (desktop)
pnpm lighthouse

# Мобільний тест
pnpm lighthouse:mobile

# Обидва тести
pnpm lighthouse:all

# Налаштування для WSL2
pnpm lighthouse:setup
```

### Звіти
- **Основний звіт**: [reports/lighthouse.html](./reports/lighthouse.html)
- **Мобільний звіт**: `reports/lighthouse-mobile.html`
- **Десктопний звіт**: `reports/lighthouse-desktop.html`

## 🎬 Playwright Comparison GIFs

*Цей розділ буде заповнений GIF-анімаціями, що демонструють роботу сайту*

### Плановані демонстрації
- Паралакс-ефекти при прокрутці
- Розширення відео в секції "Наша історія"
- Responsive поведінка на різних пристроях
- Інтерактивні елементи та hover стани
- Навігація та плавна прокрутка

## 🚀 Розгортання

### Локальний розвиток
```bash
# Встановити залежності
pnpm install

# Запустити dev сервер
pnpm dev

# Запустити в продакшн режимі
pnpm build && pnpm start
```

### Environment Variables
```bash
# Тестове середовище (для Playwright)
NEXT_PUBLIC_TEST_ENVIRONMENT=true
```

### Production Deployment
Рекомендовані платформи:
- **Vercel** (рекомендовано для Next.js)

## 📝 Скрипти

```json
{
  "dev": "next dev",
  "build": "next build", 
  "start": "next start",
  "lint": "eslint",
  "test": "playwright test",
  "test:screenshot": "playwright test --update-snapshots",
  "test:headed": "playwright test --headed",
  "test:debug": "playwright test --debug",
  "test:report": "playwright show-report",
  "react-doctor": "react-doctor . --verbose",
  "react-doctor:diff": "react-doctor . --verbose --diff"
}
```

## 🤝 Внесок

1. Fork проекту
2. Створіть feature branch (`git checkout -b feature/amazing-feature`)
3. Commit ваші зміни (`git commit -m 'Add amazing feature'`)
4. Push до branch (`git push origin feature/amazing-feature`)
5. Відкрийте Pull Request

## 📄 Ліцензія

© 2025 «Грим та Грім». Всі права захищені.

## 📞 Контакти

- **Email**: booking@lotoplay.com
- **Phone**: +38 (099) 123-45-67
- **Social**: Instagram, YouTube, Facebook

---

*Проект створений з ❤️ до української музики*
