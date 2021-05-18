<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-row>
          <el-col :span="20">
            <el-input placeholder="Please input" v-model="input"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button @click="getProfiles()">Search</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-main>
            <ul
              class="infinite-list"
              v-infinite-scroll="load"
              style="overflow: auto"
            >
              <li v-for="profile in data" :key="profile.id" class="list-item">
                <FollowSuggest
                  :displayName="profile.displayName"
                  :avatar="profile.avatar"
                  :id="profile.id"
                  :status="profile.status"
                />
              </li>
            </ul>
          </el-main>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { ActionTypes } from "@/store/modules/profile/actions";
import FollowSuggest from "@/components/FollowSuggest.vue";
import SearchDto from "@/models/SearchDto";

export default defineComponent({
  name: "FindProfiles",
  data(): {
    count: number;
    loading: boolean;
    pageSize: number;
    pageNumber: number;
    noMore: boolean;
    input: string;
    data: SearchDto[];
  } {
    return {
      count: 0,
      loading: false,
      pageSize: 10,
      pageNumber: 0,
      noMore: false,
      input: "",
      data: [],
    };
  },
  components: { FollowSuggest },
  computed: {
    ...mapGetters("auth", ["profile"]),
    ...mapGetters("profile", ["profiles"]),
  },
  methods: {
    async load(): Promise<void> {
      if (this.pageNumber > 0 && !this.$data.noMore) {
        const searchDto: SearchDto[] = await this.$profileService.getByName(
          this.input,
          this.$data.pageNumber,
          10,
          this.profile.id
        );
        if (searchDto.length > 0) {
          this.$data.data = searchDto;
          this.$data.pageNumber += 1;
        } else {
          this.$data.noMore = true;
        }
      }
    },
    async getProfiles(): Promise<void> {
      this.$store.dispatch(`profile/${ActionTypes.RESET_PROFILES}`);
      this.$data.pageNumber = 0;
      const searchDto: SearchDto[] = await this.$profileService.getByName(
        this.input,
        this.$data.pageNumber,
        10,
        this.profile.id
      );
      if (searchDto.length > 0) {
        this.$data.data = searchDto;

        this.$data.pageNumber += 1;
      }
    },
  },
});
</script>

<style scoped>
.infinite-list {
  height: calc(100vh);
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
