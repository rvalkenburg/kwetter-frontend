<template>
  <Navbar v-if="isUserLoggedIn" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { store } from "./store";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    isUserLoggedIn() {
      if (store.getters["auth/profile"]) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
body {
  background: rgb(230, 230, 230);
}
</style>