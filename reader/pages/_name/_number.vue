<template>
  <div class="flex flex-col gap-4 max-w-3xl mx-auto py-8">
    <nuxt-link
      class="p-4 bg-purple-300 text-gray-900 rounded text-center font-bold mx-4"
      :to="`/${manga.nameSlug}`"
      >{{ manga.name }}</nuxt-link
    >
    <nuxt-link
      v-if="!!prevChapter"
      class="p-4 bg-purple-300 text-gray-900 rounded text-center font-bold mx-4"
      :to="`${prevChapter}`"
      ><span>Anterior</span></nuxt-link
    >
    <nuxt-link
      v-if="nextChapter"
      class="p-4 bg-purple-300 text-gray-900 rounded text-center font-bold mx-4"
      :to="`${nextChapter}`"
      ><span>Proximo</span></nuxt-link
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
      class="p-4 bg-purple-300 text-gray-900 rounded text-center font-bold mx-4"
      :to="`${prevChapter}`"
      ><span>Anterior</span></nuxt-link
    >
    <nuxt-link
      v-if="nextChapter"
      class="p-4 bg-purple-300 text-gray-900 rounded text-center font-bold mx-4"
      :to="`${nextChapter}`"
      ><span>Proximo</span></nuxt-link
    >
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import { mapMutations } from 'vuex'
import * as mutationTypes from '@/store/types/mutationTypes'
export default Vue.extend({
  components: {},
  async asyncData({ $axios }) {
    const response = await $axios.get(
      'https://raw.githubusercontent.com/Ronnasayd/manga-reader/main/crawler/db.json'
    )
    return { database: response.data }
  },
  data() {
    return {}
  },
  computed: {
    nameSlug() {
      return this.$route.params.name
    },
    identifierSlug() {
      return this.$route.params.number
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
  mounted() {
    this.setState({
      nameSlug: (this as any).nameSlug,
      identifierSlug: (this as any).identifierSlug,
    })
  },
  methods: {
    ...mapMutations({
      setState: mutationTypes.SET_STATE,
    }),
  },
})
</script>

<style lang="postcss" scoped>
.manga-image {
  min-height: 400px;
}
</style>
