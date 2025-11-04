 const {test,expect} = require('@playwright/test');
 
 test('test1@sanity', async({page}) => {
console.log('Test 1 started');
 });

 test('test2@sanity', async({page}) => {
console.log('Test 2 started');
 });

 test('test3@reg', async({page}) => {
console.log('Test 3 started');
 });

 test('test4@reg', async({page}) => {
console.log('Test 4 started');
 });

  test('test5@sanity@reg', async({page}) => { // This test has multiple tags
console.log('Test 5 started');
 });

 // npx playwright test Tags.spec.js --project=chromium --headed --grep "@sanity@reg"  - to run tests with multiple tags
 //  npx playwright test Tags.spec.js --project=chromium --headed --grep "@sanity" //  - to run tests with single tag
 // npx playwright test Tags.spec.js --project=chromium --headed --grep-invert "@sanity" //  - to run tests without @sanity tag