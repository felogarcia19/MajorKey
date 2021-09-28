import * as mainPageXpath from '../support/xpath';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe('Automate Flow', () => {

    beforeEach('Login', () => {
        cy.login();
       });

    it('Search', () => {
        cy.viewport(1440, 900);
        cy.wait(3000);
        //Search for OTCM
        cy.get(mainPageXpath.searchInput).type('RHHBY');
        //Verify listed result
        cy.get(mainPageXpath.listedResult).invoke('text').then((text) => {
            const elemVisible = expect(text.trim()).equal('RHHBY - Roche Holding Ltd')
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
                    cy.get(mainPageXpath.marketLabel).invoke('text').then((marketLabel) => {
                            expect(marketLabel.trim()).equal('Market Cap');
                            cy.get(mainPageXpath.marketValue).invoke('text').then((ValueMarket) => {
                                const valueOFOpen = ValueMarket;
                                console.log(valueOFOpen);
                                //Assert the Company Name and Symbol
                                cy.get(mainPageXpath.companyName).invoke('text').then((compName) => {
                                    const marketElemVisible = expect(compName.trim()).equal('RHHBY');
                                    //Navigate to “Security Details” tab
                                    cy.get(mainPageXpath.securityTab).click();    

                                    //Assert Market Cap on Quote Page matches with Security Detail Page
                                    cy.get(mainPageXpath.marketLabelSecy).invoke('text').then((marketLabelSec) => {
                                        expect(marketLabelSec.trim()).equal('Market Cap');
                                        cy.get(mainPageXpath.marketValueSec).invoke('text').then((marketValueSec) => {
                                            expect(marketValueSec.trim()).equal(valueOFOpen);
                                            //Print log “Market Cap $x on $date”
                                            cy.get(mainPageXpath.dateSec).invoke('text').then((date) => {
                                                //Print log “Market Cap $x on $date”
                                                console.log('Martket Cap' + marketValueSec + " " + 'on' + " " + date);
                                            }); 
            
                                        }); 

                                     }); 
                            
                                 });

                            });  
                     });    
                 }); 
            }
        });
    });
});