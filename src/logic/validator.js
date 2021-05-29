export default function(options) {
  return {
    value: '',
    error: '',
    setValue: function (value) {
      this.value = value
      return this;
    },
    ...options
  }
}