export class AdditionComponent {
  constructor() {
    this.$numberOneInput = $(`#numberOne`);
    this.$numberTwoInput = $(`#numberTwo`);
    this.$addValuesButton = $(`#addValues`);
    this.$resultDiv = $(`#result`);
  }

  getInputs() {
    return [this.$numberOneInput.val(), this.$numberTwoInput.val()];
  }

  setResult(str) {
    this.$resultDiv.text(str);
  }

  onClick(cb) {
    this.$addValuesButton.on(`click`, cb);
  }
}
