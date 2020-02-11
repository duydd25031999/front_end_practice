import { inputsAreValid } from "../utils/inputs-are-valid";
import { parseInputs } from "../utils/parse-inputs";
import { api } from '../utils/api';

import { AlertComponent } from '../components/alert.component';
import { AdditionComponent } from '../components/addition.component';
import { ContactComponent } from '../components/contact.component';

const alertComponent = new AlertComponent();
const additionComponent = new AdditionComponent();
const contactComponent = new ContactComponent();

function run() {
  alertComponent.init();
  additionComponent.init();
  contactComponent.init();

  alertComponent.hideErrors();

  additionComponent.onClick(() => {
    alertComponent.hideErrors();
    const inputs = additionComponent.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      additionComponent.setResult(numA + numB);
    } else {
      additionComponent.setResult("");
      alertComponent.handleAdditionError(inputs, parsedInputs);
    }
  });
};


console.log('this is index chuck');
run();
