# Playwright Screenshot Testing

This project is configured with Playwright for automated screenshot diff comparison testing.

## Setup

Playwright has been installed and configured with screenshot testing capabilities.

## Available Scripts

- `pnpm test` - Run all Playwright tests
- `pnpm test:screenshot` - Run tests and update snapshots
- `pnpm test:headed` - Run tests in headed mode (show browser)
- `pnpm test:debug` - Run tests in debug mode
- `pnpm test:report` - Open the HTML test report

## Running Tests

### First Time - Generate Baseline Screenshots

```bash
# Run tests to generate initial baseline screenshots
pnpm test:screenshot
```

### Subsequent Runs - Compare Against Baseline

```bash
# Run tests to compare against existing screenshots
pnpm test
```

If screenshots don't match, the test will fail and you can review the diff in:
- `test-results/` - For individual test results
- `playwright-report/` - For the HTML report

### Updating Screenshots

When you've made intentional UI changes and want to update the baseline:

```bash
pnpm test:screenshot
```

## Test Structure

- `tests/screenshot-tests/` - Contains all screenshot tests
- `tests/screenshot-tests/homepage.spec.ts` - Homepage screenshot tests
- `tests/screenshot-tests/components.spec.ts` - Component-level screenshot tests

## Adding New Screenshot Tests

1. Create a new `.spec.ts` file in `tests/screenshot-tests/`
2. Use `await expect(page).toHaveScreenshot('name.png')` for full-page screenshots
3. Use `await expect(element).toHaveScreenshot('name.png')` for component screenshots

Example:

```typescript
import { test, expect } from '@playwright/test';

test('my feature matches baseline', async ({ page }) => {
  await page.goto('/my-feature');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveScreenshot('my-feature.png');
});
```

## Configuration

Playwright is configured to:
- Test against Chrome, Firefox, Safari, and mobile viewports
- Start the dev server automatically
- Take screenshots on failure
- Generate HTML reports
- Retry failed tests on CI

## CI/CD

The configuration is ready for CI/CD with automatic browser installation.
