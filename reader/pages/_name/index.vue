<template>
  <div class="py-8 px-4 md:p-8 flex flex-col items-center max-w-2xl mx-auto">
    <nuxt-link
      class="
        p-4
        bg-purple-300
        text-gray-900
        rounded
        text-center
        w-full
        my-4
        font-bold
        mx-4
      "
      to="/"
      >Voltar</nuxt-link
    >
    <div class="img-wrapper">
      <img class="img-cover" :src="manga.cover" alt="" />
    </div>

    <h4 class="font-bold text-gray-400">{{ manga.name }}</h4>
    <p class="my-4 text-gray-400">{{ manga.description }}</p>
    <div class="chapter-grid">
      <nuxt-link
        v-for="chapter in manga.chapters"
        :key="chapter.identifierSlug"
        :class="{ current: chapter.identifierSlug === lastRead }"
        :to="`/${manga.nameSlug}/${chapter.identifierSlug}`"
        class="p-2 rounded bg-purple-300 text-gray-900 shadow-md text-center"
      >
        <div>
          {{ chapter.identifier }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="<t></t>s">
import Vue from 'vue'
import * as _ from 'lodash'
import {mapState} from "vuex"
export default Vue.extend({
  async asyncData({ $axios }) {
    const response = await $axios.get(
      'https://raw.githubusercontent.com/Ronnasayd/manga-reader/main/crawler/db.json'
    )
    return { database: response.data }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      saved:state=>state.saved
    }),
    lastRead(){
      return this.saved[this.$route.params.name]
    },
    manga() {
      const nameSlug = this.$route.params.name
      return _.find(this.database.mangas,{nameSlug})
    },
  },
})
</script>

<style lang="postcss" scoped>
.chapter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
  @apply gap-4 w-full;
}
.img-wrapper {
  position: relative;
  width: 225px;
  height: 0;
  padding-top: 323px;
  @apply bg-gray-300;
}
.img-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.current {
  @apply bg-red-300;
}
</style>
