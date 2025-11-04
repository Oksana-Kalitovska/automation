 const {test,expect} = require('@playwright/test');
 
 // only 
/*
 test.only('test1@sanity', async({page}) => {
console.log('Test 1 started');
 });
*/
// skip
 /* test.skip('test2', async({page}) => {
console.log('Test 2 started');
 });   */

  // skip if condition is met
 /* test('test3', async({page, browserName}) => {
console.log('Test 2 started');
if (browserName === 'firefox') {
    test.skip();
}
 });  */

 /*
 // fixMe - this test is not working
test('test4', async({page}) => {
test.fixme();
console.log('Test 4 started');
 });   */

 // Fail - this test is failing
 /* test('test5', async({page}) => {
test.fail(); // this test is expected to fail
console.log('this is test fail');
// expect(1).toBe(2); // this will fail the test
expect(1).toBe(1); // this will pass the test

 }); */

 // failed based n the condition
/*
 test('test6', async({page}) => {
    if(browserName=== 'firefox') {
        test.fail();
    };

 });  */

 // slow
 
 test('test7', async({page}) => {
   // test.slow(); // this test is expected to be slow
   page.setDefaultTimeout(50000); // set default timeout for the test
    await page.goto('https://testautomationpractice.blogspot.com/');
    console.log('Test 7 started');

 });  