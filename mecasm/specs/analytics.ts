import Locators from '../pageobjects/Locators/Locators.js'
import Utilities from '../pageobjects/loginCredentials.js';

describe('Login with Valid Credentials to Client', () => {
    const locator = new Locators();
    const utilities = new Utilities();
    // const actions = new Actions(browser);
    it('Login a Client admin user', async () => {

        await browser.url(utilities.URL);
        await browser.maximizeWindow();

        await utilities.Signin();

        const clientDashboard = $('//*[@id="kt_app_toolbar_container"]/div/h1');
        const dashboard = await clientDashboard.getText();
        console.log('This is New Dashboard::::::::', dashboard);
        await expect(clientDashboard).toHaveTextContaining('Dashboard')

    });

    it('Create a Vote Annual Metting and Save ', async () => {
        await locator.clickStream.click();
        await browser.pause(3000);
        await locator.openStream.click();
        await browser.pause(3000);

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        // await browser.closeWindow()
        await browser.switchToWindow(handles[1])
        await browser.pause(5000);

        (await locator.streamLogin).click();
        (await locator.streamLogin).setValue('testing@yopmail.com');
        await browser.pause(3000);
        await locator.loginButton.click();
        await browser.pause(3000);
        await locator.askQuestion.click();
        await locator.askQuestion.setValue('How can I Give vote from this Stream');
        await locator.sendQues.click();
        await browser.pause(5000);

        // const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        // await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        await browser.pause(5000);

        (await locator.analitics).click();
        await browser.pause(6000);
        (await locator.chartView).click();
        (await locator.ThisYear).click();
        await browser.pause(2000);
        await browser.keys(['This Year','Enter']);
        await browser.pause(5000);
    


    });
    // it('Voting Live and Get vote From an event', async () => {
        
    //     await locator.liveVoteOn.click();
    //     await browser.pause(3000);
    //     await locator.voteResultOn.click();

    //     await locator.clickEvent.click();
    //     (await locator.clickEventLivepage).click();
    //     await browser.pause(3000);

    //     const handles = await browser.getWindowHandles()
    //     await browser.switchToWindow(handles[0])
    //     // await browser.closeWindow()
    //     await browser.switchToWindow(handles[1])
    //     await browser.pause(5000);

    //     (await locator.inputEventUser).click();
    //     (await locator.inputEventUser).setValue('labuchange@yopmail.com')
    //     await browser.pause(3000);

    //     (await locator.loginUser).click();
    //     await browser.pause(3000);

    //     // (await locator.giveVote).waitForClickable();
    //     // (await locator.giveVote).click();
    //     (await locator.checkBoxS2).click();
    //     (await locator.radioChk2).click();
    //     await browser.pause(5000);

    //     (await locator.submitVote).click();
    //     await browser.pause(6000);

    // });

});