import {expect, Locator, Page} from '@playwright/test';

export class LoginPage {
    //Define Selectors
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator       ;
    readonly loginButton: Locator;
    // readonly errorMessage: Locator;     

    // Initialize Selectors using constructor
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.locator('text=Log in');
        // this.errorMessage = page.locator('.error-message');
    }
    // Define login page methods
    async navigate() {
        await this.page.goto('https://www.demoblaze.com/');
    }
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}