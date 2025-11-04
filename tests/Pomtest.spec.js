const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage.js');
const { HomePage } = require('./pages/HomePage.js');

test('POM', async ({ page }) => {
  // Login
  const login = new LoginPage(page);
  await login.goToLoginPage();
  await login.login('pavanol', 'test@123');
  await page.waitForTimeout(3000);
  // Home page
  const home = new HomePage(page);
  await home.addProductToCart('Nexus 6');
  await page.waitForTimeout(3000);
  await home.goToCart();
  // Cart
});