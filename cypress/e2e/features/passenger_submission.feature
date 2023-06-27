@QB-84:Passengers-Search-Submission
Feature: Passengers Search Submission

    Background:
        Given I am on the flight search page

    Scenario Outline: passengers can't be more than 9
        Given I select passengers as "<Passengers>"
        When I click '+' button in "<Row>"
        Then I should see max-number error message

        Examples:
            | Passengers | Row      |
            | 3-4-2      | adults   |
            | 4-4-1      | children |
            | 5-1-3      | infants  |
    Scenario Outline: Only 1 infant can be booked for every 1 adult.
        Given I select passengers as "<Passengers>"
        When I click '+' button in "<Row>"
        Then I should see adult-infants number error message

        Examples:
            | Passengers | Row     |
            | 1-0-1      | infants |

    Scenario Outline: Number of passengers cannot be less than 1
        Given I select passengers as "<Passengers>"
        When I click '-' button in "<Row>"
        Then I should see empty passengers number error message

        Examples:
            | Passengers | Row    |
            | 1-0-0      | adults |

    Scenario Outline: International flights do not allow booking without adults
        Given I am on the International flights page
        And  I select airports as "<Airports>"
        Given I select passengers as "<Passengers>"
        When I click '-' button in "<Row>"
        Then the number still be 1,not 0
        Then I should see 'children travelling alone' error message

        Examples:
            | Airports | Passengers | Row    |
            | SYD-SIN  | 1-1-0      | adults |