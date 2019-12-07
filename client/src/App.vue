<template>
  <v-app>
    <page-header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: "App",
  components: { PageHeader },

  data: () => ({
    //
  })
};
</script>
