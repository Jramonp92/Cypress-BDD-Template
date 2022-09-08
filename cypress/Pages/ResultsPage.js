class ResultsPage {
    elements = {
        productCards: () => cy.get('.s-card-container'),
        
    }
     

    onResultPage(){
        cy.url().should('contain','s?k=')

    }

    verifyRelevantItems(){
        this.elements.productCards().find('.a-size-medium').should('contain', 'Harry Potter');
    }
    
 }
 
 
 
 module.exports = new ResultsPage();