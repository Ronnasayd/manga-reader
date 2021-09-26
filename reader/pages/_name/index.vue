<template>
  <div class="py-8 px-4 md:p-8 flex flex-col items-center max-w-2xl mx-auto">
    <nuxt-link
      class="
        p-4
        bg-purple-500
        text-gray-900
        rounded
        text-center
        w-full
        my-4
        font-bold
      "
      to="/"
      >Back</nuxt-link
    >
    <img :src="manga.cover" alt="" />
    <h4 class="font-bold text-gray-400">{{ manga.name }}</h4>
    <p class="my-4 text-gray-400">{{ manga.description }}</p>
    <div class="chapter-grid">
      <nuxt-link
        v-for="chapter in manga.chapters"
        :key="chapter.identifierSlug"
        :to="`/${manga.nameSlug}/${chapter.identifierSlug}`"
        class="p-2 rounded bg-purple-500 text-gray-900 shadow-md text-center"
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
export default Vue.extend({
  data() {
    return {
      database: require('@/database/db.json'),
    }
  },
  computed: {
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
</style>
