// import { inputsAreValid } from "./utils/inputs-are-valid";
// import { parseInputs } from "./utils/parse-inputs";
// import { api } from './utils/api';
// import { AlertComponent } from './components/alert.component';
// import { AdditionComponent } from './components/addition.component';

// const alertComponent = new AlertComponent();
// const additionComponent = new AdditionComponent();

import { FooterText } from "./components/FooterText.component";

const footerTextComponent = new FooterText();

export const run = () => {
  footerTextComponent.addFocusEvent();
};
