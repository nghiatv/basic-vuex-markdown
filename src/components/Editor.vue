<template>
  <div id="editor">
  <textarea :value="content" @input="update"></textarea>
  <div v-html="marked"></div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import _ from 'lodash'
import marked from 'marked'

export default {
  computed: {
    content() {
      return this.$store.getters.content
    },
    marked() {
      return this.$store.getters.marked
    }
    },
  methods: {
   update: _.debounce(function (e){
     this.$store.dispatch('update',e.target.value)
   }, 300)
  }
}
</script>


<style lang="css">
  
</style>