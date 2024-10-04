import Locators from '../pageobjects/Locators/Locators.js'
import Utilities from '../pageobjects/loginCredentials.js';

describe('Login with Valid Credentials to Client', () => {
    const locator = new Locators();
    const utilities = new Utilities();
    it('Login a Client admin user', async () => {

        await browser.url(utilities.URL);
        await browser.maximizeWindow();

        await utilities.Signin();

        const clientDashboard = $('//*[@id="kt_app_toolbar_container"]/div/h1');
        const dashboard = await clientDashboard.getText();
        console.log('This is New Dashboard::::::::', dashboard);
        await expect(clientDashboard).toHaveTextContaining('Dashboard')

    });
    it('Create an Client User and Access Module', async () => {
        await locator.ca_Users.click();
        await browser.pause(3000);

        (await locator.userCreate).click();

        await locator.enterFName.setValue('Shemul');
        await locator.enterLName.setValue('Hasans');
        await locator.enterUserEmail.click();
        await locator.enterUserEmail.setValue('hasan_shemul@yopmail.com');
        await browser.pause(3000);
        await locator.removeModule.click();
        await browser.pause(3000);
        await locator.clickModuleAcc.click();
        await browser.keys(['Event', 'Enter']);
        await browser.pause(2000);
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['stream', 'Enter']);
        await browser.pause(2000);
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['voti', 'Enter']);
        await browser.pause(2000);
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['live-Con', 'Enter']);
        await browser.pause(2000);
        await locator.clickModuleAcc.click();
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['Event-Par', 'Enter']);
        await browser.pause(2000);
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['messag', 'Enter']);
        await browser.pause(2000);
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['analy', 'Enter']);
        await browser.pause(2000);
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['client', 'Enter']);
        await browser.pause(2000);
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['email-Set', 'Enter']);
        await browser.pause(2000);
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['ticket', 'Enter']);
        await browser.pause(2000);
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['page', 'Enter']);
        await browser.pause(2000);
        locator.clickModuleAcc.clearValue();
        await locator.clickModuleAcc.click();
        await browser.keys(['Live-Supp', 'Enter']);
        await browser.pause(2000);

        await locator.enterPhone.click();
        await locator.enterPhone.setValue('013534345345');
        await locator.enterPass.setValue('123456789');
        await browser.pause(3000);

        await locator.eventAccess.click();
        await browser.keys(['Board of Director Selection', 'Enter']);

        await locator.saveUser.waitForClickable({ timeout: 10000 });
        await locator.saveUser.click();
        await browser.pause(5000);

        await utilities.Toaster();

    });


});