class RegistrationPage {

    open() {
        browser.url("/index.php?controller=authentication");
    }

    get emailCreateField() {
        return $("#email_create");
    }

    get createAnAccountButton() {
        return $("[name=\"SubmitCreate\"]");
    }

    get genderRadioButton() {
        return $("#id_gender2");
    }

    get firstName() {
        return $("#customer_firstname");
    }

    get lastName() {
        return $("#customer_lastname");
    }

    get email() {
        return $("#email");
    }

    get password() {
        return $("#passwd");
    }

    get dobDay() {
        return $("#days");
    }

    get dobMonths() {
        return $("#months");
    }

    get dobYears() {
        return $("#years");
    }

    get addressFirstName() {
        return $("#firstname");
    }

    get addressLastName() {
        return $("#lastname");
    }

    get address() {
        return $("#address1");
    }

    get city() {
        return $("#city");
    }

    get state() {
        return $("#id_state");
    }

    get zipPostcode() {
        return $("#postcode");
    }

    get country() {
        return $("#id_country");
    }

    get mobilePhone() {
        return $("#phone_mobile");
    }

    get aliasAddress() {
        return $("#alias");
    }

    get signOutButton() {
        return $("[class=\"logout\"]");
    }

    get registerButton() {
        return $("#submitAccount");
    }

    registerNewAccount() {
        this.genderRadioButton.click();
        this.firstName.setValue("Zoey");
        this.lastName.setValue("Cakovska");
        this.email.setValue(this.generateRandomEmail());
        this.password.setValue("zoeyglupata");
        this.dobDay.selectByIndex("20");
        this.dobMonths.selectByIndex("10");
        this.dobYears.selectByIndex("30");
        this.addressFirstName.setValue("Zoey");
        this.addressLastName.setValue("Cakovska");
        this.address.setValue("34 Cannon Street");
        this.city.setValue("London");
        this.state.selectByVisibleText("Maine");
        this.zipPostcode.setValue("00000");
        this.country.selectByVisibleText("United States");
        this.mobilePhone.setValue("64567789320");
        this.aliasAddress.setValue("34 Cannon Street");
        this.registerButton.click();
    }

    generateRandomEmail() {
        return Math.round(Math.random() * 100) + "zoey@gmail.com";
    }

}

export default new RegistrationPage();