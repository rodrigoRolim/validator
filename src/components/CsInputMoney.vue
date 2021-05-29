<template>
  <div class="cs-input">
    <div class="cs-input__wrapper" :class="{ 'cs-input__wrapper--error': error }">
      <input class="cs-input__input" type="text" id="money" v-model="inputMoney"/>
      <label for="money" class="cs-input__label">eu sou um rotulo de dinheiro</label>
    </div>
    <div class="cs-input__errors" v-if="error">
      <small>{{error}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  model: {
    prop: 'money',
    event: 'input'
  },
  props: {
    msg: String,
    error: String,
    value: String,
    money: {
      type: String,
      default: '0.00'
    },
  },
  computed: {
    inputMoney: {
      set(value) {
       
        this.$emit('input', value)
      },
      get() {
        return (this.money.search("R$") !== -1) ? this.money : 'R$ ' + this.money  
      }
    }
  },
  methods: {
    emitterInput(e) {
      const value = 'R$ ' + e.target.value;
      this.$emit('input', value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cs-input {
  display: flex;
  flex-direction: column;
  
}
.cs-input__wrapper {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
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
  padding: 10px 15px;
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
  padding: 9px 14px;
}

.cs-input__errors {
  margin-left: 15px;
  color: red;
  font-size: 0.9em;
  font-style: italic;
}
.cs-input__wrapper--error > * {
  color: red;
  border-color: red;
  caret-color: red;
}
</style>
