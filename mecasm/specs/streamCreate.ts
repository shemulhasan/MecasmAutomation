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
        // const clickEvent = $('//*[@id="#kt_app_sidebar_menu"]/div[11]/a[1]/span[2]');
        await locator.clickStream.click();
        await browser.pause(3000);

        // const createStream =$('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[1]/a');
        await locator.createStream.click();

        // const inputStreamName=$('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[1]/div/div[1]/div[2]/div/div[3]/div[3]');
        await locator.inputStreamName.click();
        await locator.inputStreamName.setValue('Prolific Express Portfolio create Stream');

        await locator.inputSubTitle.click();
        await locator.inputSubTitle.setValue('This is demo prolific infotech demo');

        await locator.selectEvent.click();
        await browser.keys(['New Test for Analytics Event', 'Enter']);

        locator.streamSave.waitForClickable({ timeout: 10000 });
        await locator.streamSave.click();
        await browser.pause(3000);
        await utilities.Toaster();

               
    });

    
});