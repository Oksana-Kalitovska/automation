const {test, expect} = require('@playwright/test');

test('Dropdowns', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

   //  await page.locator('#country').selectOption('India'); // by value
    

    //Assertions
    /*
//1) check number of options in dropdown - Approach1
const options = await page.locator('#country option');
// console.log('Number of options :',await options.count());
await expect(options).toHaveCount(10);
    await page.waitForTimeout(5000);   */
 
    
    /*
//2) check number of options in dropdown - Approach2
const options = await page.$$('#country option');
console.log('Number of options :',options.length);
await expect(options.length).toBe(10);
*/

/*
//3) check presence of value in the dropdown - Approach1
const content = await page.locator('#country').textContent();
await expect(content.includes('Germany')).toBeTruthy();
await page.waitForTimeout(5000);  */

//4) check presence of value in the dropdown - Approach2 - USING LOOPING
/* const options =  await page.$$('#country option');
let status=false;

for (const option of options )

{
    let value = await option.textContent();
    if(value.includes('France'))
    {
        status=true;    
        break;
    }
}
*/
// check presence of value in the dropdown and select it - Approach2 - USING LOOPING
const options = await page.$$('#country option');
for (const option of options)
{
    let value = await option.textContent();
    if(value.includes('france'))
    {  
        await page.selectOption("option[value='france']", value);
        break;
    }

    }

    await page.waitForTimeout(5000);
    
});