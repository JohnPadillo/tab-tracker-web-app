<template>
  <div>
    <h1>Register</h1>
    <input type="text" name="name" v-model="username" placeholder="Username" />
    <br />
    <input type="email" name="email" v-model="email" placeholder="Email" />
    <br />
    <input type="text" name="password" v-model="password" placeholder="Password" />
    <br />
    <div class="error" v-html='error'></div>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      username: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          name: this.username
        })
        console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red
}
</style>
