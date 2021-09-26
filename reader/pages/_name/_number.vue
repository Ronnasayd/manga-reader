<template>
  <div class="flex flex-col gap-4 max-w-3xl mx-auto py-8">
    <nuxt-link
      class="p-4 bg-purple-500 text-gray-900 rounded text-center font-bold"
      :to="`/${manga.nameSlug}`"
      >{{ manga.name }}</nuxt-link
    >
    <img
      v-for="image in chapter.images"
      :key="image.url"
      loading="lazy"
      height="400"
      :src="image.url"
      alt=""
      class="manga-image"
    />
    <nuxt-link
      v-if="!!prevChapter"
      class="p-4 bg-purple-500 text-gray-900 rounded text-center font-bold"
      :to="`${prevChapter}`"
      ><span>Anterior</span></nuxt-link
    >
    <nuxt-link
      v-if="nextChapter"
      class="p-4 bg-purple-500 text-gray-900 rounded text-center font-bold"
      :to="`${nextChapter}`"
      ><span>Proximo</span></nuxt-link
    >
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
export default Vue.extend({
  components: {},
  data() {
    return {
      database: require('@/database/db.json'),
    }
  },
  computed: {
    nameSlug() {
      return this.$route.params.name
    },
    manga() {
      const nameSlug = this.$route.params.name
      const manga = _.find((this as any).database.mangas, { nameSlug })
      return manga
    },
    chapter() {
      const identifierSlug = this.$route.params.number
      const chapter = _.find((this as any).manga.chapters, { identifierSlug })
      return chapter
    },
    prevChapter() {
      const index = _.findIndex((this as any).manga.chapters, {
        identifierSlug: (this as any).chapter.identifierSlug,
      })
      return (this as any).manga?.chapters?.[index + 1]?.identifierSlug
    },
    nextChapter() {
      const index = _.findIndex((this as any).manga.chapters, {
        identifierSlug: (this as any).chapter.identifierSlug,
      })
      return (this as any).manga?.chapters?.[index - 1]?.identifierSlug
    },
  },
})
</script>

<style lang="postcss" scoped>
.manga-image {
  min-height: 400px;
}
</style>
