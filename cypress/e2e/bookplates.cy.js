//
// bookplate search from the main library site returns results
//

// test constants
const libraryUrl = 'https://www.library.virginia.edu';
const bookplate  = 'WEEDON-DR01378';

const test_start_Url  = libraryUrl + '/bookplates/' + bookplate;

describe('Visit ' + test_start_Url, () => {
  it('should visit ' + test_start_Url, () => { 
    cy.visit(test_start_Url);

    // click expected link
    cy.get('uvalib-app').shadow().find('uvalib-article').shadow().find('article').find('a[href*="search"]').click();

    // wait
    cy.wait(2000)

    // make sure we have some results
    cy.get('.hits');

  });
});

//
// end of file
//
