import { test } from '@playwright/test'
import { LoginPage } from '../pages/login-page'

let loginPage: LoginPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
})

test('Deve logar com sucesso', async ({ page }) => {
    await loginPage.go()
    await loginPage.signIn('qa', 'cademy')
    await loginPage.loggedIn()
})

test('Senha incorreta', async ({ page }) => {
    await loginPage.go()
    await loginPage.signIn('qa', 'abc123')
    await loginPage.toastMessage('Oops! Credenciais inválidas :(')
})

test('Nome obrigatório', async ({ page }) => {
    await loginPage.go()
    await loginPage.signIn('', 'abc123')
    await loginPage.toastMessage('Informe o seu nome de usuário!')
})

test('Senha obrigatória', async ({ page }) => {
    await loginPage.go()
    await loginPage.signIn('qa', '')
    await loginPage.toastMessage('Informe a sua senha secreta!')
})