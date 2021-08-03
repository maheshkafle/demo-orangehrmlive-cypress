import { data } from "cypress/types/jquery"
import {LoginPage} from "../pages/loginpage"

const loginPage = new LoginPage()

it('test_login', () => {
    cy.fixture('test_data').then((data) => {
        loginPage.navigate(data.url);
        loginPage.enterUsername(data.username);
        loginPage.enterPassword(data.password);
        loginPage.clickLogin();
    })
})