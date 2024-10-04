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
    it('Update Email SMTP Settings ', async () => {
        await locator.settings.click();
        await browser.pause(3000);
        await locator.emailSetup.click();
        await browser.pause(3000);

        await locator.fromName.clearValue();
        await locator.fromName.setValue('Prolific Analytics Agent');
        await browser.pause(3000);

        await locator.fromEmail.clearValue();
        await locator.fromEmail.setValue('noreply@mecasm.com');
        await browser.pause(3000);

        await locator.mailHost.clearValue();
        await locator.mailHost.setValue('smtp.gmail.com');
        await browser.pause(3000);

        await locator.mailPort.clearValue();
        await locator.mailPort.setValue('465');
        await browser.pause(3000);
        
        await locator.mailUserName.clearValue();
        await locator.mailUserName.setValue('shemul.prolific@gmail.com');
        await browser.pause(3000);

        await locator.mailPassword.clearValue();
        await locator.mailPassword.setValue('bdppotvxyzwzarjp');
        await browser.pause(3000);

        // await locator.mailEncryption.clearValue();
        await locator.mailEncryption.click();
        await browser.keys(['SSL','Enter']);

        await locator.updateMail.click();
        await utilities.Toaster();
        await browser.pause(8000);
      
       
    });
    it('Send a Test Mail for Confirmation', async() => {
        (await locator.sendTestmail).click();
        (await locator.sendTestmail).setValue('shemul.netizen@gmail.com');
        await browser.pause(3000);

        await locator.mailContent.click();
        await locator.mailContent.setValue('This is test mail for confirmation the mail settings is configured successfull and its works Good, THanks');
        await browser.pause(3000);
        await locator.mailSend.click()
        await utilities.Toaster();
        await browser.pause(8000);
        
        
    });
    

});