<template>
  <div class="category">
    <header class="category__header">
      <h2>{{slug}}</h2>
      <span>By Category > {{slug}}</span>
    </header>
    <article class="category__content">
      <div class="category__desc">
        {{desc}}
      </div>
      <div class="category__activity-list">
        <ActivityItem v-for="story in stories"
          :key="story.id"
          :story="story"
          :category="slug"
        />
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
import ActivityItem from './Category/ActivityItem'

export default {
  name: 'Category',
  props: ['slug', 'cat'],
  components: { ActivityItem },
  mounted() {
    const { id } = this.cat
    this.getRelatedStories( id, data => {
      this.stories = data
      console.info( 'Stories: ', this.stories )
    })

    this.catdata = this.cat
    axios.get( `activity_cat/${id}` ).then( res => {
      this.desc = res.data.description
    })
  },
  data() {
    return {
      catdata: {},
      stories: [],
      desc: '',
    }
  },
  methods: {
    getRelatedStories( id, callback ) {
      axios.get( `activity?per_page=100&activity_cat=${id}` ).then( ( res ) => {
        callback( res.data )
      }).catch( 'error', ( e ) => { console.warn( e ) })
    },
  },
}
</script>

<style scoped lang="scss">
  .category {
    margin: 2rem;
  }
  .category__activity-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem
  }
</style>
