<template>
  <el-card style="min-height: 100px" class="box-card">
    <el-row>
      <el-avatar class="center" :size="150" :src="avatar"></el-avatar>
    </el-row>
    <el-row>
      <span style="padding-top: 3%" class="center">{{ displayName }}</span>
    </el-row>
  </el-card>
  <el-card style="min-height: 100px" class="box-card">
    <el-row>
      <span class="center"></span>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileCard",
  props: {
    description: String,
    displayName: String,
    avatar: String,
  },
});
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>