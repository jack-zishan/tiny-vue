import { test, expect } from '@playwright/test'

test('可清空', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/cascader/clearable')
  const text = await page.locator('#preview').getByRole('textbox').inputValue()
  await expect(text).toEqual('指南+安装+项目登记')
  await page.locator('.tiny-input__suffix-inner > .tiny-svg').click()
  const textClear = await page.locator('#preview').getByRole('textbox').inputValue()
  await expect(textClear).toEqual('')
  const medium = page.locator('.tiny-cascader--medium')
  await expect(medium).toBeVisible()
})
