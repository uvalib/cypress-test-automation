//
// simple tests for the search-lite service
//

// test constants
const searchUrl   = 'https://virgo-lite-dev.lib.virginia.edu';

describe('Visit search lite: ' + searchUrl, () => {
  it('should visit ' + searchUrl, () => { 
    cy.visit(searchUrl)
    cy.get('uvalib-catalog-light').shadow().find('h1').contains('Search')
  });
});

describe('Search for "jefferson" on search lite: ' + searchUrl, () => {
  it('should visit ' + searchUrl, () => {
    cy.visit(searchUrl)
    cy.get('uvalib-catalog-light').shadow().find('uvalib-page').find('uvalib-catalog-light-home').shadow().find('#search').type('jefferson{enter}')
    cy.wait(2000)
    cy.get('uvalib-catalog-light').shadow().find('uvalib-page').find('uvalib-catalog-light-home').shadow().find('uvalib-catalog-light-results')
  });
});

//
// end of file
//
