<template>
  <v-app>
    <v-app-bar app color="primary" dark>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
const {title}= require('../package.json')
import Home from './components/Home.vue'
export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    title
  }),
};
</script>
