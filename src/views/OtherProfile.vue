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
          :description="user.description"
          :displayName="user.name"
          :avatar="user.picture"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateKweet from "@/components/CreateKweet.vue";
import KweetCard from "@/components/Kweet.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import KweetDto from "@/models/KweetDto";
import { mapGetters } from "vuex";
import { ActionTypes } from "@/store/modules/kweet/actions";
import { Kweet, toKweet } from "@/store/modules/kweet/kweet";

export default defineComponent({
  name: "Profile",
  data(): {
    count: number;
    loading: boolean;
    pageSize: number;
    pageNumber: number;
    noMore: boolean;
  } {
    return {
      count: 0,
      loading: true,
      pageSize: 10,
      pageNumber: 0,
      noMore: false,
    };
  },
  computed: {
    ...mapGetters("profile", ["user"]),
    ...mapGetters("kweet", ["kweets"]),
  },
  components: {
    CreateKweet,
    KweetCard,
    ProfileCard,
  },
  methods: {
    async load(): Promise<void> {
      if (this.user != null && !this.$data.noMore) {
        const kweetDtos: KweetDto[] = await this.$kweetService.getByProfile(
          this.$data.pageNumber,
          10,
          this.user.id
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