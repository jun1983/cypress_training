import BasePage from "./base_page"
import FlightSearchWidget from "../components/flight_search_widget"

class BookFlightsPage extends BasePage {
    pageURL = "/book-a-trip/flights.html"

    flightSearchWidget(){
        return new FlightSearchWidget(`[data-widget-type="flight-search"]`);
    }

    visit() {
        cy.visit('/book-a-trip/flights.html');
    }
}

export default BookFlightsPage