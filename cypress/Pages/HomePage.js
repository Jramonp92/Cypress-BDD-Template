class HomePage {
   elements = {
       searchBar: () => cy.get('#twotabsearchtextbox'),
       searchButton: () => cy.get('#nav-search-submit-button')
   }
    openPage(){
        cy.visit("/")
    }

    searchBarVisible(){
        this.elements.searchBar().should('be.visible');
    }

    inputTextSearchBar(text){
        this.elements.searchBar().type(text);
    }

    clickSearchButton(){
        this.elements.searchButton().click()
    }
}



module.exports = new HomePage();