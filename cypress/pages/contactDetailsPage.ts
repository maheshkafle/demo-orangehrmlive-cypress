import {BasePage} from "../pages/basepage";

const basepage = new BasePage();
export class ContactDetailsPage {

    // Locators
    contactdetailspage_link = 'a[href*="/index.php/pim/contactDetails/empNumber/7"]'
    contactdetailspage_save_or_edit_btn_id = '#btnSave'
    address_street_1_id = '#contact_street1'
    address_street_2_id = '#contact_street2'
    city_id = '#contact_city'
    province_id = '#contact_province'
    postal_code_id = '#contact_emp_zipcode'
    country_id = '#contact_country'
    contactdetailspage_msg_div_class= '.message'
    contactdetailspage_msg_div_msg = 'Successfully Saved'

    // Page Actions
    navigateToContactDetailsPage(){
        basepage.doClick(this.contactdetailspage_link);
    }

    editContactDetailsPageFields(street1: string, street2: string, city: string, province: string, postal_code: string, country: string) {

        basepage.doClick(this.contactdetailspage_save_or_edit_btn_id);
        // json.stringify method parses text to use as text input
        // clear() clears existing text from fields
        basepage.doTypeInUnparsableField(this.address_street_1_id, street1);
        basepage.doTypeInUnparsableField(this.address_street_2_id, street2);
        basepage.doTypeInUnparsableField(this.city_id, city);
        basepage.doTypeInUnparsableField(this.province_id, province);
        basepage.doTypeInUnparsableField(this.postal_code_id, postal_code);
        basepage.doSelect(this.country_id, country);
        basepage.doClick(this.contactdetailspage_save_or_edit_btn_id);
        basepage.doValidateSaveDeleteOperation(this.contactdetailspage_msg_div_class, this.contactdetailspage_msg_div_msg)
        
    }
     
}