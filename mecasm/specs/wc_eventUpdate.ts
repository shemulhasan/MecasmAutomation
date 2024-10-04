import Locators from "../pageobjects/Locators/Locators.js";
import Utilities from "../pageobjects/loginCredentials.js";
import { Key } from 'webdriverio'

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
    it('Event Settings Page Update by all input check', async () => {
        await locator.clickEvent.click();
        await browser.pause(5000);
        await locator.clickEventEdit.click();
        await locator.editSubTitle.click();
        await locator.editSubTitle.clearValue();
        await locator.editSubTitle.setValue('The TICO Industry Director Election is open from Tuesday, October 10, 2023 at 10am until Wednesday, October 11, 2023 at 5pm.');

        await locator.updateClick.click();
        await utilities.Toaster();
        await browser.pause(5000);

        await locator.clickSettings.click();

        await locator.selectDate1.click();
        browser.pause(3000);
        await locator.startDate.click();


        await locator.selectDate2.click();
        await browser.pause(3000);
        await locator.endDate.click();

        await locator.clickEvStatus.click();
        await browser.pause(5000)
        await browser.keys(['Live', 'Enter']);

        await locator.selectLan.click();
        await browser.pause(3000);
        await browser.keys(['English', 'Enter']);
        await browser.keys(['French', 'Enter']);

        await locator.chngMemberNo.clearValue();
        await browser.pause(2000);
        await locator.chngMemberNo.setValue("Participant Number");

        await locator.enableVote.click();
        await browser.pause(5000);
        await locator.enableVote.click();


        await browser.pause(5000)
        // const clickUpdate = $('//*[@id="setting"]/form/div[2]/button');

        locator.clickUpdate.waitForClickable({ timeout: 10000 });
        // await clickUpdate.scrollIntoView();
        await locator.clickUpdate.click();

        // const toasterMessage = $('.toastr-success'); // Replace with the actual selector

        // const successMsg = await toasterMessage.getText();
        // await expect(toasterMessage).toBeDisplayed();
        // console.log('Toaster Message::::', successMsg)

        await utilities.Toaster();
        await browser.pause(5000);

    });
    it('Event Layout Page Update by all input check', async () => {

        await locator.clickLayout.click();

        await locator.selectColor.click();
        await locator.selectColor.clearValue();
        await browser.pause(3000);
        await locator.selectColor.click();
        await locator.selectColor.setValue('#d7e1f5')
        await browser.pause(3000);

        // locator.headerImage.waitForClickable({ timeout: 10000 });
        const imagePath = 'D:\\All Project\\WEBCAST\\slider.jpg';
        await locator.headerImage.addValue(imagePath)
        // await locator.headerImage.setValue('D:\\All Project\\WEBCAST\\slider.jpg')
        await browser.pause(3000);

        // await locator.bannerImage.waitForClickable({ timeout: 10000 });   
        const imagePaths = 'D:\\All Project\\WEBCAST\\banner.png';
        await locator.bannerImage.addValue(imagePaths)
        await browser.pause(3000);

        await locator.layoutType.click();
        // await loactor.layoutType.clearValue();
        await browser.pause(3000);
        // await loactor.selectColor.click();
        await browser.keys(['With Right Sidebar', 'Enter']);

        await locator.description.click();
        await locator.description.setValue(
            'Welcome to the world of career opportunities with Robi Axiata Limited.Robi is on a constant lookout for dynamic talents across industries. We are glad that you chose Robi as one of your preferred organizations to build a career with.'
        );


        // locator.updateLayout.waitForClickable({ timeout: 10000 });
        await locator.updateLayout.click();
        await utilities.Toaster();
        await browser.pause(5000);

    });

    it('Event Login Form builder', async () => {

        await locator.loginFormBuilder.click();
        await locator.clickHeader.click();
        // await locator.clickHeader.setValue('LOGIN')
        // await browser.keys([Key.Ctrl, 'A'])
        await browser.keys(['Control', 'a']);
        await browser.pause(5000);

        await locator.clickFontSize.click();
        await browser.pause(3000);
        await locator.clickSizeValue.click();
        await browser.pause(5000);

        await locator.fontBold.click();
        await browser.pause(3000);
        await locator.fontColorAro.click();
        await browser.pause(3000);
        await locator.fontColor.click();
        await browser.pause(3000);

        await locator.updateLogin.waitForClickable({ timeout: 10000 });
        await locator.updateLogin.click();
        await utilities.Toaster();
        await browser.pause(3000);
        // await browser.switchToFrame(0)
        // await locator.catchdNumb.click();
        // locator.catchdNumb.dragAndDrop(locator.dropNumb);
        // const src = $('//*[@id="frmb-1697607100470-control-box"]/li[2]/span');
        // const trgt =$('//*[@id="frmb-1697607100470"]')
    //    await src.dragAndDrop(await trgt);

        // await browser.pause(3000);
        // await locator.custFldNumbEdit.click();
        // await locator.numberTitle.click();
        // await locator.numberTitle.clearValue();
        // await locator.numberTitle.setValue('Phone Number');
        // await browser.pause(3000)

        // await locator.updateLogin.waitForClickable({ timeout: 10000 });
        // await locator.updateLogin.click();
        // await utilities.Toaster();

    });
    it('Event registration Form builder', async () => {

        await locator.regFormBuilder.click();
        await browser.pause(5000)
        await  locator.clickFormHeader.waitForClickable({timeout:10000});
        await locator.clickFormHeader.click();
        // await locator.clickHeader.setValue('LOGIN')
        // await browser.keys([Key.Ctrl, 'A'])
        await browser.keys(['Control', 'a']);
        await browser.pause(5000);

        await locator.fontSizeH.click();
        await browser.pause(2000);
        await locator.fontSizes.click();
        await browser.pause(3000);

        await locator.boldFontH.click();
        await browser.pause(3000);

        (await locator.regFooter).click();
        await browser.pause(3000);
        (await locator.regFooter).setValue('This is footer portion of a Events Header, and This footer can desing as per Client Needs ');
        await browser.pause(3000);

        await browser.keys(['Control','a']);
        (await locator.FooterFontS).click();
        await browser.pause(2000);
        (await locator.clickFFSize).click();
        await browser.pause(2000);
        (await locator.fontItalic).click();
        await browser.pause(3000);

        (await locator.updateRegForm).click();

        await utilities.Toaster();
        await browser.pause(3000);

    });

});
