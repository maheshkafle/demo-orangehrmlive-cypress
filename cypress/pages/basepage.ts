export class BasePage {

    doType(locator: string, data: string){
        cy.get(locator).type(data);
    }

    doClick(locator: string){
        cy.get(locator).click();
    }

    doValidateSaveDeleteOperation(locator: string, save_delete_operation_msg: string){
        cy.get(locator).contains(save_delete_operation_msg)
    }
}