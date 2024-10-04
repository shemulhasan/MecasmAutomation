import Locators from '../pageobjects/Locators/Locators.js'
import Utilities from '../pageobjects/loginCredentials.js';

describe('Log in Webcast by Authentic User', () => {
    const locator = new Locators();
    const utilities = new Utilities();
    it('Log in to Staging Server', async () => {

        await browser.url(utilities.URL);
        await browser.maximizeWindow();

        await utilities.Signin();

        const clientDashboard = $('//*[@id="kt_app_toolbar_container"]/div/h1');
        const dashboard = await clientDashboard.getText();
        console.log('This is New Dashboard::::::::', dashboard);
        await expect(clientDashboard).toHaveTextContaining('Dashboard')

    });
    it('Stream update for Specific Event', async () => {

        await locator.clickEventSelect.click();
        await browser.keys(['New Test For Analytics', 'Enter']);
        await browser.pause(4000);

        await locator.clickStream.click();
        await browser.pause(3000);

        await locator.clickStreamEdit.click();

        await locator.inputSubTitle.setValue('This is demo prolific infotech demo');

        await locator.editSlug.clearValue();
        await browser.pause(5000);
        await locator.editSlug.setValue('prolific-express-portfolio');
        await browser.pause(3000);

        locator.updateStream.waitForClickable({ timeout: 10000 });
        await locator.updateStream.click();
        await browser.pause(3000);
        await utilities.Toaster();

    });
    it('Update Settings', async () => {

        await locator.streamSettings.click();

        await locator.st_date1.click();
        await locator.st_date1.waitForClickable({ timeout: 10000 });
        await browser.pause(5000);
        await locator.startDates.click();

        await locator.st_date2.click();
        await locator.st_date2.waitForClickable({ timeout: 10000 })
        browser.pause(5000);
        await locator.endDates.click();

        await locator.streamStatus.click();
        await browser.pause(5000)
        await browser.keys(['Live', 'Enter']);

        await locator.inputVideoUrl.setValue('https://www.youtube.com/watch?v=NyoXQAYZrKk');

        await locator.streamUpdate.waitForClickable({ timeout: 10000 });
        await locator.streamUpdate.click();

        await browser.pause(3000);
        await utilities.Toaster();
    });
    it('Update Layout Page', async () => {

        await locator.streamLayout.click();

        await locator.streamColor.click();
        await locator.pickColor.waitForClickable({timeout:10000});
        await locator.pickColor.click();

        await locator.streamLayoutType.click();
        browser.keys(['Full','Enter']);
        
        await locator.updtLayout.waitForClickable({ timeout: 10000 });
        await locator.updtLayout.click();

        await browser.pause(3000);
        await utilities.Toaster();
        
    });

});