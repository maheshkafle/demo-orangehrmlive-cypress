import { data } from "cypress/types/jquery"
import {ContactDetailsPage} from "../pages/contactDetailsPage";
import {LoginPage} from "../pages/LoginPage";
import {PersonalDetailsPage} from "../pages/personalDetailsPage";
import {EmergencyContactsPage} from "../pages/emergencyContactPage";

const loginPage = new LoginPage();
const personalDetailsPage = new PersonalDetailsPage();
const contactDetailsPage = new ContactDetailsPage();
const emergencyContactPage = new EmergencyContactsPage();

describe('test_OrangHRM_MyInfo_Module', () => {

    it('should test each submodule of OrangHRM MyInfo Module', () => {

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
            // personalDetailsPage.uploadAttachment(data.pathOneMB);
            // personalDetailsPage.uploadAttachment(data.pathLargerOneMB);
        })

        // test delete attachments in emergencyContacts page
        personalDetailsPage.deletePersonalDetailsPageAttachment();
        
        // Navigate to contactDetails page
        contactDetailsPage.navigateToContactDetailsPage();

        // // edit fields in contactDetails page
        cy.fixture('test_data').then((data) => {   
            contactDetailsPage.editContactDetailsPageFields(data.street1, data.street2, data.city, data.province, data.postal_code, data.country);
        })

        // Navigate to emergencyContacts page
        emergencyContactPage.navigateToEmergencyContactsPage();

        // add fields in emergencyContacts page
        cy.fixture('test_data').then((data) => {   
            const multiple_times = 2
            for (let i = 0; i < multiple_times; i++) {
                emergencyContactPage.addEmergencyContact(data.emg_contact_name, data.emg_contact_relationship, data.emg_contact_home_phone, data.emg_contact_mobile_phone, data.emg_contact_work_phone);
                }
        })

        // delete fields in emergencyContacts page
        emergencyContactPage.deleteEmergencyContact();
        
    })
})   