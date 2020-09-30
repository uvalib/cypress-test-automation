//
// standard set of catalog URL's to verify the redirection javascript works correctly
//

// test constants
const mustContain = 'Civil Air Patrol Searches for Plane Wreckage in West Virginia';
const queryUrl    = 'items/uva-lib:2214295';
const searchUrl   = 'https://search.lib.virginia.edu';
const v4Url       = 'https://v4.lib.virginia.edu';
const kioskUrl    = 'https://search-kiosk.lib.virginia.edu';

const test_A_Url  = searchUrl + '/' + queryUrl
const test_B_Url  = v4Url     + '/' + queryUrl
const test_C_Url  = kioskUrl  + '/' + queryUrl

describe('Visit ' + test_A_Url, () => {
  it('should visit' + test_A_Url, () => { 
    cy.visit(test_A_Url);
    cy.contains(mustContain);
  });
});

describe('Visit ' + test_B_Url, () => {
  it('should visit' + test_B_Url, () => { 
    cy.visit(test_B_Url);
    cy.contains(mustContain);
  });
});

describe('Visit ' + test_C_Url, () => {
  it('should visit' + test_C_Url, () => { 
    cy.visit(test_C_Url);
    cy.contains(mustContain);
  });
});

//
// end of file
//
