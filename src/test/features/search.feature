Feature: Validate Search Functionality
Scenario: Validate Search Functionality
Given the application is loaded successfully
When user search for "Automation testing" in Skill Dropdown
Then user sees results matching the search term
And user fetch search results from the API