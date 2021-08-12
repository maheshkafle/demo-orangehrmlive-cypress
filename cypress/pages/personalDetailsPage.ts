import {BasePage} from "../pages/basepage";

const basepage = new BasePage();
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
    filename = "evening.jpg"
    personaldetailspage_check_all_checkbox_id = '#attachmentsCheckAll'
    personaldetailspage_delete_btn_id = '#btnDeleteAttachment'
    personaldetailspage_msg_div_delete_msg = 'Successfully Deleted'

    // Page Actions  
    clickMyInfoButton(){
        basepage.doClick(this.my_info_id);
    }

    clickPersonalDetailsEditButton(){
        basepage.doClick(this.personal_details_edit_button_id);
    }

    changeNationality(){

        basepage.doSelect("select"+this.nationality_select_id, this.nationality);
    }

    changeMaritalStatus(){
        basepage.doSelect("select"+this.marital_status_select_id, this.marital_status);
    }

    checkIfSmoker(){
        basepage.doTickCheckbox(this.smoker_checkbox_id)
    }

    enterNickName(nickName: string){
        basepage.doType(this.nickname_id, nickName)
    }

    clickSave(){
        basepage.doClick(this.personal_details_edit_button_id)
    }

    validateEmployeeIdIsDisabled(){
        basepage.doCheckDisableField(this.personaldetailspage_employee_id);
    }  

    validateDriverLicenseNoIsDisabled(){
        basepage.doCheckDisableField(this.personaldetailspage_driver_license_no_id);
    }  

    validateSSNNoIsDisabled(){
        basepage.doCheckDisableField(this.personaldetailspage_SSN_no_id);
    }  

    validateSINNoIsDisabled(){
        basepage.doCheckDisableField(this.personaldetailspage_SIN_no_id);
    }  
    
    validateDOBIsDisabled(){
        basepage.doCheckDisableField(this.personaldetailspage_dob_name);
    }

    uploadAttachment(path: string){
        basepage.doClick(this.personaldetailspage_attachment_btn_id);
        basepage.doAttachFile(this.personaldetailspage_input_file_id, path);
        basepage.doClick(this.personaldetailspage_btn_save_attachment_id);
        basepage.doValidateSaveDeleteOperation(this.personaldetailspage_msg_div_class, this.personaldetailspage_msg_div_msg)
        basepage.doValidateSaveDeleteOperation(this.attachment_container_id, this.filename)
    }

    deletePersonalDetailsPageAttachment(){
        basepage.doClick(this.personaldetailspage_check_all_checkbox_id);
        basepage.doClick(this.personaldetailspage_delete_btn_id);
        basepage.doValidateSaveDeleteOperation(this.personaldetailspage_msg_div_class, this.personaldetailspage_msg_div_delete_msg);
    }
}
