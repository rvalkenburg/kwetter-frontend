<template>
  <div>
    <el-row>
      <el-col style="padding-right: 5px" :span="7">
        <VerticalNavbar />
      </el-col>
      <el-col :span="10">
        <CreateKweet />
        <!-- <Kweet /> -->
      </el-col>
      <el-col style="padding-left: 5px" :span="7">
        <!-- <ProfileCard /> -->
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateKweet from "@/components/CreateKweet.vue";
import VerticalNavbar from "@/components/VerticalNavbar.vue";
// import Kweet from "@/components/Kweet.vue";
// import ProfileCard from "@/components/ProfileCard.vue";

export default defineComponent({
  name: "Timeline",
  data(): {} {
    return {};
  },
  components: {
    CreateKweet,
    VerticalNavbar,
    // Kweet,
    // ProfileCard,
  },
  computed: {},
  methods: {},
});
</script>

<style>
</style>
