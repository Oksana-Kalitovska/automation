const {test,expect} = require('@playwright/test');

test('page screenshot', async({page}) => { 
await page.goto('https://demo.opencart.ua/');
await page.screenshot({ path:'tests/screenshots/'+Date.now()+'HomePage.png'})    // Зберігаємо скріншот сторінки
// Date.now()  - це мілісекунди з 1 січня 1970 року, що дозволяє створити унікальне ім'я файлу
 });


 
test('full page screenshot', async({page}) => { 
await page.goto('https://demo.opencart.ua/');
await page.screenshot({ path:'tests/screenshots/'+Date.now()+'FullPage.png', fullPage:true})   // Зберігаємо скріншот сторінки
// Date.now()  - це мілісекунди з 1 січня 1970 року, що дозволяє створити унікальне ім'я файлу
});



 
test.only('element screenshot', async({page}) => { 
await page.goto('https://demo.opencart.ua/');
await page.locator("//body/div[@class='container']/div[@class='row']/div[@id='content']/div[@class='row']/div[1]").screenshot({ path:'tests/screenshots/'+Date.now()+'Mac.png'}) 

 });

