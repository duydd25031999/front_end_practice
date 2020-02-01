import { inputsAreValid } from "./utils/inputs-are-valid";
import { parseInputs } from "./utils/parse-inputs";
import { api } from './utils/api';
import { AlertComponent } from './components/alert.component';
import { AdditionComponent } from './components/addition.component';

const alertComponent = new AlertComponent();
const additionComponent = new AdditionComponent();

export const run = () => {
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
