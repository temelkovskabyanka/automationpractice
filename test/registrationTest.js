import RegistrationPage from "../pom/RegistrationPage";

describe("Registration Page Test", () => {
   it("Should register new account", () => {
       //Create an account
       //Given: User creates a new account
       //When: User enters all details
       //Then: New account should be created

       RegistrationPage.open();
       RegistrationPage.emailCreateField.setValue(RegistrationPage.generateRandomEmail());
       RegistrationPage.createAnAccountButton.click();
       RegistrationPage.registerNewAccount();

       expect(RegistrationPage.signOutButton.isExisting()).to.equal(true);
   });
});