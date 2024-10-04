import Locators from '../pageobjects/Locators/Locators.js'
import Utilities from '../pageobjects/loginCredentials.js';

describe('Click on Stream and Create a Stream', () => {
    const locator =new Locators();
    const utilities = new Utilities();
    it('LLogin a Client user', async () => {

        await browser.url(utilities.URL);
        await browser.maximizeWindow();

        await utilities.Signin();
        
        const clientDashboard = $('//*[@id="kt_app_toolbar_container"]/div/h1');
        const dashboard = await clientDashboard.getText();
        console.log('This is New Dashboard::::::::', dashboard);
        await expect(clientDashboard).toHaveTextContaining('Dashboard')

    });
    it('Create a Stream under an Event', async () => {
        await locator.messaging.click();
        await browser.pause(3000);

        await locator.replyMessage.click();
        await locator.messageBody.waitForClickable({ timeout: 10000 });
        await locator.messageBody.click();
        await locator.clickmessageBody.setValue('Yes this is Mecasm Platfrom');
        await browser.pause(3000);
        await locator.sendMessage.click();
        await browser.pause(10000);
        // await utilities.Toaster();
        (await locator.liveSupprt).click();
        await locator.click1st.waitForClickable({ timeout: 10000 });
        (await locator.click1st).click();
        // await browser.pause(3000);
        (await locator.typeMsg).setValue("This is new Message Test");
        await browser.pause(3000);
        (await locator.sendMsg).click();
        await browser.pause(3000);
        await locator.click5th.waitForClickable({ timeout: 10000 });
        (await locator.click5th).click();
        await (await locator.typeMsg).setValue('Yes you have to Join now');
        (await locator.sendMsg).click();

               
    });

    
});