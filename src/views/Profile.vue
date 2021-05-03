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
            infinite-scroll-disabled="disabled"
          >
            <li v-for="kweet in kweets" :key="kweet.id" class="list-item">
              <KweetCard
                :id="kweet.id"
                :message="kweet.message"
                :displayName="kweet.profile.displayName"
                :avatar="kweet.profile.avatar"
                :likes="kweet.likes"
              />
            </li>
          </ul>
        </el-main>
      </el-col>
      <el-col :span="7">
        <ProfileCard
          :description="user.description"
          :displayName="user.displayName"
          :avatar="user.avatar"
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
      loading: false,
      pageSize: 10,
      pageNumber: 0,
      noMore: false,
    };
  },
  computed: {
    ...mapGetters("profile", ["user"]),
    ...mapGetters("kweet", ["kweets"]),

    disabled(): boolean {
      return this.$data.loading || this.noMore;
    },
  },
  components: {
    CreateKweet,
    KweetCard,
    ProfileCard,
  },

  methods: {
    async load() {
      const kweetDtos: KweetDto[] = await this.$kweetService.get(
        this.$data.pageNumber,
        10,
        this.user.id
      );
      console.log(kweetDtos);
      if (kweetDtos.length > 0) {
        var kweets: Kweet[] = [];
        kweetDtos.map(function (value) {
          kweets.push(toKweet(value));
        });
        console.log(kweets);

        this.$store.dispatch(`kweet/${ActionTypes.SET_KWEETS}`, kweets);
        this.$data.pageNumber += 1;
      } else {
        this.$data.noMore = true;
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


