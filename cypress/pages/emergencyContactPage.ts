export class EmergencyContactsPage {

    // Page locators
    emergencycontactspage_link = 'a[href*="/index.php/pim/viewEmergencyContacts/empNumber/7"]'
    add_contact_btn_id = '#btnAddContact'
    emg_contacts_name_id = '#emgcontacts_name'
    emg_contacts_relationships_id = '#emgcontacts_relationship'
    emg_contacts_home_phone_id = '#emgcontacts_homePhone'
    emg_contacts_mobile_phone_id = '#emgcontacts_mobilePhone'
    emg_contacts_work_phone_id = '#emgcontacts_workPhone'
    save_emg_contact_btn_id = '#btnSaveEContact'
    emergencycontactspage_msg_div_class = '.message'
    emergencycontactspage_msg_div_save_msg = 'Successfully Saved'
    emergencycontactspage_check_all_checkbox_id = '#checkAll'
    emergencycontactspage_delete_btn_id = '#delContactsBtn'
    emergencycontactspage_msg_div_delete_msg = 'Successfully Deleted'

    // Page Actions
    navigateToEmergencyContactsPage(){
        cy.get(this.emergencycontactspage_link).click(); 
    }

    addEmergencyContact(emg_contact_name: string, emg_contact_relationship: string, emg_contact_home_phone: string, emg_contact_mobile_phone: string, emg_contact_work_phone: string){  
        
        cy.get(this.add_contact_btn_id).click();

        cy.get(this.emg_contacts_name_id).type(emg_contact_name);
        cy.get(this.emg_contacts_relationships_id).type(emg_contact_relationship);
        cy.get(this.emg_contacts_home_phone_id).type(emg_contact_home_phone);
        cy.get(this.emg_contacts_mobile_phone_id).type(emg_contact_mobile_phone);
        cy.get(this.emg_contacts_work_phone_id).type(emg_contact_work_phone);
        cy.get(this.save_emg_contact_btn_id).click();
        cy.get(this.emergencycontactspage_msg_div_class).contains(this.emergencycontactspage_msg_div_save_msg);
    }

    deleteEmergencyContact(){
        cy.get(this.emergencycontactspage_check_all_checkbox_id).click();
        cy.get(this.emergencycontactspage_delete_btn_id).click();
        cy.get(this.emergencycontactspage_msg_div_class).contains(this.emergencycontactspage_msg_div_delete_msg);
    }
}