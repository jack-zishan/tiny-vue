import { test, expect } from '@playwright/test'

test('操作列基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-serial-column/tiny-first-menu-default-serial-column')

  await expect(page.getByText('5')).toHaveText('5')
})
