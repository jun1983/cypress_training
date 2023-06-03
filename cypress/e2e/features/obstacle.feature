Feature: Solve obstacle problems

Scenario: Obstacle 72954
    Given I am on the obstacle "72954" page
    When I click "Click Me 2x" link
    And I click "Click me once more" link
    Then I should see Good Job result

Scenario: Obstacle 81121
    Given I am on the obstacle "81121" page
    When I click button until its text is enough
    Then I should see Good Job result

Scenario: Obstacle 41038
    Given I am on the obstacle "41038" page
    When I click on "right" of the button with text "Click into my right half"
    Then I should see Good Job result