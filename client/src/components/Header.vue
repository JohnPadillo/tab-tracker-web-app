<template>
  <v-app-bar app color="cyan" dark>
    <v-toolbar-title>Tab Tracker</v-toolbar-title>
    <v-toolbar-items>
      <v-btn text>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text @click="navigateTo('/register')">Sign Up</v-btn>
      <v-btn text @click="navigateTo('/login')">Login</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style></style>
