<template>
  <div class="activity-item" :data-story="story.id" @click="lauchActivity()">
    <img :src="icon.src" :alt="icon.alt" @onload="console.log( 'loaded' )">
    <h3 v-html="story.title.rendered"></h3>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ActivityItem',
  props: ['story', 'category'],
  mounted() {
    this.setActivityIcon( this.story.id )
  },
  data() {
    return {
      icon: {
        src: '',
        alt: '',
      },
    }
  },
  methods: {
    setActivityIcon( query ) {
      axios.get( `media?parent=${query}` ).then( ( res ) => {
        this.icon.src = res.data[0].media_details.sizes.thumbnail.source_url
        this.icon.alt = res.data[0].alt_text
      }).catch( 'error', e => console.warn( e ) )
    },
    lauchActivity() {
      this.$router.push(
        {
          name: 'activity',
          params: {
            id: this.story.id,
            parent: this.category,
          },
        },
      )
    },
  },
}
</script>

<style lang="scss">
.activity-item {
  display: flex;
  position: relative;
  width: calc(50% - 8px);
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  margin: 4px;
  height: 68px;
  &:hover {
    cursor: pointer;
  }
  img {
    position: absolute;
    height: 60px;
    width: auto;
    left: 10px;
  }
  h3 {
    margin-left: 80px;
    line-height: 30px;
    font-size: 18px;
  }
}
</style>
