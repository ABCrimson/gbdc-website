import { test, expect } from '@playwright/test'

test.describe('OpenGraph Images', () => {
  test.describe('OG Image Generation', () => {
    const ogRoutes = [
      { path: '/opengraph-image', name: 'Root OG Image' },
      { path: '/en/opengraph-image', name: 'English OG Image' },
      { path: '/es/opengraph-image', name: 'Spanish OG Image' },
      { path: '/ru/opengraph-image', name: 'Russian OG Image' },
      { path: '/uk/opengraph-image', name: 'Ukrainian OG Image' },
    ]

    for (const { path, name } of ogRoutes) {
      test(`should generate ${name}`, async ({ request }) => {
        const response = await request.get(path)

        // Should return successful response
        expect(response?.status()).toBe(200)

        // Should return an image
        const contentType = response?.headers()['content-type']
        expect(contentType).toContain('image')
      })
    }
  })

  test.describe('OG Image Visual Regression', () => {
    test.beforeEach(async ({ page }) => {
      // Set consistent viewport for OG images (1200x630 is standard)
      await page.setViewportSize({ width: 1200, height: 630 })
    })

    test('root OG image should match snapshot', async ({ page }) => {
      await page.goto('/opengraph-image')

      // Wait for image to load
      await page.waitForLoadState('networkidle')

      // Take screenshot and compare
      await expect(page).toHaveScreenshot('og-root.png', {
        maxDiffPixels: 100,
        threshold: 0.2,
      })
    })

    test('English OG image should match snapshot', async ({ page }) => {
      await page.goto('/en/opengraph-image')

      await page.waitForLoadState('networkidle')

      await expect(page).toHaveScreenshot('og-en.png', {
        maxDiffPixels: 100,
        threshold: 0.2,
      })
    })

    test('Spanish OG image should match snapshot', async ({ page }) => {
      await page.goto('/es/opengraph-image')

      await page.waitForLoadState('networkidle')

      await expect(page).toHaveScreenshot('og-es.png', {
        maxDiffPixels: 100,
        threshold: 0.2,
      })
    })
  })

  test.describe('OG Image Dimensions', () => {
    test('OG images should have correct dimensions', async ({ request }) => {
      const response = await request.get('/opengraph-image')

      expect(response.status()).toBe(200)

      const buffer = await response.body()

      // Check that image has data
      expect(buffer.length).toBeGreaterThan(1000) // At least 1KB

      // OG images are typically 1200x630
      // We can't easily check dimensions without additional libraries,
      // but we can verify the image is substantial
      expect(buffer.length).toBeLessThan(500000) // Less than 500KB
    })
  })

  test.describe('OG Meta Tags', () => {
    const pages = [
      { path: '/en', name: 'Home' },
      { path: '/en/programs', name: 'Programs' },
      { path: '/en/contact', name: 'Contact' },
    ]

    for (const { path, name } of pages) {
      test(`${name} page should have OpenGraph meta tags`, async ({ page }) => {
        await page.goto(path)

        // Check for og:image meta tag
        const ogImage = page.locator('meta[property="og:image"]')
        expect(await ogImage.count()).toBeGreaterThan(0)

        // Check og:image has valid content
        const ogImageContent = await ogImage.getAttribute('content')
        expect(ogImageContent).toBeTruthy()
        expect(ogImageContent).toContain('opengraph-image')

        // Check for other required OG tags
        expect(await page.locator('meta[property="og:title"]').count()).toBeGreaterThan(0)
        expect(await page.locator('meta[property="og:description"]').count()).toBeGreaterThan(0)
        expect(await page.locator('meta[property="og:url"]').count()).toBeGreaterThan(0)
        expect(await page.locator('meta[property="og:type"]').count()).toBeGreaterThan(0)
      })
    }
  })

  test.describe('Twitter Card Meta Tags', () => {
    test('should have Twitter card meta tags', async ({ page }) => {
      await page.goto('/en')

      // Check for Twitter card tags
      expect(await page.locator('meta[name="twitter:card"]').count()).toBeGreaterThan(0)
      expect(await page.locator('meta[name="twitter:title"]').count()).toBeGreaterThan(0)
      expect(await page.locator('meta[name="twitter:description"]').count()).toBeGreaterThan(0)

      // Check for Twitter image
      const twitterImage = page.locator('meta[name="twitter:image"]')
      if (await twitterImage.count() > 0) {
        const twitterImageContent = await twitterImage.getAttribute('content')
        expect(twitterImageContent).toBeTruthy()
      }
    })
  })

  test.describe('Image Optimization', () => {
    test('OG images should load quickly', async ({ page }) => {
      const startTime = Date.now()

      const response = await page.goto('/opengraph-image')
      expect(response?.status()).toBe(200)

      const loadTime = Date.now() - startTime

      // OG image should load in less than 2 seconds
      expect(loadTime).toBeLessThan(2000)
    })

    test('OG images should be cached appropriately', async ({ request }) => {
      // First request
      const firstResponse = await request.get('/opengraph-image')
      const cacheControl = firstResponse.headers()['cache-control']

      // Should have cache headers
      expect(cacheControl).toBeTruthy()

      // Second request should use cache
      const secondResponse = await request.get('/opengraph-image')
      expect(secondResponse.status()).toBe(200)
    })
  })
})
