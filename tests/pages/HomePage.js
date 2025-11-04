exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = 'id=navbarExample';
        this.addToCartButton = 'id=navbarExample';
        this.cart = 'id=cartur';
    ;
    }


/*
    async goToHomePage() {
        await this.page.goto('https://demoblaze.com/index.html');
    }

    async clickContact() {
        await this.page.locator(this.contactLink).click();
    }

    async clickCart() {
        await this.page.locator(this.cartLink).click();
    }

    async clickLogout() {
        await this.page.locator(this.logoutLink).click();
    }
}

*/  async addProductToCart(productName) {   
    const productList =  await this.page.$$(this.productList); 
    for (const product of productList) {
        if (productName === await product.textContent()) {
            await product.click()
            break;
}       } 

await this.page.on('dialog', async dialog => {
    if(dialog.message().includes('added')){
        await dialog.accept();  
    }
    });

    await this.page.locator(this.addToCartButton).click();
};

async goToCart() {
    await this.page.locator(this.cart).click();
}};    