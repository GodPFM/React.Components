export default class ValidationInputs {
  static validateInputText(value: string | undefined) {
    if (!value) {
      return 'Value is empty';
    }
    if (value.length < 3) {
      return 'Length < 3';
    }
    if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
      return 'First letter must be uppercase';
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

  static validateImageInput(files: FileList | null | undefined) {
    if (!files) {
      return 'Upload image';
    }
    if (files && files[0]) {
      if (files[0].size > 3145728) {
        return 'Size > 3MB';
      } else {
        const fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
        const extension = files[0].name.split('.').pop()?.toLowerCase();
        if (extension && fileTypes.includes(extension)) {
          return false;
        } else {
          return 'Wrong type of file';
        }
      }
    }
    return 'Upload image';
  }
}
