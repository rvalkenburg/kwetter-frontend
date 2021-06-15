<template>
  <el-card style="margin-top: 1%" class="box-card">
    <el-row>
      <div style="display: flex; align-items: center">
        <el-col :span="8">
          <el-avatar :size="60" :src="kweet.profile.avatar"></el-avatar>
        </el-col>
        <el-col :span="18">
          <span style="display: Inline-Block"
            >{{ kweet.profile.displayName }}
          </span>
        </el-col>
      </div>
    </el-row>
    <el-divider class="divide-space" content-position="center"></el-divider>
    <el-row>
      <div class="text">
        {{ kweet.message }}
      </div>
    </el-row>
    <el-divider class="divide-space" content-position="center"></el-divider>
    <el-row>
      <el-col :span="8">
        {{ new Date(kweet.dateOfCreation).toLocaleString() }}
      </el-col>
      <el-col :span="16">
        <div style="float: right">
          <el-badge :value="likeCount" class="item">
            <el-button @click="pressedLikeKweet()" size="small">Like</el-button>
          </el-badge>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import { PropType } from "vue";
import { Kweet } from "@/store/modules/kweet/kweet";
import { ActionTypes } from "@/store/modules/kweet/actions";

export default defineComponent({
  name: "Kweet",
  props: {
    kweet: Object as PropType<Kweet>,
  },
  data(): { userLikedKweet: number } {
    return {
      userLikedKweet: 0,
    };
  },
  computed: {
    ...mapGetters("auth", ["profile"]),
    likeCount(): number {
      if (this.kweet?.like.count !== undefined) {
        return this.kweet?.like.count;
      }
      return 0;
    },
  },
  methods: {
    async pressedLikeKweet(): Promise<void> {
      if (this.kweet !== undefined) {
        if (this.kweet?.like.liked == false) {
          await this.$likeService.like(this.profile.id, this.kweet.id);
          const updatedKweet: Kweet = this.kweet;
          updatedKweet.like.liked = true;
          updatedKweet.like.count += 1;
          this.$store.dispatch(
            `kweet/${ActionTypes.UPDATE_KWEET}`,
            updatedKweet
          );
          return;
        } else {
          await this.$likeService.unLike(this.profile.id, this.kweet.id);
          const updatedKweet: Kweet = this.kweet;
          updatedKweet.like.liked = false;
          updatedKweet.like.count -= 1;
          this.$store.dispatch(
            `kweet/${ActionTypes.UPDATE_KWEET}`,
            updatedKweet
          );
          return;
        }
      }
    },
  },
});
</script>
<style scoped>
.text {
  display: flex;
  width: 100%;
  border: 1px solid rgb(177, 177, 177);
  min-height: 50px;
  padding: 5px;
  text-align: left;
}

.divide-space {
  margin-top: 1%;
  margin-bottom: 1%;
  color: rgb(177, 177, 177);
}
</style>