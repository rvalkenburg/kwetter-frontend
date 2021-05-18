<template>
  <el-menu class="el-menu-demo" mode="horizontal" style="margin-bottom: 5px">
    <el-menu-item @click="toTimeline()" index="timeline">Timeline</el-menu-item>
    <el-menu-item @click="toProfile()" index="profile">Profile</el-menu-item>
    <el-menu-item disabled index="3">Trending</el-menu-item>
    <el-menu-item @click="toSearch()" index="search">Search</el-menu-item>
    <el-menu-item index="signout" @click="signOut()">Logout</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import firebase from "firebase/app";
import { ActionTypes } from "@/store/modules/profile/actions";

export default defineComponent({
  name: "Navbar",
  computed: {
    getIdOfCurrentUser() {
      if (this.$store.getters["auth/profile"] != null) {
        return this.$store.getters["auth/profile"].id;
      }
      return null;
    },
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch(`auth/${ActionTypes.SET_PROFILE}`, null);

          this.$router.push({ name: "Login" });
        });
      this.$router.push({ name: "Login" });
    },
    toProfile() {
      this.$router.push({
        name: "Profile",
        params: { id: this.getIdOfCurrentUser },
      });
    },
    toTimeline() {
      this.$router.push({ name: "Timeline" });
    },
    toSearch() {
      this.$router.push({ name: "Search" });
    },
  },
});
</script>