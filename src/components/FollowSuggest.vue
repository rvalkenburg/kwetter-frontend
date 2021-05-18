<template>
  <el-card class="box-card">
    <el-row>
      <div style="display: flex; align-items: center">
        <el-col :span="6">
          <el-avatar :size="60" :src="avatar"></el-avatar>
        </el-col>
        <el-col :span="12">
          <span style="display: Inline-Block">{{ displayName }} </span>
        </el-col>
        <el-col :span="6">
          <el-button @click="openProfile()">Visit profile</el-button>
        </el-col>
        <el-col :span="6">
          <div v-if="status == true">
            <el-button :v-if="status == true" @click="unFollowProfile()"
              >Unfollow</el-button
            >
          </div>
          <div v-if="status == false">
            <el-button :v-if="status == false" @click="followProfile()"
              >Follow</el-button
            >
          </div>
        </el-col>
      </div>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "FollowSuggest",
  props: {
    id: String,
    displayName: String,
    avatar: String,
    status: Boolean,
  },
  data(): { input: string } {
    return {
      input: "",
    };
  },
  computed: {
    ...mapGetters("profile", ["user"]),
    ...mapGetters("auth", ["profile"]),
  },
  methods: {
    openProfile() {
      this.$router.push({
        name: "Profile",
        params: { id: this.$props.id as any },
      });
    },
    followProfile() {
      this.$followService.follow(this.profile.id, this.id as string);
    },
    unFollowProfile() {
      this.$followService.unFollow(this.profile.id, this.id as string);
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