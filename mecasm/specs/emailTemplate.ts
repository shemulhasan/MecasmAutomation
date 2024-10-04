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
    it('Update Email Template Settings ', async () => {
        await locator.settings.click();
        await browser.pause(3000);
        await locator.emailTemplate.click();
        await browser.pause(3000);

        await locator.templateManage.click();
        await browser.pause(3000);

        await locator.tempsubject.click();
        await locator.tempsubject.clearValue();
        await locator.tempsubject.setValue('Event Participant Register Verify Mail');
        await browser.pause(3000);

        // await locator.tempHeader.click();
        // // await browser.keys(['Control', 'a']);
        // // await locator.tempHeader.clearValue();
        // await locator.tempHeader.setValue('Account Varification Email');
        // await browser.pause(3000);

        // await locator.tempDesc.click();
        // await locator.tempDesc.replaceValue('New account register  to {event_name}. Verify your email by clicking the button below','New account register  to {event_name}. Verify your email by clicking the button below and if button does not work then click Here {verify_link}');
        // await locator.tempDesc.click();
        // await locator.tempDesc.addValue('New account register  to {event_name}. Verify your email by clicking the button below and if button does not work then click Here {verify_link}');

        await locator.tempSave.click();
        await utilities.Toaster();
        await browser.pause(8000);


    });

});