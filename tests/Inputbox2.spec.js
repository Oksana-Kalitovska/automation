const {test, expect} = require('@playwright/test');

test('Handle Input box', async({page}) => { 

    await page.goto('https://demoqa.com/automation-practice-form');

    // Input box - last name

    await expect(await page.locator('#lastName')).toBeVisible();
    await expect(await page.locator('#lastName')).toBeEmpty();  
    await expect(await page.locator('#lastName')).toBeEditable();  
    await expect(await page.locator('#lastName')).toBeEnabled();    
    

    await page.locator('#lastName').fill('Smith');
    await page.waitForTimeout(5000);
    });