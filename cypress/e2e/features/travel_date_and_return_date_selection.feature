# Acceptance Criteria
@QB-83 Travel date and return date selection
Feature: Travel date and return date selection

    Background:
        Given I am on the flight search page.

    Scenario: only one travel date needs to be selected for one-way trip.
        Given I select trip type as "One way"
        When I click When button
        And I click an available date in the calendar
        Then CONFIRM button should be displayed in the bottom right corner.

    # Scenario: depature time should be at least in 4 hours for One way trip.
    #     Given I select trip type as "One way"
    #     When I click When button
    #     And I click the earliest available date in the calendar
    #     And I click CONFIRM
    #     Then the first available flight time should be no earlier than 4 hours from current time.

    # Scenario: user can only search flight within 360 days.
    #     Given I select trip type as "One way"
    #     When I click When button
    #     And I scroll down to the last available date
    #     Then the last available date should be within 360 days from current date

    # Scenario: both travel and return dates need to be selected for a return trip.
    #     Given I select trip type as "Return"
    #     When I click When button
    #     And I click an available date as departure date in the calendar
    #     And I click an available date later than the departure in the calendar
    #     Then CONFIRM button should be displayed in the bottom right corner.

    # Scenario: depature date will be updated if an earlier return date is selected.
    #     Given I select trip type as "Return"
    #     When I click When button
    #     And I click an available date as departure date in the calendar
    #     And I click an available date earlier than the departure in the calendar
    #     Then the earlier date will be set as departure date.

    # Scenario: depature time should be at least in 4 hours for return trip.
    #     Given I select trip type as "Return"
    #     When I click When button
    #     And I click the earliest available date in the calendar
    #     And I click an available date later than the departure in the calendar
    #     And I click CONFIRM
    #     Then the first available flight time should be no earlier than 4 hours from current time.