import { BasePage} from "./BasePage.js";

export class LoginPage extends BasePage
{
    constructor(page)
    {
        super(page);
        this.page = page;
        this.usernameField = page.getByPlaceholder("Enter Email");
        this.passwordField = page.getByPlaceholder("Enter Password");
        this.loginButton = page.getByText("Sign in", {exact: true});
        this.newUrlSignupLink = page.getByText("New user? Signup", {exact: true});
        this.errorMessage = page.locator(".errorMessage");
    }

    async loginToApplication(username, password)
    {
        // await this.usernameField.fill(username);
        await this.type(this.usernameField, username);
       
        // await this.passwordField.fill(password);
        await this.type(this.passwordField,password);

        // await this.loginButton.click();
        await this.click(this.loginButton);
        
    }

    async clickOnNewUserSignUplink()
    {
        // await this.newUrlSignupLink.click();
        await this.click(this.newUrlSignupLink);
    }

    async getErrorMessage()
    {
        // return this.errorMessage.textContent();
        return await this.getText(this.errorMessage);
    }
}