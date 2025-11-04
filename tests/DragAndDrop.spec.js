const { test, expect} = require('@playwright/test');


test('DragAbdDrop', async ({page}) => {

await page.goto('https://demo.automationtesting.in/Static.html');

const element1= await page.locator("//img[@id='angular']");
const target = await page.locator("#droparea");

// Approach 1
/*
await element1.hover();
await page.mouse.down();

await target.hover();
await page.mouse.up();
*/

// Approach 2
await element1.dragTo(target); // вигллядє простіше




await page.waitForTimeout(5000);


});