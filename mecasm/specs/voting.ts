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
        await locator.votings.click();
        await browser.pause(3000);
        await locator.addVote.click();
        await browser.pause(3000);

        await locator.inputTitle.setValue('This is testing Vote for All participant');
        await browser.pause(3000);

        await locator.voteType.click();
        await browser.keys(['annual', 'Enter']);
        await locator.displyTime.setValue('10000');
        await browser.pause(3000);

        await locator.voteStatus.click();
        await browser.keys(['Publish', 'Enter']);

        await locator.displyType.click();
        await browser.keys(['side', 'Enter']);

        await browser.pause(3000);
        await locator.accessType.click();
        await browser.keys(['Open for All', 'Enter']);
        await browser.pause(3000);

        (await locator.priorityCheck).clearValue();
        (await locator.priorityCheck).setValue('4');
    
        // await locator.numberOfCheck.setValue('2');

        await browser.pause(8000);
        // (await locator.formbuilder).getActiveElement();
        // await locator.formbuilder.click();



        // (const sourceElement =$('//*[@id="frmb-1698309799494-control-box"]/li[3]');
        // const targetElement =$('//*[@id="frmb-1698309799494-stage-wrap"]');


        // await sourceElement.waitForDisplayed()
        // await targetElement.waitForDisplayed();
        // await browser.pause(3000);
        // // await checkBoxGrp.dragAndDrop(await dropable);
        // await sourceElement.scrollIntoView();
        // await targetElement.scrollIntoView();
        // await browser.execute((sourceSelector, targetSelector) => {
        //     const sourceElements = document.querySelector(sourceSelector);
        //     const targetElements = document.querySelector(targetSelector);

        //     // Simulate custom drag-and-drop events here, if necessary.
        // }, sourceElement.selector, targetElement.selector);)
        
        
        // const sourceElementXPath = '//*[@id="frmb-1698309799494-control-box"]/li[3]';
        // const targetElementXPath = '//*[@id="frmb-1698309799494-stage-wrap"]';

        // // Locate source and target elements using XPath selectors
        // const sourceElement = $(sourceElementXPath);
        // const targetElement = $(targetElementXPath);

        // // Scroll both elements into view
        // await sourceElement.scrollIntoView();
        // await targetElement.scrollIntoView();

        // // Wait for source and target elements to be displayed
        // await sourceElement.waitForDisplayed();
        // await targetElement.waitForDisplayed();

        // // Trigger custom drag-and-drop events using JavaScript
        // await browser.execute((source, target) => {
        //     const sourceElement = document.evaluate(source, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        //     const targetElement = document.evaluate(target, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        //     // Simulate custom drag-and-drop events here, if necessary
        // }, sourceElementXPath, targetElementXPath);

        // await browser.pause(5000);

        await locator.saveVote.click();

        await utilities.Toaster();
        await browser.pause(5000);


    });
    it('Voting Live and Get vote From an event', async () => {
        // await locator.votings.click();
        // await browser.pause(3000);
        
        await locator.liveVoteOn.click();
        await browser.pause(3000);
        await locator.voteResultOn.click();

        await locator.clickEvent.click();
        (await locator.clickEventLivepage).click();
        await browser.pause(3000);

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        // await browser.closeWindow()
        await browser.switchToWindow(handles[1])
        await browser.pause(5000);

        (await locator.inputEventUser).click();
        (await locator.inputEventUser).setValue('labuchange@yopmail.com')
        await browser.pause(3000);

        (await locator.loginUser).click();
        await browser.pause(3000);

        // (await locator.giveVote).waitForClickable();
        // (await locator.giveVote).click();
        (await locator.checkBoxS2).click();
        (await locator.radioChk2).click();
        await browser.pause(5000);

        (await locator.submitVote).click();
        await browser.pause(6000);
        
    });

});