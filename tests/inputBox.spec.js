const {test, expect}=require('@playwright/test');

test('Handle Input box', async({page}) => {


await page.goto('https://demoqa.com/automation-practice-form');


// Input box - first name
await expect(await page.locator('#firstName')).toBeVisible();
await expect(await page.locator('#firstName')).toBeEmpty();  
await expect(await page.locator('#firstName')).toBeEditable();  
await expect(await page.locator('#firstName')).toBeEnabled();  


await page.locator('#firstName').fill('John');


await page.waitForTimeout(5000);

});