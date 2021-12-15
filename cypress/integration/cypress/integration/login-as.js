/// <reference types="Cypress" />

describe ("Test log in to toolsense", () => {
    it("Shuld be able to log in the web app", () => {
        //cypress code
        cy.visit ('https://my.toolsense.dev/')
        cy.get ('input[type="text"]').type('aref@io.io')
        cy.get ('input[type="password"]').type('a112233')
        cy.get ('.button__text').contains('Log In').click()
        
    })
})