<template>
  <div id="app">
    <CsInput
      class="app__input"
      label="name"
      name="name"
      :error="user.name.error" 
      v-model="user.name.value"
    />
    <Cs-input
      class="app__input"
      name="age"
      label="idade"
      :error="user.idade.error"
      v-model="user.idade.value"
    />
    <Cs-input
      class="app__input"
      name="ageasd"
      label="CPF"
      :error="user.cpf.error"
      v-model="user.cpf.value"
    />
    <button @click="submit" class="app__submit">submit</button>
    <!-- <CsInputMoney v-model="money.value"/> -->
  </div>
</template>

<script>
import CsInput from './components/CsInput.vue'
import { User } from "./models/User";

export default {
  user: 'App',
  components: {
    CsInput,
  },
  data() {
    return {
      user: User,
      money: {
        value: '0.00'
      }
    }
  },
  created() {
    console.log(this.user)
  },
  methods: {
    submit() {
      
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app__input {
  margin: 15px 0
}
.app__submit {
  margin-top: 15px;
  padding: 12px 58px;
  border: 1px solid transparent;
  border-radius: 5px;
}
</style>
