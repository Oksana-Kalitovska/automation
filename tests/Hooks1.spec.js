const { test, expect } = require('@playwright/test');

test('Home Page Test', async ({page}) => {

    await page.goto('https://demoblaze.com/');
    
    //Login
    await page.locator('#login2').click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

    //Home Page
    const products = await page.$$('.hrefch');  // Цей рядок шукає на вебсторінці всі елементи, які мають CSS-клас hrefch, і зберігає їх у змінну products у вигляді масиву.
    expect(products).toHaveLength(9);     // .toHaveLength();


    // Logout
    await page.locator('#logout2').click();


});

test('+add to cart', async ({page}) => {

    await page.goto('https://demoblaze.com/');


    //Login
    await page.locator('#login2').click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();


    // Add to cart
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
await page.locator("//a[normalize-space()='Add to cart']").click();


page.on('dialog', async dialog => {
await expect(dialog.message()).toContain('Product added.');
await dialog.accept();


});

    // Logout
await page.locator('#logout2').click();


});
