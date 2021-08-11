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
    // country='Nepal' 

    // Page Actions
    navigateToContactDetailsPage(){
        cy.get(this.contactdetailspage_link).click();
        
    }

    editContactDetailsPageFields(street1: string, street2: string, city: string, province: string, postal_code: string, country: string) {

        cy.get(this.contactdetailspage_save_or_edit_btn_id).click();
        // json.stringify method parses text to use as text input
        // clear() clears existing text from fields
        cy.get(this.address_street_1_id).clear().type(JSON.stringify(street1));
        cy.get(this.address_street_2_id).clear().type(JSON.stringify(street2));
        cy.get(this.city_id).clear().type(JSON.stringify(city));
        cy.get(this.province_id).clear().type(JSON.stringify(province));
        cy.get(this.postal_code_id).clear().type(JSON.stringify(postal_code));
        cy.get(this.country_id).select(country);
        cy.get(this.contactdetailspage_save_or_edit_btn_id).click();
        cy.get(this.contactdetailspage_msg_div_class).contains(this.contactdetailspage_msg_div_msg);
        
    }
     
}