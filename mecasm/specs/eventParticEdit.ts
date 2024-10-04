import Locators from '../pageobjects/Locators/Locators.js'
import Utilities from '../pageobjects/loginCredentials.js';

describe('Login with Valid Credentials to Client', () => {
    const locator = new Locators();
    const utilities = new Utilities();
    it('Login With a Client Admin', async () => {

        await browser.url(utilities.URL);
        await browser.maximizeWindow();

        await utilities.Signin();

        const clientDashboard = $('//*[@id="kt_app_toolbar_container"]/div/h1');
        const dashboard = await clientDashboard.getText();
        console.log('This is New Dashboard::::::::', dashboard);
        await expect(clientDashboard).toHaveTextContaining('Dashboard')

    });
    it('Create a Stream under an Event', async () => {
        await locator.eventParticipant.click();
        await browser.pause(3000);

        await locator.editParticipant.click();
        await browser.pause(3000)
        await locator.memberNo.click();
        await locator.memberNo.setValue('45HD64');
        await locator.clickClass.click();
        await browser.pause(3000);
        // await locator.addClass.waitForClickable({timeout:10000});
        await browser.keys(['Class 3', 'Enter']);
        await locator.weightEdit1.click();
        await locator.weightEdit1.setValue('3');
        await browser.pause(3000);
        await locator.weightEdit2.click();
        await locator.weightEdit2.setValue('2');
        await browser.pause(4000);



        await locator.updateParticipant.waitForClickable({ timeout: 10000 });
        await locator.updateParticipant.click();
        await browser.pause(5000);
        await utilities.Toaster();

        await locator.pagination2.click();
        await browser.pause(3000);
        await locator.enableCheck1.click();
        await locator.enableCheck2.click();


        // const isAlertOpen = await browser.isAlertOpen(); //get the status of alert open or not
        // if (isAlertOpen) {
        //     const alertText = await browser.getAlertText(); //get the alert text
        //     console.log("The alert text is:", alertText) //logs the text to console
        //     await browser.acceptAlert(); //accepts the alert popup

        // }

        await locator.varifyUser.click();
        await browser.pause(3000);
        // const popUpOpen = $('//*[@id="kt_app_body"]/div[5]/div')
        // await browser.switchToFrame(frameOpen);
        await locator.popUpOpen.click();
        await locator.yesVerify.click();
        await browser.pause(3000);
        await browser.keys(['Enter']);
        
        await browser.pause(3000);

        await locator.enableCheck1.click();
        await locator.enableCheck2.click();

        await locator.voterUnvoter.click();
        await browser.pause(3000);
        // const frameOpen = $('//*[@id="kt_modal_new_target_new"]/div/div')
        // await browser.switchToFrame(frameOpen);
        await locator.frameOpen.click();

        // await browser.isAlertOpen();
        // await browser.switchToFrame(locator.frameOpen);
        // await locator.voterUnvoter.waitForClickable({ timeout: 10000 });
        await locator.classSelectPu.click();
        await browser.keys(['Class 1', 'Enter']);
        await browser.pause(3000);
        await locator.classSelectPu.clearValue();
        await locator.classSelectPu.click();
        await browser.keys(['Class 2', 'Enter']);
        await browser.pause(3000);
        await locator.classSelectPu.clearValue();
        await locator.classSelectPu.click();
        await browser.keys(['Class 3', 'Enter']);

        await locator.submitVoter.click();
        // await utilities.Toaster();
        await browser.pause(5000);

    });
});