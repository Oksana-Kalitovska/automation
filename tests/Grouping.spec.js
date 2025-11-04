const {test, expect} = require('@playwright/test');


test.beforeAll(async() => {

console.log('This will run before all hooks');
});

test.afterAll(async() => {
console.log('This will run after all hooks');
});

test.beforeEach(async() => {
console.log('This will run before each test');
});

test.afterEach(async() => {
console.log('This will run after each test');
});


test.describe('Group 1', async() => {   // Grouping tests

test('Test1', async({page}) => { 

console.log('This is Test 1');

});

test('Test2', async({page}) => { 

console.log('This is Test 2');

});



});


test.describe.skip('Group 2', async() => {    
// Grouping tests   //test.describe.only - only this group will run
// test.describe.skip - this group will be skipped
test('Test3', async({page}) => { 

console.log('This is Test 3');

});

test('Test4', async({page}) => { 

console.log('This is Test 4');

});



});



