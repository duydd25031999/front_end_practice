import { Component } from "./component";

export class ContactComponent extends Component {
  constructor() {
    super();
    this.$contactBox = $(`.contact__box`);
  }

  getMessageTemplate({ message }) {
    return `
        <h1 class="text-center text-danger mt-5">
            ${message}
        </h1>
        `;
  }

  setContactBox() {
    var messageTemplate = this.getMessageTemplate({
      message: "this is message from js"
    });
    this.$contactBox.append(messageTemplate);
  }

  init() {
      this.setContactBox();
  }
}
