
class Utilities{

    public URL:string = "https://dev.mecasm.com/login"; 
    
    public async Signin(){

        const loginEmail = $('//*[@id="email"]');
        const loginPassword = $('//*[@id="password"]');
        const loginButton = $('//*[@id="kt_sign_in_submit"]');
        await loginEmail.click();
        await loginEmail.setValue('analytics@yopmail.com');
        await loginPassword.click();
        await loginPassword.setValue('123456789');

        await loginButton.click();
        await browser.pause(3000);

   }
    public async Toaster(){

        
        const toasterMessage = $('.toastr-success'); // Replace with the actual selector

        const successMsg = await toasterMessage.getText();
        await expect(toasterMessage).toBeDisplayed();
        console.log('Toaster Message::::', successMsg)
   }
   
   public async newToaster(){
    const toasterMessage = $('#kt_app_body > script:nth-child(37)'); // Replace with the actual selector

    const successMssg = await toasterMessage.getText();
    await expect(toasterMessage).toBeDisplayed();
    console.log('Toaster Message::::', successMssg)

   }
}
export default Utilities;