<template>
  <div class="p-8 flex gap-4 flex-wrap justify-center min-h-screen">
    <div v-for="manga in mangas" :key="manga.nameSlug">
      <nuxt-link :to="`/${manga.nameSlug}`">
        <img :src="manga.cover" alt="" />
        <span class="font-bold text-gray-400">{{ manga.name }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Manga from '@/types/manga'

export default Vue.extend({
  data() {
    return {
      database: require('@/database/db.json'),
    }
  },
  computed: {
    mangas() {
      return (this as any).database?.mangas?.map((manga: Manga) => ({
        name: manga.name,
        nameSlug: manga.nameSlug,
        cover: manga.cover,
      }))
    },
  },
})
</script>
