describe('Test Site', () => {
    it('This is test site run for Shipsimple', async() => {
        
        browser.url('https://uat.shipsimple.app')
        browser.pause(5000)
        await browser.maximizeWindow();

        const userName = $('//*[@id="email"]');
        const password =$ ('//*[@id="password"]');

        await userName.setValue('hasans1@yopmail.com');
        await password.setValue('Admin@123')
        const checkbox=$('//*[@id="remember"]');

        await checkbox.click();

        const logInbuton =$('//*[@id="__next"]/div/div[2]/div[3]/form/div[4]/button')
        await logInbuton.click();

        browser.pause(10000);
    });
    it('Profile Update', async() => {
        
        const inputFirsName = $('//*[@id="fname"]');
        const lastName = $('//*[@id="lname"]');
        const selectAddress =$('//*[@id="street1"]');

        await inputFirsName.setValue('Mark');
        await lastName.setValue('Parcel');
        (await selectAddress).setValue('Streat ');
        await browser.pause(5000);
        console.log(await selectAddress.getValue());

        const selectFirstValue =$('//*[@id="__next"]/div/div[2]/div[3]/div/div/form/div[2]/div/ul/li[1]');
        (await selectFirstValue).click();
        await browser.pause(10000);

        const inputUnit =$('//*[@id="unit_suite"]');
        const inputPhone =$('//*[@id="__next"]/div/div[2]/div[3]/div/div/form/div[6]/div/div/div/input')

        await inputUnit.setValue('4thFloor')
        await inputPhone.setValue('1234567890');

        const clickNext =$('//*[@id="__next"]/div/div[2]/div[3]/div/div/form/div[8]/button/span/span');
        (await clickNext).click();

        await browser.pause(10000);
    });
});