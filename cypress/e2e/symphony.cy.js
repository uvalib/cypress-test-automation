//
// standard set of catalog URL's to verify the Libra search form  works correctly
//

// test constants
const defaultusername = 'CYPRESS';
const defaultusernamekey = '728406'
const defaultpassword = '********';
const defaultusernametolookupuserkey = 'RH9EC';
const defaultuserkey = '565757';
const symphonywebtesturl = 'https://workflowstest.lib.virginia.edu/';
const symphonywebproductionurl = 'https://workflows.lib.virginia.edu/';

describe('Test whether Symphony Web is up and running', () => {
    it('Logs into Symphony Web to ensure it is up', () => {
        const username = (Cypress.env('username') != null) ? Cypress.env('username') : defaultusername;
        const password = (Cypress.env('password') != null) ? Cypress.env('password') : defaultpassword;
        const usernametolookup = (Cypress.env('usernametolookup') != null) ?
            Cypress.env('usernametolookup') : defaultusernametolookupuserkey;
        const userkey = (Cypress.env('userkey') != null) ? Cypress.env('userkey') : defaultuserkey;
        const url = (Cypress.env('url') != null) ? Cypress.env('url') : symphonywebtesturl;
        cy.visit(url)
        cy.get('input#SWID')
            .type(username).should('have.value', username)
        cy.get('input#PIN').type(password, { log: false })
        cy.task("log", `logging into site ${url} as user ${username}`)
        cy.get('input[id^="submit_button"]', { timeout: 10000 }).should('be.visible').trigger("click", { force: true })
        cy.task("log", `logged into site ${url} as user ${username} waiting for Users div to appear`)
        cy.get('div', { timeout: 60000 }).contains('Users', { timeout: 60000 }).click({ force: true})
        cy.get('div').contains(/Display.User/).click({ force: true })
        cy.get('input[id^="SirsiWriteTextField_"').type(usernametolookup)
        cy.get('div').contains(/^Display this User/).trigger("click", { force: true })
        cy.get('div').contains("Summary").click()
        cy.task("log", `logged in, performing lookup of userkey for user ${usernametolookup}`) 
        cy.get('div').contains(/User.key:/).parent().prev().find('input').should('have.value', userkey)
        cy.get('div').contains("Logout").click()
        cy.get('div').contains("Yes").click()
        cy.task("log", "logged out") 
    })
})
