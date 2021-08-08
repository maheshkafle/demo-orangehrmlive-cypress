import { data } from "cypress/types/jquery"
import {LoginPage} from "../pages/loginpage"
import {PersonalDetailsPage} from "../pages/personalDetailsPage"

const loginPage = new LoginPage();
const personalDetailsPage = new PersonalDetailsPage();

describe('test_OrangHRM_MyInfo_Module', () =>{

    context('test login OrangeHRM', function() {

        it('should login to Orange HRM', () => {

            // test login
            cy.fixture('test_data').then((data) => {
                loginPage.navigate(data.url);
                loginPage.enterUsername(data.username);
                loginPage.enterPassword(data.password);
            })

            loginPage.clickLogin();

            // test editable fields in PersonalDetails Page
            personalDetailsPage.clickMyInfoButton();
            personalDetailsPage.clickPersonalDetailsEditButton();
            personalDetailsPage.changeNationality();
            personalDetailsPage.changeMaritalStatus();
            personalDetailsPage.checkIfSmoker();
            cy.fixture('test_data').then((data) => {   
                personalDetailsPage.enterNickName(data.nickname)
            })  
            personalDetailsPage.clickSave();

            // test non-editable fields in PersonalDetails Page
            personalDetailsPage.validateEmployeeIdIsDisabled();
            personalDetailsPage.validateDriverLicenseNoIsDisabled();
            personalDetailsPage.validateSSNNoIsDisabled();
            personalDetailsPage.validateSINNoIsDisabled();
            personalDetailsPage.validateDOBIsDisabled();
    
        })
    })
   
 })