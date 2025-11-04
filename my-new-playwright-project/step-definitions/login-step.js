const { Given, When, Then, defineStep } = require('@cucumber/cucumber');
const { LoginPage } = require('../page-objects/login-page.js');

Given('I am on the login page', async function () {
  //await page.goto('https://demoblaze.com/index.html');
  // await page.click('#login2'); // Open login modal

  await LoginPage.navigateToLoginPage();
});

When('I login with valid credentials', async function () {
//   await page.fill('#loginusername', 'pavanol');
//   await page.fill('#loginpassword', 'test@123');
//   await page.click("button[onclick='logIn()']");
//   await page.waitForTimeout(3000);
await LoginPage.submitLoginForm();
 });

Then('I should be logged in successfully', async function () {
  // await page.waitForSelector('#cat');
await LoginPage.assertUserIsLoggedIn();

defineStep('I wait 3 seconds', async function () {
  await LoginPage.pause(); 



});

});

defineStep(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, // Step definition
  async function (username, password) {  // Parameters: username, password
  await LoginPage.submitLoginWithParameters(username, password);  // Call method with parameters
});




