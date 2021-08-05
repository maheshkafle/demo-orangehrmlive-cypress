export class MyInfoPage {
    static clickMyInfoButton() {
        throw new Error("Method not implemented.")
    }
    
    // Page Locators
    my_info_id = '#menu_pim_viewMyDetails'
    personal_details_edit_button_id = '#btnSave'
    firstName_id = '#personal_txtEmpFirstName'
    lastName_id = '#personal_txtEmpLastName'
    nationality_select_id = '#personal_cmbNation'
    nationality = 'Nepalese'
    marital_status_select_id = '#personal_cmbMarital'
    marital_status = 'Married'
    smoker_checkbox_id = '#personal_chkSmokeFlag'
    nickname_id = '#personal_txtEmpNickName'
    save_btn_id = '#btnSave'

    // Page Actions
    clickMyInfoButton(){
        cy.get(this.my_info_id,{timeout: 15000}).click()
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
        cy.get(this.save_btn_id).click()
    }

    
}