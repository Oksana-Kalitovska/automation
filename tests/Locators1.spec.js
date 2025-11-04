const {test, expect} = require('@playwright/test');

test('Home Page Test1', async ({page}) => {

   await page.goto('https://demoblaze.com/index.html');

// Click on Login button property
// await page.locator('id=login2').click();
await page.click('id=login2');

// Provide username - CSS
// await page.click('#loginusername').fill('pavanol');
await page.fill('#loginusername', 'pavanol');
// await page.type('#loginusername','pavanol');

// Provide password - CSS
await page.fill("input[id='loginpassword']",'test@123');


// Click on Login button - XPath
await page.click("(//button[normalize-space()='Log in'])[1]");

// Verify the logout link presence - xpath
const logoutLink = await page.locator("(//a[normalize-space()='Log out'])[1]");

await expect(logoutLink).toBeVisible();

await page.close();


});
