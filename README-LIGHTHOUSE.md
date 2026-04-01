# 📈 Lighthouse Testing Guide

Комплексне тестування продуктивності сайту за допомогою Google Lighthouse для мобільних та десктопних пристроїв.

## Звіти та результати

### Файли звітів
- **HTML звіт**: [reports/lighthouse.html](./reports/lighthouse.html) - Інтерактивний звіт про продуктивність
- **JSON дані**: `reports/lighthouse.json` - Структуровані дані для аналізу
- **Мобільний звіт**: `reports/lighthouse-mobile.html` - Звіт для мобільних пристроїв
- **Десктопний звіт**: `reports/lighthouse-desktop.html` - Звіт для десктопних пристроїв

### Очікувані показники
- **Performance**: 90+ (Green) - Швидкість завантаження та Core Web Vitals
- **Accessibility**: 95+ (Green) - Доступність для користувачів з обмеженнями
- **Best Practices**: 90+ (Green) - Дотримання стандартів веб-розробки
- **SEO**: 95+ (Green) - Оптимізація для пошукових систем

## Налаштування для WSL2

Для тестування в WSL2 потрібно запустити Chrome в headless режимі:

```bash
# Крок 1: Запустити Chrome в headless режимі
pnpm lighthouse:setup

# Крок 2: Запустити Lighthouse тестування
pnpm lighthouse
```

Альтернативно (ручний запуск):
```bash
google-chrome --headless --remote-debugging-port=9222
```

## Доступні команди

### Основне тестування
```bash
# Повний HTML звіт з автоматичним відкриттям (за замовчуванням desktop)
pnpm lighthouse

# Тільки JSON дані для аналізу
pnpm lighthouse:json
```

### Тестування для різних пристроїв
```bash
# Мобільна версія (375x667px, 3G мережа)
pnpm lighthouse:mobile

# Десктопна версія (1350x940px, швидкісна мережа)
pnpm lighthouse:desktop

# JSON дані для мобільної версії
pnpm lighthouse:mobile-json

# JSON дані для десктопної версії
pnpm lighthouse:desktop-json

# Запустити обидва тести послідовно
pnpm lighthouse:all
```

### Налаштування середовища
```bash
# Запуск Chrome для WSL2
pnpm lighthouse:setup

# Альтернативно (ручний запуск)
google-chrome --headless --remote-debugging-port=9222
```

## Процес тестування

### 1. Локальне тестування
```bash
# Переконайтесь що dev сервер запущено
pnpm dev

# В іншому терміналі запустіть Chrome (WSL2)
pnpm lighthouse:setup

# Запустіть тестування
pnpm lighthouse
```

### 2. CI/CD інтеграція
```bash
# Для автоматичного тестування в CI/CD
pnpm lighthouse:ci

# Аналіз результатів
cat reports/lighthouse-ci.json | jq '.categories'
```

### 3. Моніторинг продуктивності
- **Performance budgets**: Контроль розміру ресурсів
- **Regression detection**: Виявлення погіршень
- **Trend analysis**: Відстеження динаміки показників

## Структура звітів
```
reports/
├── lighthouse.html           # Основний звіт (desktop)
├── lighthouse.json            # Основні дані (desktop)
├── lighthouse-mobile.html     # Мобільний звіт
├── lighthouse-mobile.json      # Мобільні дані
├── lighthouse-desktop.html    # Десктопний звіт
└── lighthouse-desktop.json     # Десктопні дані
```

## Параметри тестування

### Мобільна версія (`--form-factor=mobile`)
- **Розмір екрану**: 375x667px (iPhone 6/7/8)
- **Мережа**: 3G (1.6 Mbps download, 750 Kbps upload)
- **CPU**: 4x уповільнення
- **Важливо**: Для Core Web Vitals рейтингу мобільної версії

### Десктопна версія (`--form-factor=desktop`)
- **Розмір екрану**: 1350x940px
- **Мережа**: Швидкісне підключення
- **CPU**: Без уповільнення
- **Важливо**: Для SEO та загальної продуктивності

## Автоматичне оновлення
Файли звітів перезаписуються при кожному запуску тестування, що дозволяє:
- **Моніторити поточний стан** продуктивності
- **Порівнювати результати** в часі
- **Інтегрувати в CI/CD** пайплайни
- **Відстежувати регресії** в реальному часі

## Пакетні скрипти

### Основні команди
- `lighthouse` - Основний тест з HTML звітом
- `lighthouse:setup` - Запуск Chrome для WSL2
- `lighthouse:json` - Експорт в JSON формат

### Пристрої
- `lighthouse:mobile` - Мобільний тест
- `lighthouse:desktop` - Десктопний тест
- `lighthouse:mobile-json` - Мобільний тест в JSON
- `lighthouse:desktop-json` - Десктопний тест в JSON
- `lighthouse:all` - Обидва тести послідовно

## Поради та найкращі практики

### Перед тестуванням
1. **Очистіть кеш** браузера
2. **Закрийте зайві вкладки** для точних результатів
3. **Переконайтесь** що dev сервер працює стабільно
4. **Запустіть кілька разів** для середніх показників

### Аналіз результатів
1. **Core Web Vitals** - найважливіші метрики
2. **Opportunities** - рекомендації для покращення
3. **Diagnostics** - детальна діагностика проблем
4. **Passed audits** - що вже працює добре

### Моніторинг в часі
- **Зберігайте історію** результатів
- **Відстежуйте тренди** продуктивності
- **Встановіть пороги** для регресій
- **Автоматизуйте** перевірки в CI/CD

## Інтеграція з іншими інструментами

### Playwright
Lighthouse можна інтегрувати з Playwright для комплексного тестування:
```bash
# Запустити Playwright тести
pnpm test

# Потім Lighthouse тестування
pnpm lighthouse:all
```

### React Doctor
Після оптимізації продуктивності перевірте якість коду:
```bash
pnpm react-doctor
```

## Усунення проблем

### Поширені проблеми
- **Chrome не запускається** - перевірте `pnpm lighthouse:setup`
- **Port 9222 зайнятий** - змініть порт в скриптах
- **Повільні результати** - закрийте інші програми
- **Нестабільні показники** - запустіть кілька разів

### WSL2 специфічні проблеми
- **Chrome не встановлено** - `sudo apt install google-chrome-stable`
- **X11 forwarding** - для GUI режиму
- **Права доступу** - перевірте права на `reports/` папку

## Майбутні покращення

### Плановані функції
- [ ] Автоматичний звіт в Slack/Discord
- [ ] Порівняння з попередніми результатами
- [ ] Performance budgets в CI/CD
- [ ] Графіки трендингу
- [ ] A/B тестування оптимізацій

### Інтеграції
- [ ] GitHub Actions workflow
- [ ] Vercel Analytics
- [ ] Sentry performance monitoring
- [ ] Web Vitals library
