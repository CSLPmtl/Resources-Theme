<template>
  <div id="app" class="entry-content abra-activities-module">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    if ( window.location.hash ) {
      const hash = window.location.hash.substring( 1 )
      const catstring = hash.split( '/' )
      console.log( 'hash.split ', hash.split( '/' ) )

      if ( hash.split( '/' ).length === 2 ) {
        const cat = window.abraActivities.categories.find( elem => elem.slug === catstring[1] )
        this.$router.push({ name: 'category', params: { slug: catstring[1], cat } })
      }
      if ( hash.split( '/' ).length === 3 ) {
        this.$router.push({ name: 'activity', params: { parent: catstring[1], id: catstring[2] } })
      } else {
        this.$router.replace( '/' )
      }
    }
  },
}
</script>

<style scoped>
  .entry-content {
    margin-top: 6rem;
  }
</style>
