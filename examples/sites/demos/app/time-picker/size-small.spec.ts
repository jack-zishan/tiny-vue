import { test, expect } from '@playwright/test'

test('尺寸设置small', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-picker/size-small')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor')
  await expect(timePicker).toHaveCSS('height', '36px')
})
