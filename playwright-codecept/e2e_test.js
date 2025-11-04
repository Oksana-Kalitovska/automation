
Feature('Demoblaze tests');

const LoginPage = require('./pages/LoginPage');

Before(({ I }) => {
console.log('Before hook: Navigate to Demoblaze');
  I.amOnPage('https://www.demoblaze.com/index.html');
});

After(({ I }) => {
console.log('After hook: Test completed');
});

Scenario('LoginTest - negative',  ({ I, LoginPage }) => {
I.click('#login2'); // Open login modal
I.waitForVisible('#logInModal', 5); // waits up to 5 seconds
I.seeElement('#logInModal'); // Verify modal is visible
// I.fillField('#loginusername', 'invalidUser');
// I.fillField('#loginpassword', 'invalidPass');
// I.click("button[onclick='logIn()']"); // Submit login form
// I.seeInPopup('Wrong password.'); // Replace with actual alert text

LoginPage.submitLogin('invalidUser', 'invalidPassword');
LoginPage.assertLoginFormIsVisible(); // Verify login form is still visible after failed login


});