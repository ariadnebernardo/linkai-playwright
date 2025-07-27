import { test, expect } from '@playwright/test'

import { getSignupPage } from '../support/pages/SignupPage'
import { UserSignup } from '../support/fixtures/User'
import { getDashPage } from '../support/pages/DashPage'
import { getToast } from '../support/pages/components/Toast'
import { getNewUser } from '../support/fixtures/User'
import { removeUserByEmail } from '../support/utils/mongoUtils'

test('Deve realizar o cadastro com sucesso', async ({ page }) => {
  const signupPage = getSignupPage(page)
  const dashPage = getDashPage(page)
  const toast = getToast(page)

  const user: UserSignup = getNewUser()
  await removeUserByEmail(user.email)

  await signupPage.open()
  await signupPage.fill(user)
  await signupPage.submit()

  await expect(dashPage.welcome()).toContainText(`Olá, ${user.name}!`)
  await expect(toast.element()).toContainText(
    'Conta criada com sucesso!Bem-vindo ao Linkaí. Agora você pode criar seu perfil.'
  )
})

test('Deve exibir erro ao tentar cadastrar com campos obrigatórios em branco', async ({
  page,
}) => {
  const signupPage = getSignupPage(page)
  const toast = getToast(page)

  await signupPage.open()
  await signupPage.submit()

  await expect(toast.element()).toContainText(
    'Campos obrigatóriosPor favor, preencha todos os campos.'
  )
})

test('Não deve cadastrar quando o email for incorreto', async ({ page }) => {
  const signupPage = getSignupPage(page)

  const user: UserSignup = {
    name: 'Fernando',
    username: 'fernando',
    email: 'www.teste.com.br',
    password: 'abc123',
    confirmPassword: 'abc123',
  }

  await signupPage.open()
  await signupPage.fill(user)
  await signupPage.submit()
  await signupPage.validateEmailFieldType()
})

test('Não deve cadastrar quando username é incorreto', async ({ page }) => {
  const signupPage = getSignupPage(page)
  const toast = getToast(page)

  const user: UserSignup = {
    name: 'Fernando',
    username: 'fernando&papito',
    email: 'papito@papito',
    password: 'abc123',
    confirmPassword: 'abc123',
  }

  await signupPage.open()
  await signupPage.fill(user)
  await signupPage.submit()

  await expect(toast.element()).toContainText(
    'Username inválidoO username deve conter apenas letras, números e underscores.'
  )
})

test('Deve exibir erro quando a confirmação de senha for diferente da senha', async ({
  page,
}) => {
  const signupPage = getSignupPage(page)
  const toast = getToast(page)

  const user: UserSignup = {
    name: 'Fernando',
    username: 'fernando_papito',
    email: 'papito@papito.com.br',
    password: 'pwd123',
    confirmPassword: '123pwd',
  }

  await signupPage.open()
  await signupPage.fill(user)
  await signupPage.submit()

  await expect(toast.element()).toContainText(
    'Senhas não coincidemA confirmação de senha deve ser igual à senha.'
  )
})
