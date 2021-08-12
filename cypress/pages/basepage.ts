export class BasePage {

    doSelect(locator: string, data: string){
        cy.get(locator).select(data)
    }

    doTickCheckbox(locator: string){
        cy.get(locator).check();
    }

    doType(locator: string, data: string){
        cy.get(locator).clear().type(data);
    }

    doTypeInUnparsableField(locator: string, data: string){
        cy.get(locator).clear().type(JSON.stringify(data))
    }

    doClick(locator: string){
        cy.get(locator).click();
    }

    doValidateSaveDeleteOperation(locator: string, save_delete_operation_msg: string){
        cy.get(locator).contains(save_delete_operation_msg)
    }

    doCheckDisableField(locator: string){
        cy.get(locator).should('be.disabled');
    }

    doAttachFile(locator: string, path: string){
        cy.get(locator).attachFile(path);
    }
}