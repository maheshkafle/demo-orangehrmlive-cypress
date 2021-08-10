export class PersonalDetailsPage {

    // Page Locators
    my_info_id = '#menu_pim_viewMyDetails > b'
    personal_details_edit_button_id = "#btnSave"
    firstName_id = '#personal_txtEmpFirstName'
    lastName_id = '#personal_txtEmpLastName'
    nationality_select_id = '#personal_cmbNation'
    nationality = 'Nepalese'
    marital_status_select_id = '#personal_cmbMarital'
    marital_status = 'Married'
    smoker_checkbox_id = '#personal_chkSmokeFlag'
    nickname_id = '#personal_txtEmpNickName'
    personaldetailspage_employee_id = '#personal_txtEmployeeId'
    personaldetailspage_driver_license_no_id = '#personal_txtLicenNo'
    personaldetailspage_SSN_no_id = '#personal_txtNICNo'
    personaldetailspage_SIN_no_id = '#personal_txtSINNo'
    personaldetailspage_dob_name = '#personal_DOB'
    personaldetailspage_attachment_btn_id = '#btnAddAttachment'
    personaldetailspage_input_file_id = '#ufile'
    personaldetailspage_btn_save_attachment_id = '#btnSaveAttachment'
    personaldetailspage_msg_div_class= '.message'
    personaldetailspage_msg_div_msg = 'Successfully Saved'
    attachment_container_id = '#frmEmpDelAttachments'

    // Page Actions  
    clickMyInfoButton(){
        cy.get(this.my_info_id).click()
    }

    clickPersonalDetailsEditButton(){
        cy.get(this.personal_details_edit_button_id).click()
    }

    changeNationality(){
        cy.get("select"+this.nationality_select_id).select(this.nationality)
    }

    changeMaritalStatus(){
        cy.get("select"+this.marital_status_select_id).select(this.marital_status)
    }

    checkIfSmoker(){
        cy.get(this.smoker_checkbox_id).check()
    }

    enterNickName(nickName: string){
        cy.get(this.nickname_id).clear().type(nickName)
    }

    clickSave(){
        cy.get(this.personal_details_edit_button_id).click()
    }

    validateEmployeeIdIsDisabled(){
        cy.get(this.personaldetailspage_employee_id).should('be.disabled')
    }  

    validateDriverLicenseNoIsDisabled(){
        cy.get(this.personaldetailspage_driver_license_no_id).should('be.disabled')
    }  

    validateSSNNoIsDisabled(){
        cy.get(this.personaldetailspage_SSN_no_id).should('be.disabled')
    }  

    validateSINNoIsDisabled(){
        cy.get(this.personaldetailspage_SIN_no_id).should('be.disabled')
    }  
    
    validateDOBIsDisabled(){
        cy.get(this.personaldetailspage_dob_name).should('be.disabled')
    }

    uploadAttachment(path: string){
        cy.get(this.personaldetailspage_attachment_btn_id).click();
        cy.get(this.personaldetailspage_input_file_id).attachFile(path);
        cy.get(this.personaldetailspage_btn_save_attachment_id).click()
        cy.get(this.personaldetailspage_msg_div_class).contains(this.personaldetailspage_msg_div_msg)
        cy.get(this.attachment_container_id).contains("evening.jpg")
    }
}
