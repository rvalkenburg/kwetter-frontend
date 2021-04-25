<template>
  <div id="app">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "../components/LoginForm.vue";
export default defineComponent({
  name: "Login",
  data(): {} {
    return {};
  },
  components: {
    LoginForm,
  },
  computed: {},
  methods: {},
});
</script>

<style>
.login {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
