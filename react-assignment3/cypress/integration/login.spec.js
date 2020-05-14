describe("UI Testing for login component", () => {
    beforeEach(()=>{
        cy.visit("/")
    })

    it("User name validation success", () => {
        cy.get('input[id=userId]').type('amrit');
        cy.get('input[id=usrPassword]').type('root123');
        cy.get('#loginBtn').click();
    })

    it("User name validation failure", () => {
        cy.get('input[id=userId]').type('adm');
        cy.get('input[id=usrPassword]').type('pwd');
        cy.get('#loginBtn').click();
    })
})