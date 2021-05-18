<template>
  <div>
    <el-row>
      <el-col :span="7"> </el-col>
      <el-col :span="10">
        <el-header style="padding-bottom: 11%">
          <CreateKweet />
        </el-header>
        <el-main>
          <ul
            class="infinite-list"
            v-infinite-scroll="load"
            style="overflow: auto"
          >
            <li v-for="kweet in kweets" :key="kweet.id" class="list-item">
              <KweetCard :kweet="kweet" />
            </li>
          </ul>
        </el-main>
      </el-col>
      <el-col :span="7">
        <ProfileCard
          v-if="profile != null"
          :description="profile.description"
          :displayName="profile.name"
          :avatar="profile.picture"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateKweet from "@/components/CreateKweet.vue";
import { mapGetters } from "vuex";
import KweetDto from "@/models/KweetDto";
import { Kweet, toKweet } from "@/store/modules/kweet/kweet";
import { ActionTypes } from "@/store/modules/kweet/actions";
import KweetCard from "@/components/Kweet.vue";
import ProfileCard from "@/components/ProfileCard.vue";

export default defineComponent({
  name: "Timeline",
  data(): {
    count: number;
    loading: boolean;
    pageSize: number;
    pageNumber: number;
    noMore: boolean;
  } {
    return {
      count: 0,
      loading: false,
      pageSize: 10,
      pageNumber: 0,
      noMore: false,
    };
  },
  components: {
    CreateKweet,
    KweetCard,
    ProfileCard,
  },
  computed: {
    ...mapGetters("auth", ["profile"]),
    ...mapGetters("kweet", ["kweets"]),
  },

  methods: {
    async load(): Promise<void> {
      if (this.profile != null && !this.$data.noMore) {
        const kweetDtos: KweetDto[] = await this.$kweetService.getByTimeline(
          this.$data.pageNumber,
          10,
          this.profile.id
        );
        if (kweetDtos.length > 0) {
          var kweets: Kweet[] = [];
          kweetDtos.map(function (value) {
            kweets.push(toKweet(value));
          });
          this.$store.dispatch(`kweet/${ActionTypes.SET_KWEETS}`, kweets);
          this.$data.pageNumber += 1;
        } else {
          this.$data.noMore = true;
        }
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
