<template>
  <el-menu
    :router="true"
    class="el-menu-demo"
    mode="horizontal"
    style="margin-bottom: 5px"
  >
    <el-menu-item index="/timeline">Timeline</el-menu-item>
    <el-menu-item index="/profile">Profile</el-menu-item>
    <el-menu-item disabled index="3">Trending</el-menu-item>
    <el-menu-item @click="signOut()">Logout</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import firebase from "firebase";
import { ActionTypes } from "@/store/modules/profile/actions";

export default defineComponent({
  name: "Navbar",
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch(`profile/${ActionTypes.SET_USER}`, null);

          this.$router.push({ name: "Login" });
        });
      this.$router.push({ name: "Login" });
    },
  },
});
</script>