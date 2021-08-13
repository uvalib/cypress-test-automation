//
// simple tests for the search-lite service
//

// test constants
const searchUrl   = 'https://virgo-lite-dev.lib.virginia.edu';

describe('Visit search lite: ' + searchUrl, () => {
  it('should visit ' + searchUrl, () => { 
    cy.visit(searchUrl)
    //cy.wait(2000)
    cy.get('uvalib-catalog-light').shadow().find('h1').contains('Search')
    //cy.get('#q').type('jefferson{enter}')
  });
});

//
// end of file
//
