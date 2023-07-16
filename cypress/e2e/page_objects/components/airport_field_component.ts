import InputFieldComponent from './input_field_component';

class AirportFieldComponent extends InputFieldComponent{
  click(){
    this.rootElement().click()
  }

  type(str:string){
    this.rootElement().find('input').type(str)
  }

  selectAirportByIATA(iataCode:string){
    const matcher = new RegExp('.*'+iataCode+'$')
    this.rootElement().find('li').contains(matcher).click()
  }

  setValue(iataCode:string){
    this.click()
    this.type(iataCode)
    this.selectAirportByIATA(iataCode)
  }
}

export default AirportFieldComponent;