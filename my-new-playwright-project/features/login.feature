Feature: Login action


As a user
I want to log into the application

Scenario: Successful login with valid credentials
    Given I am on the login page
    When I fill with valid credentials
    Then I should be logged in successfully


Scenario Outline: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I fill the login form with "<username>" and "<password>"
    Then I wait 3 seconds

    Examples:
      | username       | password     |
      | invalidUser    | wrongPass    |
      | anotherUser    | badPassword  |
      | testUser       | 123456       |
