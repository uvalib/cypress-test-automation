//
// simple tests for the search-lite service
//

// test constants
const searchUrl   = 'https://virgo-lite.lib.virginia.edu';

describe('Visit search lite: ' + searchUrl, () => {
  it('should visit ' + searchUrl, () => { 

    // go to the search page
    cy.visit(searchUrl)

    // make sure there is the title 'Search'
    cy.get('uvalib-catalog-light').shadow().find('h1').contains('Search')
  });
});

describe('Search for "jefferson" on search lite: ' + searchUrl, () => {
  it('should visit ' + searchUrl, () => {
    
    // go to the search page
    cy.visit(searchUrl)

    // add 'jefferson' to the search box and hit enter
    cy.get('uvalib-catalog-light').shadow().find('uvalib-page').find('uvalib-catalog-light-home').shadow().find('#search').type('jefferson{enter}')

    // wait
    cy.wait(2000)

    // make sure we have results
    cy.get('uvalib-catalog-light').shadow().find('uvalib-page').find('uvalib-catalog-light-home').shadow().find('uvalib-catalog-light-results')

    // click the title of the first result
    cy.get('uvalib-catalog-light').shadow().find('uvalib-page').find('uvalib-catalog-light-home').shadow().find('uvalib-catalog-light-results').shadow().find('uvalib-catalog-light-pool-results').shadow().find('uvalib-catalog-light-result').first().shadow().find('.hit-title').click()

    // wait
    cy.wait(2000)

    // make sure we have a details page
    cy.get('uvalib-catalog-light').shadow().find('uvalib-page').find('uvalib-catalog-light-home').shadow().find('uvalib-catalog-light-details')

  });
});

//
// end of file
//
