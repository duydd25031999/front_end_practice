export class FooterText {
  constructor() {
    this.$footerText = $(`.footer__text`);
    this.$footerTextInput = $(`.footer__text__input`);
    this.$footerTextPlaceholder = $(`.footer__text__placeholder`);
  }

  addFocusEvent() {
    let context = this;

    context.$footerText.focusin(function(event) {
      context.$footerTextPlaceholder.hide();
    });

    context.$footerText.focusout(function(event) {
      let value = context.$footerTextInput.val();
      if (value.length == 0) {
        context.$footerTextPlaceholder.show();
      }
    });
  }
}
