import BaseComponent from './base_component'

class InputFieldComponent extends BaseComponent{
  verifyErrorMessage(expectedErrorMessage:string) {
    this.rootElement().contains(`[role="alert"]`,expectedErrorMessage);
  }

  verifyVisible(){
    this.rootElement().should(`be.visible`);
  }
}

export default InputFieldComponent;