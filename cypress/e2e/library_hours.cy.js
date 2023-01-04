//
// main library site contains library hours
//

// test constants
const libraryUrl = 'https://library.virginia.edu';

const test_start_Url  = libraryUrl;

describe('Visit ' + test_start_Url, () => {
  it('should visit ' + test_start_Url, () => { 
    cy.visit(test_start_Url);

    // make sure there is the library hours widget present
    cy.get( ".home-hours-block" ).find( "dd" )
  });
});

//
// end of file
//
