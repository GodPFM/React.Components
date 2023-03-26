export default class ValidationInputs {
  static validateInputText(value: string | undefined) {
    if (!value) {
      return 'Value is empty';
    }
    if (value.length < 3) {
      return 'Length < 3';
    }
    return false;
  }

  static validateInputDate(value: string | undefined) {
    const dateNow = Date.now();
    if (!value) {
      return 'Field is empty';
    }
    const dateValue = new Date(value);
    if (Number(dateValue) - Number(dateNow) > 0) {
      return 'The date not has passed';
    }
    return false;
  }
  static validateSelect(value: string | undefined) {
    if (!value) {
      return 'Choose category';
    }
    return false;
  }

  static validateCheckbox(value: boolean | undefined) {
    if (!value) {
      return 'Accept the agreement';
    }
    return false;
  }

  static validateRadioInput(...args: (boolean | undefined)[]) {
    if (!args.includes(true)) {
      return 'Choose your sex';
    }
    return false;
  }

  static validateImageInput(value: string | undefined) {
    if (!value) {
      return 'Upload image';
    }
    return false;
  }
}
