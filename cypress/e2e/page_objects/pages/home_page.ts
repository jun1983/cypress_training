import BasePage from "./base_page";
import FlightSearchWidget from "../components/flight_search_widget"

class HomePage extends BasePage {
    flightSearchWidget():FlightSearchWidget{
        return new FlightSearchWidget(`[data-widget-type="flight-search"]`);
    }

    multiSearchForm(){
        return cy.get(`.multi-search-form-nested`)
    }

    expandFlightSearchForm(){
        return this.multiSearchForm().find(`#panel-flights`).click();
    }
    
    visit() {
        cy.visit('/');
    }
}

export default HomePage;