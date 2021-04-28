<template>
  <navbar v-if="user !== null" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "App",
  data(): {} {
    return {};
  },
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters("profile", ["user"]),
  },
  methods: {},
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