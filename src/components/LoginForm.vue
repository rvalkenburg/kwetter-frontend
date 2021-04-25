<template>
  <div class="login">
    <el-card class="card">
      <h2 class="title">Login</h2>
      <el-form class="login-form" ref="form">
        <el-form-item prop="username">
          <el-input placeholder="Username" prefix-icon="fas fa-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="Password"
            type="password"
            prefix-icon="fas fa-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <GoogleButton />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GoogleButton from "./GoogleButton.vue";

export default defineComponent({
  name: "Login",
  data(): {} {
    return {};
  },
  components: {
    GoogleButton,
  },
  computed: {},
  methods: {},
});
</script>

<style>
.title {
  color: black;
}
.card {
  color: white;
}
</style>