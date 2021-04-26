<template>
  <el-card style="margin-top: 1%" class="box-card">
    <el-row>
      <div style="display: flex; align-items: center">
        <el-col :span="8">
          <el-avatar :size="60" :src="url"></el-avatar>
        </el-col>
        <el-col :span="18">
          <span style="display: Inline-Block">Roger Valkenburg </span>
        </el-col>
      </div>
    </el-row>
    <el-divider class="divide-space" content-position="center"></el-divider>
    <el-row>
      <div class="text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </el-row>
    <el-divider class="divide-space" content-position="center"></el-divider>
    <el-row>
      <el-col :span="24">
        <div style="float: right">
          <el-badge :value="12" class="item">
            <el-button size="small">Like</el-button>
          </el-badge>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Kweet",
  data(): {} {
    return {
      text: "This is a kweet made by Roger",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
});
</script>
<style scoped>
.text {
  display: flex;
  width: 100%;
  border: 1px solid rgb(177, 177, 177);
  min-height: 10%;
  padding: 5px;
  text-align: left;
}

.divide-space {
  margin-top: 1%;
  margin-bottom: 1%;
  color: rgb(177, 177, 177);
}
</style>