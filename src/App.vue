<template>
  <navbar v-if="auth != null" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters("auth", ["auth"]),
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