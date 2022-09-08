
const {Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage =  require('../../Pages/HomePage')
const ResultsPage =  require('../../Pages/ResultsPage')


When('I am on the home page', () => {
  HomePage.openPage()
})

Then('a search bar should be visible', () => {
  HomePage.searchBarVisible()
})

When('I input a text in the search bar', () => {
  HomePage.inputTextSearchBar('Harry Potter')
})

And('I Click the search button', () => {
  HomePage.clickSearchButton()
})

Then('I should be redirected to the product page', () => {
  ResultsPage.onResultPage()
})

And('I must see relevant items', () => {
  ResultsPage.verifyRelevantItems()
})
