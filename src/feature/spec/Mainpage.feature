Feature: Local application

  Scenario: Visit the frontpage
    When I open the application
    Then I see the "vite logo" section
    And I see the "react logo" section
    And I can start counting