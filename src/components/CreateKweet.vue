<template>
  <el-card style="min-height: 100px" class="box-card">
    <el-row>
      <el-col :span="20">
        <el-input placeholder="Please input" v-model="input"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button @click="createKweet()">Post</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import KweetDto from "@/models/KweetDto";
import { ActionTypes } from "@/store/modules/kweet/actions";
import { toKweet } from "@/store/modules/kweet/kweet";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "CreateKweet",
  data(): { input: string } {
    return {
      input: "",
    };
  },
  computed: {
    ...mapGetters("profile", ["user"]),
  },
  methods: {
    async createKweet(): Promise<void> {
      if (!this.input || this.input.trim() === "") {
        return;
      } else {
        const kweet: KweetDto = await this.$kweetService.post(
          this.user.id,
          this.input
        );
        this.$data.input = "";
        this.$store.dispatch(`kweet/${ActionTypes.ADD_KWEET}`, toKweet(kweet));
      }
    },
  },
});
</script>