describe("UI Testing for login component", () => {
    beforeEach(()=>{
        cy.visit("/")
    })

    it("User login validation success", () => {
        cy.get('input[id=userId]').type('amrit');
        cy.get('input[id=usrPassword]').type('root123');
        cy.get('#loginBtn').click();
        cy.url().should('include','3000/dashboard');
    })

    it("User login validation failure", () => {
        cy.get('input[id=userId]').type('adm');
        cy.get('input[id=usrPassword]').type('pwd');
        cy.get('#loginBtn').click();
        cy.url().should('include','3000/');
    })
})