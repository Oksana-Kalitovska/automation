const {test,expect} = require('@playwright/test');

test('Table handling', async({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const table= await page.locator('#productTable');

// 1) total number of columns 
const columns = await table.locator('thead tr th');     // PT on .table
console.log('Total Number of Columns:', await columns.count());

const rows = await table.locator('tbody tr');
console.log('Total Number of Rows:', await rows.count());

expect(await columns.count()).toBe(4);
expect(await rows.count()).toBe(5);

// 2) select checkbox for product4

/* const matchedRow = rows.filter({

has: page.locator('td'),
hasText: 'Smartwatch'

})
await matchedRow.locator("input").check();
*/

// 3) select multiple products

/* await selectProduct(rows, page, 'Smartwatch	');
await selectProduct(rows, page, 'Tablet');
await selectProduct(rows, page, 'Laptop'); */


// 4) print all product details with loop

/* for(let i=0; i<await rows.count(); i++) {

    const row = await rows.nth(i); // capture particular row
    const tds = await row.locator('td'); // capture all tds(columns) in that row
for(let j=0; j<await tds.count()-1; j++)  // no need to add last column (in our case - select checkbox)
    {
   console.log(await tds.nth(j).textContent()); // print each column value
    }


} */

// 5) handle pagination - read data from all the pages

const pages = await page.locator('.pagination li a'); // getting all pages
console.log('Number of pages in the table:', await pages.count());

for(let p=0; p< await pages.count(); p++) 
    {
 if(p>0) {

    await pages.nth(p).click();
 }
    
    }

    for(let i=0; i<await rows.count(); i++) {

    const row = await rows.nth(i); // capture particular row
    const tds = await row.locator('td'); // capture all tds(columns) in that row
for(let j=0; j<await tds.count()-1; j++)  // no need to add last column (in our case - select checkbox)
    {
   console.log(await tds.nth(j).textContent()); // print each column value

    }

await page.waitForTimeout(3000);
}



await page.waitForTimeout(3000);

});

/* async function selectProduct(rows, page, name)
{
const matchedRow = rows.filter({

has: page.locator('td'),
hasText: name

})
await matchedRow.locator("input").check();


} */