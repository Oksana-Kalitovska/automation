const {test, expect}=require('@playwright/test');


// in config file
// video: { mode: 'on' }, // 'on' | 'off' | 'retain-on-failure' | 'on-first-retry' | 'retain-on-first-retry'

test('RecordVideo', async({page}) => {
 await page.goto('https://demoblaze.com/');
       //Login
    await page.locator('#login2').click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();
    await expect(page.locator('#logout2')).toBeVisible();

});

