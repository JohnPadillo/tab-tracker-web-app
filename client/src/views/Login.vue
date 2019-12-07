<template>
  <v-layout>
    <v-flex xs6 offset-md3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <!-- <v-text-field label="Username" v-model="username"></v-text-field> -->

          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
          <div class="error-message" v-html="error" />
          <v-btn class="cyan" dark @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      error: null
    };
  }
  //   methods: {
  //     async register() {
  //       try {
  //         await AuthenticationService.register({
  //           email: this.email,
  //           password: this.password,
  //           name: this.username
  //         });
  //       } catch (error) {
  //         this.error = error.response.data.error;
  //       }
  //     }
  //   }
};
</script>

<style scoped></style>
