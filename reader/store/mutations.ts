import Vue from 'vue'
import * as types from './types/mutationTypes'
export default {
  [types.SET_STATE](state, { nameSlug, identifierSlug }) {
    Vue.set(state.saved, nameSlug, identifierSlug)
  },
}
