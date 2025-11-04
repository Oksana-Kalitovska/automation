const {test,expect} = require('@playwright/test');

// in config file we add screenshot on/off

test('page screenshot', async({page}) => { 
await page.goto('https://demoblaze.com/index.html');

   //Login
    await page.locator('#login2').click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

 });

