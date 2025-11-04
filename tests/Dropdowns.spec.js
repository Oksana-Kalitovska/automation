const {test, expect} = require('@playwright/test');

test('Dropdowns', async({page}) => { 

await page.goto('https://testautomationpractice.blogspot.com/');

// Multiple ways to select option from the dropdown

// await page.locator('#country').selectOption({label:'Germany'}); // label 
// await page.locator('#country').selectOption('Germany'); // visible text
// await page.locator('#country').selectOption({value: 'uk'}); // value
// await page.locator('#country').selectOption({index: 1}); // index
// await page.selectOption('#country', 'Germany');

//Assertions
//1) check number of options in dropdown - Approach1

// const options = await page.locator('#country option');
// await expect(options).toHaveCount(10);

//2) check number of options in dropdown - Approach2

// const options = await page.$$('#country option');
// console.log('Number of options :',options.length);
// await expect(options.length).toBe(10);


//3) check presence of value in the dropdown - Approach1
// const content = await page.locator('#country').textContent();
// await expect(content.includes('Germany')).toBeTruthy();

//4) check presence of value in the dropdown - Approach2 - USING LOOPING
/*
const options =  await page.$$('#country option');
let status=false;

for(const option of options ) 
{
    //console.log(await option.textContent());
let value = await option.textContent();
if(value.includes('France'))

{
 status=true;
 break;
}
}

expect(status).toBeTruthy();
*/

//4) check presence of value in the dropdown - Approach2 - USING LOOPING

const options =  await page.$$('#country option');
for(const option of options ) 
{
let value = await option.textContent();
if(value.includes('france'))

{
await page.selectOption('#country option', value);
 break;
}
}






await page.waitForTimeout(5000);

});