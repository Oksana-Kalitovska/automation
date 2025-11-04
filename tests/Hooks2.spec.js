const { test, expect } = require('@playwright/test');

let page;
// PA: in config file we change fullyParalle --> from true to false;
// 


test.beforeEach(async ({browser}) => {                   // Цей блок коду виконується перед кожним тестом
    page = await browser.newPage();                     // Створює нову сторінку для кожного тесту
    await page.goto('https://demoblaze.com/');
       //Login
    await page.locator('#login2').click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

});

test.afterEach(async () => {
    // Logout
    await page.locator('#logout2').click();

});


test('Home Page Test', async () => {    // PA: page is cleared, no page with async as we create new page in beforeEach block

    

    //Home Page
    const products = await page.$$('.hrefch');  // Цей рядок шукає на вебсторінці всі елементи, які мають CSS-клас hrefch, і зберігає їх у змінну products у вигляді масиву.
    expect(products).toHaveLength(9);     // .toHaveLength();



});

test('+add to cart', async () => { // PA: page is cleared, no page with async as we create new page in beforeEach block
    // Add to cart
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
await page.locator("//a[normalize-space()='Add to cart']").click();



page.on('dialog', async dialog => {
await expect(dialog.message()).toContain('Product added.');
await dialog.accept();


});

 
});
