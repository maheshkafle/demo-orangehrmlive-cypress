import { data } from "cypress/types/jquery"
import {LoginPage} from "../pages/loginpage"
import {MyInfoPage} from "../pages/MyInfoPage"

const loginPage = new LoginPage()
const myinfoPage = new MyInfoPage()

it('test_opensource_demo_orange_hrm', () => {

    cy.fixture('test_data').then((data) => {
        loginPage.navigate(data.url);
        loginPage.enterUsername(data.username);
        loginPage.enterPassword(data.password);
        loginPage.clickLogin();
    })

    cy.fixture('test_data').then((data) => {
        myinfoPage.clickMyInfoButton();
        myinfoPage.clickPersonalDetailsEditButton();
        myinfoPage.changeNationality();
        myinfoPage.changeMaritalStatus();
        myinfoPage.checkIfSmoker();
        myinfoPage.enterNickName(data.nickname)
        myinfoPage.clickSave();
    })  

})
