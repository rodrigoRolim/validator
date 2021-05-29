import { isEmpty, isMin } from "../logic/rules";
export const User = {
  name: {
    content: "",
    validator: { required: isEmpty, min: isMin },
    error: '',
    set value(value) {
      const parent = this;
      this.content = value;
      this.validator.required(parent).min(parent, 3);
    },
    get value() {
      return this.content;
    },
  },
  idade: {
    content: "",
    validator: { required: isEmpty, min: isMin },
    error: '',
    set value(value) {
      const parent = this;
      this.content = value;
      this.validator.required(parent).min(parent, 3);
    },
    get value() {
      return this.content;
    }
  },
  cpf: {
    content: "",
    validator: { required: isEmpty },
    error: '',
    set value(value) {
      const parent = this;
      this.content = value;
      this.validator.required(parent);
    },
    get value() {
      return this.content;
    }
  }
}
