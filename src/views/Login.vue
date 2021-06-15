<template>
  <div id="app">
    <el-alert
      v-if="success"
      title="Registration successful"
      type="success"
      show-icon
    >
    </el-alert>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import LoginForm from "../components/LoginForm.vue";
export default defineComponent({
  name: "Login",
  components: {
    LoginForm,
  },
  computed: {
    ...mapGetters("auth", ["success"]),
  },
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
