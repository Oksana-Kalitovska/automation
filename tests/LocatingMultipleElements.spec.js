const {test, expect} = require('@playwright/test');



test('LocatingMultipleElements', async({page}) => {

    await page.goto('https://demoblaze.com/index.html');


   /* const links = await page.$$('a');

for(const link of links) {
const linktext= await link.textContent();
console.log(linktext);

}
*/
// await page.waitForSelector("//div[@id='tbodyid']//div//h4/a"); 

const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

for(product of products)
{
    const prodName = await product.textContext();
    console.log(prodName);
}




})