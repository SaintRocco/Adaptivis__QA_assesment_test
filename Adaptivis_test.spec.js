const {test, expect} = require('@playwright/test');

test('Account Creation', async ({page}) => {
    
   await page.goto('https://magento.softwaretestingboard.com/');
   await expect(page).toHaveTitle('Home Page');

})