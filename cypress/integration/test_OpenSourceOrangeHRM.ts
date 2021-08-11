import { data } from "cypress/types/jquery"
import { ContactDetailsPage } from "../pages/contactDetailsPage";
import {LoginPage} from "../pages/loginpage"
import {PersonalDetailsPage} from "../pages/personalDetailsPage"

const loginPage = new LoginPage();
const personalDetailsPage = new PersonalDetailsPage();
const contactDetailsPage = new ContactDetailsPage();

describe('test_OrangHRM_MyInfo_Module', () => {

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

            // test upload attachment to personalDetails page
            cy.fixture('test_data').then((data) => {
                personalDetailsPage.uploadAttachment(data.pathLessOneMB);
                personalDetailsPage.uploadAttachment(data.pathOneMB);
                personalDetailsPage.uploadAttachment(data.pathLargerOneMB);
            })

            // Navigate to contactDetails page
            contactDetailsPage.navigateToContactDetailsPage();

            // edit fields in contactDetails page
            cy.fixture('test_data').then((data) => {   
                contactDetailsPage.editContactDetailsPageFields(data.street1, data.street2, data.city, data.province, data.postal_code, data.country);
            })
                
        })

 })