export class LoginPage {
    
    // Page Locators
    loginpage_username_id = '#txtUsername'
    loginpage_password_id = '#txtPassword'
    loginbtn = '#btnLogin'

    // Page Actions
    navigate(url: string) {
        cy.visit(url)
    }

    enterUsername(username: string){
        cy.get(this.loginpage_username_id).type(username)
    }

    enterPassword(password: string){
        cy.get(this.loginpage_password_id).type(password)
    }

    clickLogin(){
        cy.get(this.loginbtn).click()
    }
}