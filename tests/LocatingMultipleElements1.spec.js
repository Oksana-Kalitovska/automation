const {test, expect} = require('@playwright/test');

test('Home Page Test1', async ({page}) => {
    await page.goto('https://demoblaze.com/');


/*
    const links = await page.$$('a');

    for (const link of links) {
    const linkText = await link.textContent();

console.log(linkText);

    }
});

*/

 await page.waitForSelector("//div[@id='tbodyid']//div//h4");

    const products = await page.$$("//div[@id='tbodyid']//div//h4");

    for (const product of products) {
        const productText = await product.textContent();
        console.log(productText);
    }

});
