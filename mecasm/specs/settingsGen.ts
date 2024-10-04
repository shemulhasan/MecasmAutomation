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
    it('Update Settings General Informations', async () => {
        await locator.settings.click();
        await browser.pause(3000);
        await locator.settingsGen.click();

        await browser.pause(4000);

        const imagePath = 'D:\\All Project\\WEBCAST\\logo\\dad.png';
        await locator.cngLogo.addValue(imagePath);
        await browser.pause(5000);

        await locator.genFName.clearValue();
        browser.pause(3000);
        await locator.genFName.setValue('Prolific Logic');
        await locator.genLName.clearValue();
        await locator.genLName.setValue('Private Limited');
        browser.pause(3000);

        await locator.genPhoneNo.clearValue();
        await locator.genPhoneNo.setValue('01645377462');
        await browser.pause(2000);

        await locator.genCountry.click();
        await browser.keys(['Franc','Enter'])
        await browser.pause(2000);

        await locator.genState.clearValue();
        await locator.genState.setValue('Bourgogne-Franche-Comté');
        await browser.pause(2000)

        await locator.genCity.clearValue();
        await locator.genCity.setValue('BÈgles');
        await browser.pause(2000)

        await locator.genPostCode.clearValue();
        await locator.genPostCode.setValue('75020');
        await browser.pause(2000)

        await locator.genStreatAdd.clearValue();
        await locator.genStreatAdd.setValue('Chez Mireille COPEAU Apartment 3   Line 2');
        await browser.pause(2000);

        await locator.settingsSave.click();
        
        await utilities.Toaster();
        await browser.pause(8000);
       
    });
    it('Update Password for Client Admin', async() => {

        await locator.passwordCng.click();

        await locator.currentPass.setValue('123456789');
        await browser.pause(3000);
        await locator.newPass.setValue('123456789');
        await locator.confirmPass.setValue('123456789');

        await browser.pause(5000);

        await locator.updatePass.click();
        await utilities.Toaster();
        await browser.pause(5000);
        
    });

});