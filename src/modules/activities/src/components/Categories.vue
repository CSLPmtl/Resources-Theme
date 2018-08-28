<template>
  <div class="a-meta__container">
    <div class="meta" v-html="this.thing"></div>
  </div>
</template>

<script>
import axios from 'axios'
import category from './Category'

export default {
  name: 'Categories',
  components: { category },
  created() {
    this.getthedata()
  },
  data() {
    return {
      thing: {},
    }
  },
  methods: {
    getthething() {
      axios.get('teacherpage/').then(res => {
        console.log('res: ', res.data)
      })
    },
    getthedata() {
      axios.get('teacherpage/134').then(res => { // get url from some object set in the php
        console.log('res.data: ', res.data)
        this.thing = res.data.content.rendered
      })
    },
  },
}
</script>

<style scoped lang="scss">
  .a-meta__container {
    padding: 2rem;
    margin-top: 5rem;
  }
</style>
