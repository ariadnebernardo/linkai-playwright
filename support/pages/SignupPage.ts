import { expect, Page } from '@playwright/test'
import { UserSignup } from '../fixtures/User'

export function getSignupPage(page: Page) {
  const emailField = () => {
    return page.getByRole('textbox', { name: 'Seu melhor e-mail para' })
  }
  return {
    open: async () => {
      await page.goto('http://localhost:3000/cadastro')
    },
    fill: async (user: UserSignup) => {
      await page
        .getByRole('textbox', { name: 'Como você gostaria de ser' })
        .fill(user.name)

      await page
        .getByRole('textbox', { name: 'Escolha um @username único (' })
        .fill(user.username)

      await emailField().fill(user.email)

      await page
        .getByRole('textbox', { name: 'Crie uma senha secreta e' })
        .fill(user.password)

      await page
        .getByRole('textbox', { name: 'Repita sua senha para' })
        .fill(user.confirmPassword)
    },
    submit: async () => {
      await page.getByRole('button', { name: 'Criar Conta' }).click()
    },
    validateEmailFieldType: async () => {
      await expect(emailField()).toHaveAttribute('type', 'email')
    },
  }
}
