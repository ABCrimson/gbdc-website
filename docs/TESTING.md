# Testing Guide

This guide covers all testing strategies for the Great Beginnings Day Care website.

## Table of Contents

- [Testing Stack](#testing-stack)
- [Running Tests](#running-tests)
- [Unit & Component Tests](#unit--component-tests)
- [E2E Tests](#e2e-tests)
- [Visual Regression Tests](#visual-regression-tests)
- [Writing Tests](#writing-tests)
- [CI/CD Integration](#cicd-integration)
- [Troubleshooting](#troubleshooting)

---

## Testing Stack

### Unit & Component Testing
- **Vitest** - Fast unit test runner
- **React Testing Library** - Component testing utilities
- **@testing-library/jest-dom** - Custom matchers

### E2E Testing
- **Playwright** - Modern browser automation
- **Chromium** - Primary test browser
- Visual regression with screenshots

---

## Running Tests

### Unit & Component Tests

```bash
# Run all unit tests
bun test

# Run tests in watch mode
bun test:ui

# Run tests with coverage
bun test:coverage
```

### E2E Tests

```bash
# Run all E2E tests
bun test:e2e

# Run E2E tests with UI
bun test:e2e:ui

# Run E2E tests in headed mode (see browser)
bun test:e2e:headed

# Debug E2E tests
bun test:e2e:debug
```

### Run All Tests

```bash
# Run unit tests first, then E2E
bun test && bun test:e2e
```

---

## Unit & Component Tests

### Location
- Unit tests: `**/*.test.ts`
- Component tests: `**/*.test.tsx`
- Setup: `vitest.setup.ts`
- Config: `vitest.config.ts`

### Example Test

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
```

### Best Practices

1. **Test User Behavior, Not Implementation**
   ```typescript
   // ✅ Good
   expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()

   // ❌ Bad
   expect(wrapper.find('.submit-button').exists()).toBe(true)
   ```

2. **Use Accessible Queries**
   ```typescript
   // Prefer these (in order):
   getByRole
   getByLabelText
   getByPlaceholderText
   getByText

   // Avoid:
   getByTestId
   getByClassName
   ```

3. **Test Accessibility**
   ```typescript
   it('is keyboard accessible', async () => {
     render(<Form />)
     await userEvent.tab()
     expect(screen.getByLabelText(/name/i)).toHaveFocus()
   })
   ```

### Coverage Goals
- **Overall:** 80%+
- **Critical paths:** 100%
- **Components:** 90%+
- **Utils:** 90%+

---

## E2E Tests

### Location
- E2E tests: `e2e/**/*.spec.ts`
- Config: `playwright.config.ts`

### Test Suites

#### 1. Navigation Tests (`e2e/navigation.spec.ts`)
- Page rendering
- Locale switching
- Accessibility
- Performance
- Error handling

#### 2. Form Tests (`e2e/forms.spec.ts`)
- Contact form validation
- Tour request submission
- Error states
- Rate limiting
- Keyboard accessibility

#### 3. Visual Tests (`e2e/opengraph.spec.ts`)
- OG image generation
- Visual regression
- Meta tag validation
- Performance

### Example E2E Test

```typescript
import { test, expect } from '@playwright/test'

test('contact form submission', async ({ page }) => {
  await page.goto('/en/contact')

  // Fill form
  await page.getByLabel(/name/i).fill('John Doe')
  await page.getByLabel(/email/i).fill('john@example.com')
  await page.getByLabel(/message/i).fill('Hello!')

  // Submit
  await page.getByRole('button', { name: /send/i }).click()

  // Verify success
  await expect(page.getByText(/sent successfully/i)).toBeVisible()
})
```

### Best Practices

1. **Use Page Object Pattern for Complex Flows**
   ```typescript
   class ContactPage {
     constructor(private page: Page) {}

     async fillForm(data: ContactFormData) {
       await this.page.getByLabel(/name/i).fill(data.name)
       await this.page.getByLabel(/email/i).fill(data.email)
       // ...
     }

     async submit() {
       await this.page.getByRole('button', { name: /send/i }).click()
     }
   }
   ```

2. **Wait for Network Idle on Dynamic Pages**
   ```typescript
   await page.goto('/en/gallery')
   await page.waitForLoadState('networkidle')
   ```

3. **Use Fixtures for Test Data**
   ```typescript
   const testUser = {
     name: 'Test User',
     email: 'test@example.com',
     phone: '555-1234',
   }
   ```

---

## Visual Regression Tests

### Snapshot Testing

Playwright automatically stores screenshots in `e2e/__screenshots__/`.

```typescript
test('homepage matches snapshot', async ({ page }) => {
  await page.goto('/en')
  await expect(page).toHaveScreenshot('homepage.png', {
    maxDiffPixels: 100,
    threshold: 0.2,
  })
})
```

### Update Snapshots

```bash
# Update all snapshots
bun test:e2e --update-snapshots

# Update specific test snapshots
bun test:e2e opengraph --update-snapshots
```

### Visual Regression for OG Images

```typescript
test('OG image visual regression', async ({ page }) => {
  await page.setViewportSize({ width: 1200, height: 630 })
  await page.goto('/opengraph-image')

  await expect(page).toHaveScreenshot('og-root.png', {
    maxDiffPixels: 100,
  })
})
```

---

## Writing Tests

### Test Structure

```typescript
describe('Feature Name', () => {
  beforeEach(() => {
    // Setup before each test
  })

  afterEach(() => {
    // Cleanup after each test
  })

  describe('Sub-feature', () => {
    it('should do something specific', () => {
      // Arrange
      const data = { /* ... */ }

      // Act
      const result = doSomething(data)

      // Assert
      expect(result).toBe(expected)
    })
  })
})
```

### Naming Conventions

```typescript
// ✅ Good test names
it('displays error when email is invalid')
it('submits form when all fields are valid')
it('redirects to home page after login')

// ❌ Bad test names
it('works')
it('test 1')
it('should work correctly')
```

### Testing Async Code

```typescript
// Async/await
it('fetches data', async () => {
  const data = await fetchData()
  expect(data).toBeDefined()
})

// Promises
it('resolves promise', () => {
  return fetchData().then(data => {
    expect(data).toBeDefined()
  })
})

// Testing errors
it('handles errors', async () => {
  await expect(fetchInvalidData()).rejects.toThrow('Error message')
})
```

### Mocking

```typescript
import { vi } from 'vitest'

// Mock function
const mockFn = vi.fn()
mockFn.mockReturnValue(42)

// Mock module
vi.mock('@emailjs/browser', () => ({
  send: vi.fn().mockResolvedValue({ status: 200 })
}))

// Spy on method
const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
```

---

## CI/CD Integration

### GitHub Actions

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: oven-sh/setup-bun@v1
        with:
          bun-version: 1.2.23

      - name: Install dependencies
        run: bun install

      - name: Run unit tests
        run: bun test

      - name: Install Playwright browsers
        run: bunx playwright install chromium

      - name: Run E2E tests
        run: bun test:e2e

      - name: Upload test results
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: test-results
          path: |
            playwright-report/
            test-results/

      - name: Upload coverage
        if: success()
        uses: codecov/codecov-action@v4
        with:
          files: ./coverage/coverage-final.json
```

### Vercel Deployment

Add to `vercel.json`:

```json
{
  "buildCommand": "bun run build && bun test",
  "devCommand": "bun run dev",
  "installCommand": "bun install",
  "framework": "nextjs"
}
```

### Pre-commit Hooks

Install Husky:

```bash
bun add -D husky
bunx husky init
```

Add to `.husky/pre-commit`:

```bash
#!/bin/sh
bun test
```

---

## Troubleshooting

### Common Issues

#### 1. Tests Timeout

```typescript
// Increase timeout for slow tests
test('slow test', async ({ page }) => {
  test.setTimeout(60000) // 60 seconds
  // ...
})
```

#### 2. Flaky Tests

```typescript
// Use waitFor for dynamic content
await waitFor(() => {
  expect(screen.getByText(/loaded/i)).toBeInTheDocument()
})

// Retry flaky E2E tests
test.describe.configure({ retries: 2 })
```

#### 3. Port Already in Use

```bash
# Kill process on port 3000
# Windows:
taskkill /F /IM node.exe

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

#### 4. Snapshots Failing

```bash
# Review diff in Playwright UI
bun test:e2e:ui

# Update if changes are intentional
bun test:e2e --update-snapshots
```

#### 5. Import Errors in Tests

```typescript
// Add to vitest.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
```

### Debug Mode

#### Vitest Debug

```bash
# Run specific test file
bun test button.test.tsx

# Run tests matching pattern
bun test -t "should render"

# Show console output
bun test --reporter=verbose
```

#### Playwright Debug

```bash
# Debug mode with browser DevTools
bun test:e2e:debug

# Headed mode to watch tests
bun test:e2e:headed

# Generate trace for failed tests
bun test:e2e --trace on
```

### Test Performance

```bash
# Run tests in parallel (default)
bun test

# Run tests serially
bun test --no-parallel

# Limit workers
bun test --max-workers=2
```

---

## Test Coverage Reports

### Generate Coverage

```bash
# Unit test coverage
bun test:coverage

# View HTML report
open coverage/index.html
```

### Coverage Thresholds

Set in `vitest.config.ts`:

```typescript
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      statements: 80,
      branches: 75,
      functions: 80,
      lines: 80,
    },
  },
})
```

---

## Best Practices Summary

### ✅ DO:
- Test user behavior, not implementation details
- Use semantic queries (getByRole, getByLabelText)
- Write descriptive test names
- Keep tests isolated and independent
- Mock external dependencies
- Test accessibility
- Test error states
- Use meaningful assertions

### ❌ DON'T:
- Test implementation details
- Use arbitrary timeouts (use waitFor instead)
- Share state between tests
- Write tests that depend on execution order
- Ignore flaky tests
- Skip error handling tests
- Test framework internals

---

## Next Steps

1. ✅ Run existing tests: `bun test && bun test:e2e`
2. ✅ Review test coverage: `bun test:coverage`
3. ✅ Add tests for new features as you build
4. ✅ Set up CI/CD with GitHub Actions
5. ✅ Configure pre-commit hooks

**Need help?** Check [Vitest docs](https://vitest.dev/) or [Playwright docs](https://playwright.dev/).
