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
    it('Create an Client from CA', async () => {
        await locator.caClient.click();
        await browser.pause(3000);

        await locator.createClient.click();

        await locator.inputFName.setValue('Shemul');
        await locator.inputLName.setValue('Hasans');
        await locator.inputEmail.click();
        await locator.inputEmail.setValue('hasans_shemul@yopmail.com');
        await browser.pause(3000);
        // await locator.removeModule.click();
        // await browser.pause(3000);
        
        await locator.inputPhone.click();
        await locator.inputPhone.setValue('013534345345');
        await locator.maxNumbeEvent.setValue('5');
        await locator.inputPass.setValue('123456789');
        await browser.pause(3000);

        await locator.maxNumberStream.click();
        await locator.maxNumberStream.setValue('5');
        

        await locator.removeModules.click();
        await browser.pause(3000);
        await locator.moduleAccess.click();
        await browser.keys(['Event', 'Enter']);
        await browser.pause(2000);
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['stream', 'Enter']);
        await browser.pause(2000);
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['voti', 'Enter']);
        await browser.pause(2000);
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['live-Con', 'Enter']);
        await browser.pause(2000);
        await locator.moduleAccess.click();
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['Event-Par', 'Enter']);
        await browser.pause(2000);
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['messag', 'Enter']);
        await browser.pause(2000);
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['analy', 'Enter']);
        await browser.pause(2000);
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['client', 'Enter']);
        await browser.pause(2000);
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['email-Set', 'Enter']);
        await browser.pause(2000);
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['ticket', 'Enter']);
        await browser.pause(2000);
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['page', 'Enter']);
        await browser.pause(2000);
        locator.moduleAccess.clearValue();
        await locator.moduleAccess.click();
        await browser.keys(['Live-Supp', 'Enter']);
        await browser.pause(2000);

        await locator.activeInactive.click();
        await browser.pause(5000);
        await locator.activeInactive.click()
        await browser.pause(5000);

        locator.saveClient.waitForClickable({ timeout: 10000 });
        await locator.saveClient.click();
        await browser.pause(5000);

        await utilities.Toaster();

    });


});