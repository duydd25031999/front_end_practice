import { inputsAreValid } from "../utils/inputs-are-valid";

export class AlertComponent {
  constructor() {
    this.$errorBox = $(`#error`);
  }

  handleAdditionError(inputs, numbers) {
    const fullMessage = inputs.reduce((message, str, index) => {
      if (inputsAreValid(numbers[index])) {
        return message + "";
      } else {
        return message + `${str} is not a number. `;
      }
    }, "Please enter two valid numbers! ");

    this.$errorBox.text(fullMessage);
    this.$errorBox.removeClass(`invisible`);
  }

  hideErrors() {
    this.$errorBox.addClass(`invisible`);
  }
}
