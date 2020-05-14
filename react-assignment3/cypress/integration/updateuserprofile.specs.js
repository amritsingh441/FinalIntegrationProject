describe("UI Testing for User Profile component", () => {
    beforeEach(()=>{
        cy.visit("/");
        cy.get('input[id=userId]').type('amrit');
        cy.get('input[id=usrPassword]').type('root123');
        cy.get('#loginBtn').click();
        cy.url().should('include','3000/dashboard');
        
    })

    it("User Profile Update button click validation success", () => {
        cy.get('#usrprofileLink').click();
        cy.url().should('include','3000/userprofile');
    })

   
})