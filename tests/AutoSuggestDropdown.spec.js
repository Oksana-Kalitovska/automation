const {test, expect} = require('@playwright/test');

test('AutoSuggestDropdown', async({page}) => {
    await page.goto('https://www.redbus.in/');

    await page.locator(".inputsWrapper___31a052").fill('Delhi');
    await page.waitForSelector('');

    const fromCityOptions = await page.$$('');
for(fromCityOption of fromCityOptions) {

const value = await option.textContent();
console.log(value);
if(value.includes('Delhi')) 
{
await option.click();
break;
}
}


await page.waitForTimeout(5000);

});