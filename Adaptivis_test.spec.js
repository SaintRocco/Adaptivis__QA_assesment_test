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
   await page.locator('Create an Account').first().click();

   //Fill in the First Name
   await page.getByLabel('firstname').fill("John");

   //Fill in the Last Name 
   await page.getByLabel('lastname').fill('Smith');

   //Fill in the Email
   await page.getByLabel('email').fill('jsmith@gmail.com');

   //Fill in the Password and Comfim Password
   await papge.getByLabel('password').fill('Thestrongestpassword3');
   await papge.getByLabel('password-confirmation').fill('Thestrongestpassword3');

   //Click the Create an Account button option
   await page.getByText('Create an Account').click();
});


test('Item selection', async ({page}) => {

   //Check item selection
   await page.goto('https://magento.softwaretestingboard.com/');

   //Mouse hover over the item
   await page.getByAltText('Fusion Backpack').hover();

   //Mouse click on the item
   await page.getByAltText('Fusion Backpack').click();

});