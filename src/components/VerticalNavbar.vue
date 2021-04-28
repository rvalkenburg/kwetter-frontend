<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    style="text-align: left"
  >
    <el-menu-item index="1">
      <span>#ProgammersLifeMatter</span>
    </el-menu-item>
    <el-menu-item index="2">
      <span>#Fontys</span>
    </el-menu-item>
    <el-menu-item index="3">
      <span>#Semester6</span>
    </el-menu-item>
    <el-menu-item index="4">
      <span>#kwetter</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VerticalNavbar",
  data(): {} {
    return {
      input: "",
    };
  },
});
</script>