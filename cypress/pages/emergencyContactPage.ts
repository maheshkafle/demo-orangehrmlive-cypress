import {BasePage} from "../pages/basepage";

const basepage = new BasePage();
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

        basepage.doClick(this.emergencycontactspage_link);

    }

    addEmergencyContact(emg_contact_name: string, emg_contact_relationship: string, emg_contact_home_phone: string, emg_contact_mobile_phone: string, emg_contact_work_phone: string){  
        
        basepage.doClick(this.add_contact_btn_id);
        basepage.doType(this.emg_contacts_name_id, emg_contact_name);
        basepage.doType(this.emg_contacts_relationships_id, emg_contact_relationship);
        basepage.doType(this.emg_contacts_home_phone_id, emg_contact_home_phone);
        basepage.doType(this.emg_contacts_mobile_phone_id, emg_contact_mobile_phone);
        basepage.doType(this.emg_contacts_work_phone_id, emg_contact_work_phone);
        basepage.doClick(this.save_emg_contact_btn_id);
        basepage.doValidateSaveDeleteOperation(this.emergencycontactspage_msg_div_class, this.emergencycontactspage_msg_div_save_msg)
    }

    deleteEmergencyContact(){

        basepage.doClick(this.emergencycontactspage_check_all_checkbox_id);
        basepage.doClick(this.emergencycontactspage_delete_btn_id);
        basepage.doValidateSaveDeleteOperation(this.emergencycontactspage_msg_div_class, this.emergencycontactspage_msg_div_delete_msg);

    }
}