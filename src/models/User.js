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
  },
  model: function () {
    let user = {};
    const keys = Object.keys(this);
    for (const key of keys) {
      if (key !== 'model' && key !== 'submit')
        user[key] = this[key].value;
    }
    return user;
  },
  submit: function () {
    this.name.validator.required(this.name);
    this.idade.validator.required(this.idade).min(this.idade, 3);
    this.cpf.validator.required(this.cpf);

    return !this.name.error && !this.idade.error && !this.cpf.error;
  }
}
