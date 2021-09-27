
import * as mainPageXpath from '../support/xpath';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe('Automate Flow', () => {

    beforeEach('Login', () => {
        cy.login('walmart');
       });

    it('Search', () => {
        cy.viewport(1440, 900);
        cy.wait(3000);
        //Search for OTCM
        cy.get(mainPageXpath.searchInput).type('OTCM');
        //Verify listed result
        cy.get(mainPageXpath.listedResult).invoke('text').then((text) => {
            const elemVisible = expect(text.trim()).equal('OTCM - OTC Markets Group Inc.')
            if(elemVisible){
                cy.get(mainPageXpath.listedResult).click();
                cy.wait(3000);
                cy.get(mainPageXpath.cookiesButton).click();
                //Capture the value of open
                cy.get(mainPageXpath.openLable).invoke('text').then((text) => {
                    const openElemVisible = expect(text.trim()).equal('Open');
                    if(openElemVisible) {
                        cy.get(mainPageXpath.openValue).invoke('text').then((ValueOpen) => {
                            const valueOFOpen = ValueOpen;
                            console.log(valueOFOpen);
                        
                        });  

                    }    
                    //Capture the value of Market Cap 
                    cy.xpath(mainPageXpath.marketLabel).invoke('text').then((marketLabel) => {
                        const openElemVisible = expect(marketLabel.trim()).equal('Market Cap');
                        if(openElemVisible) {
                            cy.get(mainPageXpath.marketValue).invoke('text').then((ValueMarket) => {
                                const valueOFOpen = ValueMarket;
                                console.log(valueOFOpen);
                            
                            });  
                        };
                    });  
                //Capture the value of Market Cap 
                });    
            }

    });
});
});
