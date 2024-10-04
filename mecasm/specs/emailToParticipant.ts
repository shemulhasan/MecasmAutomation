import Locators from '../pageobjects/Locators/Locators.js'
import Utilities from '../pageobjects/loginCredentials.js';

describe('Login with Valid Credentials to Client', () => {
    const locator =new Locators();
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
    it('Send an Email to All Participants', async () => {
        await locator.eventParticipant.click();
        await browser.pause(3000);

        await locator.clickEmailBlast.click();
        await locator.emailSubject.setValue('This is Test Email,Don`t Reply this');
        await locator.emailBody.click();
        await browser.keys(["Enter"]);
        await locator.emailBody.setValue('Hello dear this is Test Email to sent your {user_email}');
        await locator.sendEmail.waitForClickable({timeout:10000});
        await locator.sendEmail.click();
        await browser.pause(5000);
        
        // await utilities.Toaster(); 
               
    });

    
});