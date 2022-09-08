Feature: Make a Simple Search on Amazon
    A simple search on Amazon

    @Smoke
    Scenario: Verifying relevant results for an Amazon Search
        When I am on the home page
        Then a search bar should be visible
        When I input a text in the search bar
        And I Click the search button
        Then I should be redirected to the product page
        And I must see relevant items