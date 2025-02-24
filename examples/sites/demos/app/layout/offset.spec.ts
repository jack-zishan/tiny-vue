import { test, expect } from '@playwright/test'

test('偏移值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/layout/offset')
  const div2 = page.getByText('offset 1')
  await expect(div2).toHaveClass(/col/)
})
