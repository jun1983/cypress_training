/* global cy */

import BaseComponent from './base_component'
import InputFieldComponent from './input_field_component'
import AirportFieldComponent from './airport_field_component'

class FlightSearchWidget extends BaseComponent{
  clickSearchFlightButton() {
    this.rootElement().find(`[data-testid="search-flights-btn"] button`).click()
  }

  departurePort(): AirportFieldComponent{
     return new AirportFieldComponent(this.rootFinder + ` [data-testid="departure-port"]`)
  }

  arrivalPort(): AirportFieldComponent{
    return new AirportFieldComponent(this.rootFinder + ` [data-testid="arrival-port"]`)
  }

  travelDate(){
    return new InputFieldComponent(this.rootFinder + ` [data-testid="travel-dates"]`)
  }
}

export default FlightSearchWidget;