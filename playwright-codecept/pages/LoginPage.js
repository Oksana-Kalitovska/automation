const { I } = inject();

module.exports = {

  // insert your locators 
loginForm: '#logInModal',
username: '#loginusername',
password: '#loginpassword',
submitButton: "button[onclick='logIn()']",

  // and methods here
submitLogin(username, password) {
  I.fillField(this.username, username);
  I.fillField(this.password, password);
  I.click(this.submitButton);
},

assertLoginFormIsVisible () {
  I.seeElement(this.loginForm);
}
};
