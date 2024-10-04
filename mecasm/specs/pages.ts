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

    it('Page Create from Client Admin', async () => {

        (await locator.pages).click();
        await browser.pause(4000);

        (await locator.createPages).click();
        await browser.pause(3000);

        (await locator.inputPTitle).click();
        (await locator.inputPTitle).setValue('This is demo page');

        (await locator.inputPName).setValue('newpages');
        await browser.pause(4000);

        // (await locator.pageStatus).click();
        // (await locator.selectPublish).waitForClickable({timeout: 10000});
        // (await locator.selectPublish).click();

        // await browser.pause(4000);

        // (await locator.uploadImage).click();
        // await browser.pause(3000);

        // const imagePath = 'D:\\All Project\\WEBCAST\\slider.jpg';
        // const remoteFilePath = await browser.uploadFile(imagePath);
        // await browser.execute(() => {

        //     document.getElementById("note-dialog-image-file-16987311753761").style.display = "block";
        // })
        // (await locator.selectImage).waitForDisplayed();
        // (await locator.selectImage).click();
        // await locator.selectImage.addValue(remoteFilePath);
        await browser.pause(3000);
        // // const insImageDialog = $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[7]/div/div[1]');
        // const frame = await browser.$('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[7]/div');


        // await browser.switchToFrame(frame);

        // await $('button = Try it').click();

        // // await insImageDialog.getText();
        // // console.log('This is Image Dialog', insImageDialog);

        // const inputImageUrl = $('//input[@id="note-dialog-image-url-16987343331961"]');
        // // await inputImageUrl.click();
        // await inputImageUrl.setValue('https://dev.mecasm.com/uploads/images/31-10-2023/6540a0c5561d0.jpeg');
        // const insertImage = $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[7]/div/div[3]/input');
        // await insertImage.click();
        // await browser.pause(4000);

        await locator.editorPage.setValue('This Is New Testing Page');
        await browser.keys(['Control', 'a']);

        await locator.textSize.click();
        await locator.textSizeClick.click();
        await browser.pause(3000)
        await locator.textBold.click();
        await browser.pause(3000);
        (await locator.clickColor).click();
        await locator.textBg.click();
        await locator.textColor.click();
        await browser.pause(4000);
        await locator.editorPage.click();
        await browser.keys(['', 'End']);
        await browser.keys(['', 'Enter']);
        await locator.textSize.click();
        await locator.textSizes.click();
        await browser.pause(3000);
        
        await locator.editorPage.addValue('This is New page design for webpage view and its subcontent');

        await browser.pause(6000);
        (await locator.savePage).click();

        await utilities.Toaster();
        await browser.pause(6000);
    });

    it('Page General Settings', async() => {
        
        (await locator.globalSettings).click();
        await browser.pause(3000);

        (await locator.setTitle).click();
        (await locator.setTitle).clearValue();
        (await locator.setTitle).setValue('This is New Demo Page for Testing');
        await browser.pause(3000);

        const imagePath = 'D:\\All Project\\WEBCAST\\logo\\Tes.png';
        await locator.uploadLogo.addValue(imagePath);
        await browser.pause(3000);

        await locator.primaryColor.click();
        // await locator.primaryColor.clearValue();
        // await locator.primaryColor.click();
        // await browser.pause(3000);
        await browser.keys(['#cfe2f3','Enter'])
        await browser.pause(3000);

        // await locator.textColors.click();
        // await locator.textColors.clearValue();
        await locator.textColors.click();
        await browser.keys(['#990000','Enter'])
        await browser.pause(3000);

        // await locator.secondaryColor.click();
        // await locator.secondaryColor.clearValue();
        await locator.secondaryColor.click();
        await browser.keys(['#cfe1f2','Enter'])
        await browser.pause(3000);

        await locator.updateGSetting.click();
        await utilities.Toaster();
        await browser.pause(5000);


    });
    it('Page Menu Assign', async() => {
        
        (await locator.menuClick).click();
        await browser.pause(3000);

        await locator.clickPage.click();
        await browser.pause(3000);
        await locator.clickPageList.click();
        await browser.keys(['test','Enter'])
        await browser.pause(3000);
        await locator.addPagetoMenu.click();
        await utilities.Toaster();
        await browser.pause(5000);

        await locator.clickStrm.click();
        await browser.pause(3000);
        await locator.clickStrmList.click();
        await browser.keys(['Annual General','Enter'])
        await browser.pause(3000);
        await locator.addStrmTomenu.click();
        await utilities.Toaster();
        await browser.pause(5000);


    });
    it('Click Dashboard Check', async() => {
        const clickDashboard =$('//*[@id="#kt_app_sidebar_menu"]/div[1]/a/span[2]');
        (await clickDashboard).click();

        await browser.pause(5000);
    });


});