@QB-85 @FromandToairportselection
Feature: From and To airport selection

    Background:
        Given I am on the Qnatas homepage

    Scenario: Show candidate list in departure port
        When I click departure port
        And I type 1 letter
        Then candidate list should remain empty
        And I type 2 letters
        Then candidate list should remain empty
        And I type 3 and more letters
        Then candidate list shows matching results

    Scenario: Show candidate list in arrival port
        When I click arrival port
        And I type 1 letter
        Then candidate list should remain empty
        And I type 2 letters
        Then candidate list should remain empty
        And I type 3 and more letters
        Then candidate list shows matching results

    Scenario: Destination filter
        When I click departure port
        And I type 'ABC' in the departure port
        And I click Arrival port
        And I type 'ABC' in the arrival port
        Then should not show the 'ABC' in candidate list

    Scenario: Same Destination Alert
        When I click departure port
        And I type 'DDD'
        And I click arrival port
        And I type 'AAA'
        And I click departure port
        And I type 'AAA'
        Then should show alert 'This Destination is not available from the selected origin'