  
<template>
  <navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "Timeline",
  data(): {} {
    return {};
  },
  components: {
    Navbar,
  },
  computed: {},
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