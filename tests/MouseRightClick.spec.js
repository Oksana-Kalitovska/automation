const {test, expect} = require('@playwright/test'); 
// import {test, expect} from '@playwright/test';

test('MouseRightClick', async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

const button = await page.locator("//button[normalize-space()='START']");
//right click 
await button.click({button: 'right'});



await page.waitForTimeout(5000);
});