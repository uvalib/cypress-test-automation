//
// standard set of catalog URL's to verify the Libra search form  works correctly
//

// test constants
const mustContain = 'Libra Repository';
const queryUrl    = 'search?mode=advanced&q=keyword:+{jefferson}+AND+filter:+{(FilterCollection:"Libra+Repository")}';
const searchUrl   = 'https://search.lib.virginia.edu';
const v4Url       = 'https://v4.lib.virginia.edu';

const test_search_Url  = searchUrl + '/' + queryUrl;
const test_v4_Url      = v4Url     + '/' + queryUrl;

describe('Visit ' + test_search_Url, () => {
  it('should visit ' + test_search_Url, () => { 
    cy.visit(test_search_Url);
    cy.contains( /results for:/ );
    cy.contains( mustContain );
  });
});

describe('Visit ' + test_v4_Url, () => {
  it('should visit ' + test_v4_Url, () => { 
    cy.visit(test_v4_Url);
    cy.contains( /results for:/ );
    cy.contains( mustContain );
  });
});

//
// end of file
//
