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
              <li
                v-for="profile in results"
                :key="profile.id"
                class="list-item"
              >
                <FollowSuggest :seach="profile" />
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
import FollowSuggest from "@/components/FollowSuggest.vue";
import SearchDto from "@/models/SearchDto";
import { ActionTypes } from "@/store/modules/search/actions";
import { Search, toSearch } from "@/store/modules/search/search";

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
    ...mapGetters("search", ["results"]),
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
          var results: Search[] = [];
          searchDto.map(function (value) {
            results.push(toSearch(value));
          });
          this.$store.dispatch(`search/${ActionTypes.ADD_SEARCH}`, results);
          this.$data.pageNumber += 1;
        } else {
          this.$data.noMore = true;
        }
      }
    },
    async getProfiles(): Promise<void> {
      this.$data.pageNumber = 0;
      const searchDto: SearchDto[] = await this.$profileService.getByName(
        this.input,
        this.$data.pageNumber,
        10,
        this.profile.id
      );
      if (searchDto.length > 0) {
        var results: Search[] = [];
        searchDto.map(function (value) {
          results.push(toSearch(value));
        });

        this.$store.dispatch(`search/${ActionTypes.SET_SEARCH}`, results);
        this.$data.data = searchDto;
        this.$data.pageNumber += 1;
      } else {
        this.$store.dispatch(`search/${ActionTypes.RESET_SEARCH}`);
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
