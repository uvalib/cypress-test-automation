//
// simple test to verify the Libra search form  works correctly
//

// test constants
const searchUrl   = 'https://library.virginia.edu/libra';

describe('Visit libra search: ' + searchUrl, () => {
  it('should visit ' + searchUrl, () => { 

    // go to the search page
    cy.visit(searchUrl)

    // make sure there is the title 'Libra: Search and submit'
    cy.contains( /Libra: Search and submit/)
  });
});

describe('Search for "Jefferson" on libra search: ' + searchUrl, () => {
  it('should visit ' + searchUrl, () => {
    
    // go to the search page
    cy.visit(searchUrl)

    // add 'Jefferson' to the search box and hit enter
    cy.get('#main-content').find('#libraQuery').type('Jefferson{enter}')

    // wait
    cy.wait(5000)

    // no error message box
    cy.get('.message-box').should('not.exist')

    // should only be results from one pool
    cy.get('.pool-tabs').find('button').should('have.length', 1)

    // make sure we have results from all the libra repos
    cy.contains( /Libra Data Repository/)
    cy.contains( /Libra ETD Repository/)
    cy.contains( /Libra Open Repository/)
  });
});

//
// end of file
//
