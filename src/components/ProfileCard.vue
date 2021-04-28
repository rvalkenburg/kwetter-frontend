<template>
  <el-card style="min-height: 100px" class="box-card">
    <el-row>
      <el-avatar class="center" :size="150" :src="url"></el-avatar>
    </el-row>
    <el-row>
      <span style="padding-top: 3%" class="center">Roger</span>
    </el-row>
  </el-card>
  <el-card style="min-height: 100px" class="box-card">
    <el-row>
      <span class="center">Insert inspirational quote</span>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "ProfileCard",
  data(): { input: string; url: string } {
    return {
      input: "",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  computed: {
    ...mapGetters("profile", ["user"]),
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