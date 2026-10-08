import {test,expect} from "../fixture/fixture.js"
import user from "../testdata/user.json"

test.describe("Login Test", { tags: ['smoke', 'login'] }, () => {

    test('Login to Application', async ({ page,loginPage,dashboardPage }) => {
        await page.goto("/login");

        // const loginPage = new LoginPage(page); // already created within fixture

        await loginPage.loginToApplication(user.username, user.password);

        console.log(`Test Data Used In This Test ${user.username} and ${user.password}`);

        // const dashboardPage = new DashboardPage(page); // already created within fixture

        await dashboardPage.clickOnMenuIcon();

        await dashboardPage.clickOnSignOutButton();

        expect(page.url()).not.toContain('/login')
    })

})