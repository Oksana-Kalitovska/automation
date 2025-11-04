const {test, expect} = require('@playwright/test');

test('Locators builtin1', async ({page})=>{

  await page.goto('https://demo.nopcommerce.com/register');   
  

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  const logoElement = await page.locator('.header-logo');
  await expect(logoElement).toBeVisible();

  const searchBox = await page.locator('#small-searchterms');
  await expect(searchBox).toBeEnabled();

  const maleRadioButton = await page.locator('#gender-male');
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

  const newsletterCheckbox = await page.locator('#Newsletter');
  await expect(newsletterCheckbox).toBeChecked();

  const registerButton = await page.locator('#register-button');
  await expect(registerButton).toHaveAttribute('type', 'submit');

  await expect(await page.locator('.page-title h1')).toHaveText('Register');

  await expect(await page.locator('.page-title h1')).toContainText('Reg');

  const emailInput = await page.locator('#Email');
  await emailInput.fill('test@demo.com');
  await expect(emailInput).toHaveValue('test@demo.com');

  
});