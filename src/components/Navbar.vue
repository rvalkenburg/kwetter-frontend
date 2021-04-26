<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    style="margin-bottom: 5px"
  >
    <el-menu-item @click="toTimeline()" index="1">Timeline</el-menu-item>
    <el-menu-item @click="toProfile()" index="2">Profile</el-menu-item>
    <el-menu-item disabled index="3">Trending</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Navbar",
  data(): {} {
    return {};
  },
  computed: {
    ...mapGetters("profile", ["user"]),
  },
  methods: {
    toProfile() {
      this.$router.push("/profile");
    },
    toTimeline() {
      this.$router.push("/timeline");
    },
  },
});
</script>