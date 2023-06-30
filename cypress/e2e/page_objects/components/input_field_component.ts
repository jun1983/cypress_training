import BaseComponent from './base_component'

class InputFieldComponent extends BaseComponent{
  verifyErrorMessage(expectedErrorMessage:string) {
    this.root.contains(`[role="alert"]`,expectedErrorMessage);
  }

  verifyVisible(){
    this.root.should(`be.visible`);
  }
}

export default InputFieldComponent;