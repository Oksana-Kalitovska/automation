class LoginPage {
    async navigateToLoginPage () { 
        await page.goto('https://demoblaze.com/index.html');

    }

    async submitLoginForm () {
        await page.fill('#loginusername', 'xxx');
        await page.fill('#loginpassword', 'xxx@123');
        await page.click("button[onclick='logIn()']");
        await page.waitForTimeout(3000);
    }

    async submitLoginWithParameters (username, password) { // New method to submit login with parameters
        await page.fill('#loginusername', username); 
        await page.fill('#loginpassword', password);
        await page.click("button[onclick='logIn()']");
    }

    async assertUserIsLoggedIn () {
        await page.waitForSelector('#cat');
    }

    async pause () {
        await page.waitForTimeout(3000);
    }

}

module.exports = { LoginPage };