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
        await locator.supportTicket.click();
        await browser.pause(3000);
        await locator.createSuppTicket.click();
        
        await locator.inputSubject.setValue('Can not Log in to and event as a participant');
        await locator.supportTicketCategroy.click();
        await browser.pause(3000);
        await locator.clickCategory.click();
        await browser.keys(['login', 'Enter']);
        await browser.pause(3000);

        await locator.priority.click();
        await browser.pause(3000);
        await locator.selectPriority.click();
        await browser.keys(['High','Enter'])
        await browser.pause(3000);

        await locator.inputDescription.click();
        await locator.inputDescription.setValue('In the Event Page I can not Login as usal with my New Credentials, and can not do anythins to participant acitvity');

        const imagePath = 'D:\\All Project\\WEBCAST\\Required_Field1.png';
        await locator.uploadAttachement.addValue(imagePath);
        await browser.pause(5000);

        await locator.saveSupport.click();
        await browser.pause(5000)

        await utilities.Toaster();

    });
    it('Edit Support Ticket', async() => {
        
        await locator.clickAction.click();
        await browser.pause(3000);
        
        await locator.clickViewReply.click();
        await browser.pause(3000);
        await locator.clickReplyDesc.click();
        await locator.clickReplyDesc.setValue('This ticket is very urgent please update this and inform us');
        await browser.pause(4000);
        await locator.replyTicket.click();
        await browser.pause(5000);
        await locator.clickBack.click();
        await browser.pause(5000);
        await utilities.Toaster();

        await locator.clickAction.click();
        await browser.pause(3000);
        await locator.clickEdit.click();
        await browser.pause(5000);
        await locator.clickCategory1.click();
        await browser.keys(['Webcast','Enter']);
        await browser.pause(5000);

        await locator.updateSuup.click();
        await browser.pause(5000);
        await utilities.Toaster();
        
    });


});