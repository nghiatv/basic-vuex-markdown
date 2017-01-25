// import cac goi can thiet
import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types.js'
import _ from 'lodash'
import marked from 'marked'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showMarked: true,
    content: '',
    marked: ''
  },
  getters: {
    content: state => {
    return state.content
    },
    marked: state => {
      return state.marked
    }
  },
  mutations: {
    [types.SAVE_CONTENT] (state, payload) {
      state.content = payload.content
      return state.content
    },
    [types.SAVE_MARKED] (state, payload) {
      state.marked = payload.marked
    }
  },
  actions: {
    update: ({commit ,state}, content) => {
       commit({
         type: types.SAVE_CONTENT,
         content: content
       })
         commit({
        type: types.SAVE_MARKED,
        marked: marked(content, {sanitize: true})
      })
     
    }
  }
})
