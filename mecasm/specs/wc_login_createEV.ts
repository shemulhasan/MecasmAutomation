import Locators from '../pageobjects/Locators/Locators.js'
import Utilities from '../pageobjects/loginCredentials.js';

describe('Log in Webcast by Authentic User', () => {
    const locator =new Locators();
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
    it('Event Create in Dev', async () => {
        // const clickEvent = $('//*[@id="#kt_app_sidebar_menu"]/div[11]/a[1]/span[2]');
        await locator.clickEvent.click();
        await browser.pause(3000);

        const createEvent =$('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[1]/a');
        await createEvent.click();
        
        await locator.inputEventName.click();
        await locator.inputEventName.setValue('Prolific Express New Event on 12-12-2023');

        await locator.eventSave.click();
        await utilities.Toaster();  
        await browser.pause(5000);
        // await utilities.Toaster();       
    });

    it('Event Setting for General Tab', async() => {

        const clickGeneral =$('//*[@id="kt_app_content"]/div[1]/ul/li[1]/a/span[1]');
        const editSubTitle=$('//*[@id="subtitle_en"]');
        await clickGeneral.click();
        await browser.pause(3000);
        await locator.eventTitleEdt.click();
        await browser.keys(['Control','a']);
        await browser.pause(2000);

        await locator.titleFontsize.click();
        await locator.selectTFontSize.click();
        await browser.pause(2000);
        
        await locator.tFontFamily.click();
        await locator.tFontFamilyclick.click();
        await browser.pause(2000);
        
        await locator.tFontBold.click();
        await browser.pause(2000);


        await editSubTitle.click();
        await editSubTitle.setValue('Prolific Express is a New and Always Importent Event and Hope all are join to this Events');


        const updateClick =$('//*[@id="general"]/form/div[4]/button');
        await updateClick.click();
        
        await utilities.Toaster();
        await browser.pause(10000);

    });
});
