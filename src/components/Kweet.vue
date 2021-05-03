<template>
  <el-card style="margin-top: 1%" class="box-card">
    <el-row>
      <div style="display: flex; align-items: center">
        <el-col :span="8">
          <el-avatar :size="60" :src="avatar"></el-avatar>
        </el-col>
        <el-col :span="18">
          <span style="display: Inline-Block">{{ displayName }} </span>
        </el-col>
      </div>
    </el-row>
    <el-divider class="divide-space" content-position="center"></el-divider>
    <el-row>
      <div class="text">
        {{ message }}
      </div>
    </el-row>
    <el-divider class="divide-space" content-position="center"></el-divider>
    <el-row>
      <el-col :span="24">
        <div style="float: right">
          <el-badge :value="likesCount" class="item">
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
import { Like } from "@/store/modules/kweet/kweet";
export default defineComponent({
  name: "Kweet",
  props: {
    id: String,
    message: String,
    displayName: String,
    avatar: String,
    likes: Array as PropType<Like[]>,
  },
  data(): { userLikedKweet: number } {
    return {
      userLikedKweet: 0,
    };
  },
  computed: {
    ...mapGetters("profile", ["user"]),
    ...mapGetters("kweet", ["kweets"]),

    alreadyLiked(): boolean {
      // if (this.likes !== undefined) {
      //   const isLiked: LikeDto = this.likes.find(
      //     (x) => x.profile.id == this.user.id
      //   ) as LikeDto;
      //   if (isLiked != null) {
      //     return true;
      //   }
      // }
      return false;
    },
    likesCount(): number {
      var defaultLikes: number = 0;
      if (this.likes !== undefined) {
        defaultLikes = this.likes.length;
      }
      defaultLikes = defaultLikes + this.$data.userLikedKweet;
      return defaultLikes;
    },
  },
  methods: {
    async pressedLikeKweet() {
      if (!this.alreadyLiked) {
        await this.$likeService.like(this.user.id, this.id);
        this.$data.userLikedKweet = 1;
      } else {
        if (this.likes !== undefined) {
          // const like: LikeDto = this.likes.find(
          //   (x) => x.profile.id == this.user.id
          // ) as LikeDto;
          // this.$likeService.unLike(like.id);
          this.$data.userLikedKweet = 0;
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