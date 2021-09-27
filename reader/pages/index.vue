<template>
  <div class="p-8 flex gap-4 flex-wrap justify-center min-h-screen">
    <div
      v-for="manga in filteredMangas"
      :key="manga.nameSlug"
      class="manga-item"
    >
      <nuxt-link :to="`/${manga.nameSlug}`">
        <div class="img-wrapper">
          <img class="img-cover" :src="manga.cover" alt="" />
        </div>
        <span class="font-bold text-gray-400">{{ manga.name }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Manga from '@/types/manga'

export default Vue.extend({
  async asyncData({ $axios }) {
    const response = await $axios.get(
      'https://raw.githubusercontent.com/Ronnasayd/manga-reader/main/crawler/db.json'
    )
    const database = { database: response.data }
    return database
  },
  data() {
    return {}
  },
  computed: {
    filteredMangas() {
      return (this as any).database?.mangas?.map((manga: Manga) => ({
        name: manga.name,
        nameSlug: manga.nameSlug,
        cover: manga.cover,
      }))
    },
  },
})
</script>

<style lang="postcss" scoped>
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
.manga-item {
  max-width: 225px;
}
</style>
