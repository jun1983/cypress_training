import InputFieldComponent from './input_field_component';

class AirportFieldComponent extends InputFieldComponent{
  click(){
    this.root.click()
  }

  type(str:string){
    this.root.find('input').type(str)
  }

  selectAirportByIATA(iataCode:string){
    const matcher = new RegExp('.*'+iataCode+'$')
    this.root.find('li').contains(matcher).click()
  }

  setValue(iataCode:string){
    this.click()
    this.type(iataCode)
    this.selectAirportByIATA(iataCode)
  }
}

export default AirportFieldComponent;