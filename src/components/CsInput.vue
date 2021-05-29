<template>
  <div class="cs-input">
    <div class="cs-input__wrapper" :class="{ 'cs-input__wrapper--error': error }">
      <input class="cs-input__input" type="text" :id="name" v-model="inputEmitter"/>
      <label for="input" class="cs-input__label">{{label}}</label>
    </div>
    <div class="cs-input__errors" v-if="error">
      <small>{{error}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    name: String,
    msg: String,
    error: String,
    value: String,
    money: String,
    label: String
  },
  computed: {
    inputEmitter: {
      set(value) {
        this.$emit('input', value);
      },
      get() {
        return this.value;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cs-input {
  display: flex;
  flex-direction: column;
  position: relative;
}
.cs-input__wrapper {
  display: flex;
  flex-direction: column-reverse;
}
.cs-input__label {
  margin-left: 15px;
  background-color: white;
  color: purple;
  border-radius: 30px;
  position: absolute;
  top: -10px;
  padding: 0 5px;
  font-size: 0.85em;
}
.cs-input__input {
  width: 320px;
  padding: 11px 15px;
  border-radius: 30px;
  border: 1px solid purple;
  outline: none;
  font-size: 1em;
  color: purple;
  font-weight: 500;
  caret-color: purple;
}
.cs-input__input:focus {
  border-width: 2px;
  padding: 10px 14px;
}

.cs-input__errors {
  margin-left: 15px;
  color: red;
  font-size: 0.9em;
  font-style: italic;
  position: absolute;
  top: 100%;
}
.cs-input__wrapper--error > * {
  color: red;
  border-color: red;
  caret-color: red;
}
</style>
