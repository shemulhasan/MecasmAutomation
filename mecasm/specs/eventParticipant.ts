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
    it('Create an Event Participant', async () => {
        await locator.eventParticipant.click();
        await browser.pause(3000);

        await locator.addEventParticpnt.click();
        await browser.pause(3000)
        await locator.participantName.click();
        await locator.participantName.setValue('John Walker');
       await locator.participanteEmail.click();
        await locator.participanteEmail.setValue('johnwalker@yopmail.com');
        await browser.pause(3000);
        await locator.participantePass.setValue('12345');
        await browser.pause(4000);
       
        await locator.clickVoter.click();
        // await locator.appearSelect.waitForClickable({ timeout: 10000 });
        // await locator.appearSelect.click();
        await browser.pause(5000)
        
       await locator.selectVoter.waitForClickable({timeout:10000})
       await browser.keys(['DownArrow','Enter'])
        await locator.selectVoter.click();
        // await browser.keys(['Yes','Enter'])
        await browser.pause(3000);
        await locator.classSelect.click();
        await browser.pause(3000);
        await locator.selectClass1.click();
        await browser.pause(3000);
        await locator.selectClass3.waitForClickable({ timeout: 10000 });
        await locator.selectClass3.click();
        await locator.setClassWeight1.setValue('2');
        await locator.setClassWeight3.setValue('3');

        await locator.saveButton.waitForClickable({timeout:10000});
        await locator.saveButton.click();
        await browser.pause(5000)
        
        await utilities.Toaster();
               
    });

    
});