<template>
  <div>
    <el-row>
      <el-col :span="8"
        >Test
        <div class="grid-content bg-purple"></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Timeline",
  data(): {} {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
});
</script>

<style>
</style>
