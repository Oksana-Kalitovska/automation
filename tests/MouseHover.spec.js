const {test, expect} = require('@playwright/test'); 
// import {test, expect} from '@playwright/test';

test('MouseHover', async ({page})=>{
await page.goto('https://demo.opencart.ua/');

const desktop = await page.locator("(//li[@class='dropdown'])[2]");
const mac  = await page.locator("//a[normalize-space()='Mac (1)']");

// mouse hover
await desktop.hover();
await mac.hover();


await page.waitForTimeout(5000);

});