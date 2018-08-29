<template>
  <div class="a-meta__container">
    <h1 class="a-meta__title" v-html="this.introTitle"></h1>
    <div class="meta" v-html="this.introText"></div>
    <div class="a-meta__cat-container">
      <category
        v-for="category in catData"
        :category="category"
        :key="category.id"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import category from './Categories/Category'

// fetch data set in the html by th epage template
const { pageID, categories } = window.abraActivities

export default {
  name: 'Categories',
  components: { category },
  created() {
    this.fetchIntroText()
  },
  data() {
    return {
      introTitle: '',
      introText: '',
      catData: categories,
    }
  },
  methods: {
    fetchIntroText() {
      // get url from some object set in the php
      axios.get( `teacherpage/${pageID}` ).then( res => {
        this.introTitle = res.data.title.rendered
        this.introText = res.data.content.rendered
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
  .a-meta__cat-container {
    display: flex;
  }
</style>
