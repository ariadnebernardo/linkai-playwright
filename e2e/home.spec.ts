import { test, expect } from '@playwright/test'

test('Deve exibir o título', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Linkaí/)

  await page.waitForTimeout(3000)
})
