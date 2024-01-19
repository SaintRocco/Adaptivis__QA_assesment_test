const {test, expect} = require('@playwright/test');

test('Initial test', async ({page}) => {
    
   //initial test
   await page.goto('https://magento.softwaretestingboard.com/');
   await expect(page).toHaveTitle('Home Page');

});

test('Account creation', async ({page}) => {

   //Check Account creation with valild data
   await page.goto('https://magento.softwaretestingboard.com/');

   //Click the Create an Account link
   await page.getByText('Create an Account').click();
})