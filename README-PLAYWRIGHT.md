# 🎭 Playwright Screenshot Testing

Проект налаштований з Playwright для автоматизованого тестування скріншотів та порівняння змін.

## Налаштування

Playwright встановлено та налаштовано з можливістю тестування скріншотів.

## Доступні команди

- `pnpm test` - Запустити всі тести Playwright
- `pnpm test:screenshot` - Запустити тести та оновити скріншоти
- `pnpm test:headed` - Запустити тести в режимі headed (показати браузер)
- `pnpm test:debug` - Запустити тести в режимі відлагодження
- `pnpm test:report` - Відкрити HTML звіт тестів

## Запуск тестів

### Перший запуск - Генерація базових скріншотів

```bash
# Запустити тести для генерації початкових скріншотів
pnpm test:screenshot
```

### Подальші запуски - Порівняння з базою

```bash
# Запустити тести для порівняння з існуючими скріншотами
pnpm test
```

Якщо скріншоти не збігаються, тест не пройде, і ви можете переглянути різницю в:
- `test-results/` - Для результатів окремих тестів
- `playwright-report/` - Для HTML звіту

### Оновлення скріншотів

Коли ви внесли навмисні зміни в UI і хочете оновити базу:

```bash
pnpm test:screenshot
```

## Структура тестів

- `tests/screenshot-tests/` - Містить всі тести скріншотів
- `tests/screenshot-tests/homepage.spec.ts` - Тести скріншотів головної сторінки
- `tests/screenshot-tests/components.spec.ts` - Тести скріншотів компонентів

## Додавання нових тестів скріншотів

1. Створіть новий `.spec.ts` файл в `tests/screenshot-tests/`
2. Використовуйте `await expect(page).toHaveScreenshot('name.png')` для скріншотів всієї сторінки
3. Використовуйте `await expect(element).toHaveScreenshot('name.png')` для скріншотів компонентів

Приклад:

```typescript
import { test, expect } from '@playwright/test';

test('мої функції відповідають базі', async ({ page }) => {
  await page.goto('/my-feature');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveScreenshot('my-feature.png');
});
```

## Конфігурація

Playwright налаштовано для:
- Тестування в Chrome, Firefox, Safari та мобільних viewport
- Автоматичного запуску dev сервера
- Знімання скріншотів при помилках
- Генерації HTML звітів
- Повторних спроб невдалих тестів в CI

## CI/CD

Конфігурація готова для CI/CD з автоматичною установкою браузерів.
