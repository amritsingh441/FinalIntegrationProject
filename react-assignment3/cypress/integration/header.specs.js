describe("UI Testing for header component", () => {
    beforeEach(()=>{
        cy.visit("/");
        cy.get('input[id=userId]').type('amrit');
        cy.get('input[id=usrPassword]').type('root123');
        cy.get('#loginBtn').click();
        cy.url().should('include','3000/dashboard');
    })

    it("Header Dashboard button validation success", () => {
        cy.get('#dashBoardBtn').click();
        cy.url().should('include','3000/dashboard');
    })

    it("Header News button validation success", () => {
        cy.get('#displayAllNewsBtn').click();
        cy.url().should('include','3000/news');
    })
    it("Header NewsSource button validation success", () => {
        cy.get('#displayAllNewsSrcBtn').click();
        cy.url().should('include','3000/newssource');
    })
    it("Header UserProfile Link validation success", () => {
        cy.get('#usrprofileLink').click();
        cy.url().should('include','3000/userprofile');
    })
    it("Header Logout button validation success", () => {
        cy.get('#logoutBtn').click();
        cy.url().should('include','3000/');
    })
})