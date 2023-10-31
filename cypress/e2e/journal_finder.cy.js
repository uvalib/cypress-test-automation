//
// simple tests for the journal finder service
//

// test constants
const searchUrl   = 'https://guides.lib.virginia.edu/journalfinder';

describe('Visit journal finder: ' + searchUrl, () => {
  it('should visit ' + searchUrl, () => { 

    // go to the search page
    cy.visit(searchUrl)

    // make sure there is the title 'Find Journals by Title'
    cy.contains( /Find Journals by Title/)
  });
});

describe('Search for "Cavalier Daily" on journal finder: ' + searchUrl, () => {
  it('should visit ' + searchUrl, () => {
    
    // go to the search page
    cy.visit(searchUrl)

    // add 'Cavalier Daily' to the search box and hit enter
    cy.get('#s-lg-side-nav-content').find('#virgo4JournalName').type('Cavalier Daily{enter}')

    // wait
    cy.wait(5000)

    // no error message box
    cy.get('.message-box').should('not.exist')

    // make sure the journals facet checkbox is set
    //cy.get('#accordion-conttent-pool-filter').find('.p-checkbox').get('[aria-checked="true"]').contains(/Journals/)
    cy.get('#accordion-conttent-pool-filter').find('input#FilterResourceType-Journals').should('be.checked')

    // should only be results from one pool
    cy.get('.pool-tabs').find('button').should('have.length', 1)

    // make sure we have a result titled 'The Cavalier Daily'
    cy.get('.search-results').find('.hit-title').contains(/The Cavalier Daily/)
  });
});

//
//
// end of file
//
