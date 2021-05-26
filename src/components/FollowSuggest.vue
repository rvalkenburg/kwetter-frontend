<template>
  <el-card class="box-card">
    <el-row>
      <div style="display: flex; align-items: center">
        <el-col :span="6">
          <el-avatar :size="60" :src="seach.avatar"></el-avatar>
        </el-col>
        <el-col :span="12">
          <span style="display: Inline-Block">{{ seach.displayName }} </span>
        </el-col>
        <el-col :span="6">
          <el-button @click="openProfile()">Visit profile</el-button>
        </el-col>
        <el-col :span="6">
          <div v-if="seach.status == true">
            <el-button :v-if="seach.status == true" @click="unFollowProfile()"
              >Unfollow</el-button
            >
          </div>
          <div v-if="seach.status == false">
            <el-button :v-if="seach.status == false" @click="followProfile()"
              >Follow</el-button
            >
          </div>
        </el-col>
      </div>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { ActionTypes } from "@/store/modules/search/actions";
import { Search } from "@/store/modules/search/search";
import { defineComponent, PropType } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "FollowSuggest",
  props: {
    seach: Object as PropType<Search>,
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
        params: { id: this.$props.seach?.id as any },
      });
    },
    followProfile() {
      this.$followService.follow(
        this.profile.id,
        this.$props.seach?.id as string
      );
      const updatedSearch: Search = this.seach as Search;
      updatedSearch.status = true;
      this.$store.dispatch(
        `search/${ActionTypes.UPDATE_SEARCH}`,
        updatedSearch
      );
    },
    unFollowProfile() {
      this.$followService.unFollow(
        this.profile.id,
        this.$props.seach?.id as string
      );
      const updatedSearch: Search = this.seach as Search;
      updatedSearch.status = false;
      this.$store.dispatch(
        `search/${ActionTypes.UPDATE_SEARCH}`,
        updatedSearch
      );
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