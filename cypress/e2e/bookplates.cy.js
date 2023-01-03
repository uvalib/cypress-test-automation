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

    // make sure there is the title 'Ellen Bayard Weedon Foundation Gift Fund'
    cy.contains( /Ellen Bayard Weedon Foundation Gift Fund/)
  });
});

//
// end of file
//
