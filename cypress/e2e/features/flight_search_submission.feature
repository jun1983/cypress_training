@QB-87 @FlightSearchSubmission
Feature: Flight Search Submission

    Background:
        Given I am on the flight search page

    Scenario: Travel date cannot be empty
        When I select airports as "MEL, SYD"
        When I click submit button
        Then I should see empty travel date error message

    # Scenario: Return date cannot be empty
    #     Given I select trip type as "One way"
    #     And I select airports as "SYD, MEL"
    #     And I select travel dates in "1" days
    #     When I select trip type as "Return"
    #     And I click submit button
    #     Then I should see empty return date error message

    # Scenario Outline: Domestic flights search
    #     When I choose use "<Pay Method>" to pay
    #     And I select trip type as "<Trip Type>"
    #     And I select passengers as "<Passengers>"
    #     And I select flexible dates as "<Flexible Dates>"
    #     And I select airports as "<Airports>"
    #     And I select travel dates in "<Travel Dates>" days
    #     And I click submit button
    #     Then I should see search result reflects my selection

    #     Examples:
    #         | Pay Method | Trip Type | Passengers | Flexible Dates | Airports | Travel Dates |
    #         | Cash       | One way   | 1-0-0      | true           | SYD, MEL | 1            |
    #         | Points     | Return    | 0-1-0      | false          | MEL, SYD | 1,3          |

    # Scenario Outline: International flights search
    #     When I choose use "<Pay Method>" to pay
    #     And I select trip type as "<Trip Type>"
    #     And I select passengers as "<Passengers>"
    #     And I select travel class as "<Travel Class>"
    #     And I select flexible dates as "<Flexible Dates>"
    #     And I select airports as "<Airports>"
    #     And I select travel dates in "<Travel Dates>" days
    #     And I click submit button
    #     Then I should see search result reflects my selection

    #     Examples:
    #         | Pay Method | Trip Type | Passengers | Travel Class | Flexible Dates | Airports | Travel Dates |
    #         | Cash       | One way   | 1-0-0      | First        | true           | SYD, LAX | 4            |
    #         | Points     | Return    | 2-1-1      | Business     | false          | MEL, SYD | 4,8          |
