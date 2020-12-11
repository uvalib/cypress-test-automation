//
// standard set of catalog URL's to verify the redirection javascript works correctly
//

// test constants
const queryUrl    = 'catalog?catalog_select=catalog&f[fund_code_facet][]=';
const searchUrl   = 'https://search.lib.virginia.edu';
const v4Url       = 'https://v4.lib.virginia.edu';
const bookplate_1 = 'WEEDON-DR01378';
const bookplate_2 = 'WEBB-ER00605';
const bookplate_3 = 'TUNSTALL-ER00631';

const test_search_bp1_Url  = searchUrl + '/' + queryUrl + bookplate_1;
const test_search_bp2_Url  = searchUrl + '/' + queryUrl + bookplate_2;
const test_search_bp3_Url  = searchUrl + '/' + queryUrl + bookplate_3;
const test_v4_bp1_Url      = v4Url     + '/' + queryUrl + bookplate_1;
const test_v4_bp2_Url      = v4Url     + '/' + queryUrl + bookplate_2;
const test_v4_bp3_Url      = v4Url     + '/' + queryUrl + bookplate_3;

describe('Visit ' + test_search_bp1_Url, () => {
  it('should visit ' + test_search_bp1_Url, () => { 
    cy.visit(test_search_bp1_Url);
    cy.contains( /results for:/ );
    cy.contains( bookplate_1 );
  });
});

describe('Visit ' + test_search_bp2_Url, () => {
  it('should visit ' + test_search_bp2_Url, () => { 
    cy.visit(test_search_bp2_Url);
    cy.contains( /results for:/ );
    cy.contains( bookplate_2 );
  });
});

describe('Visit ' + test_search_bp3_Url, () => {
  it('should visit ' + test_search_bp3_Url, () => { 
    cy.visit(test_search_bp3_Url);
    cy.contains( /results for:/ );
    cy.contains( bookplate_3 );
  });
});

describe('Visit ' + test_v4_bp1_Url, () => {
  it('should visit ' + test_v4_bp1_Url, () => { 
    cy.visit(test_v4_bp1_Url);
    cy.contains( /results for:/ );
    cy.contains( bookplate_1 );
  });
});

describe('Visit ' + test_v4_bp2_Url, () => {
  it('should visit ' + test_v4_bp2_Url, () => { 
    cy.visit(test_v4_bp2_Url);
    cy.contains( /results for:/ );
    cy.contains( bookplate_2 );
  });
});

describe('Visit ' + test_v4_bp3_Url, () => {
  it('should visit ' + test_v4_bp3_Url, () => { 
    cy.visit(test_v4_bp3_Url);
    cy.contains( /results for:/ );
    cy.contains( bookplate_3 );
  });
});

//
// end of file
//
