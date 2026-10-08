import { BasePage } from "./BasePage.js";

export class DashboardPage extends BasePage
{
    constructor(page)
    {
        super(page);
        this.page = page;
        this.menuIcon = page.getByAltText("menu");
        this.signOutButton = page.getByText("Sign out", {exact:true});
    }

    async clickOnMenuIcon()
    {
        // await this.menuIcon.click();
        await this.click(this.menuIcon);
    }

    async clickOnSignOutButton()
    {
        // await this.signOutButton.click();
        await this.click(this.signOutButton);
    }


}