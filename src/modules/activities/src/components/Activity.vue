<template>
  <div class="activity">
    <header class="activity__header">
      <h1 class="activity__title"></h1>
      <span></span>
      <p class="breadcrumb">{{story}}</p>
      <div class="activity__icon">
        <img src="" alt="">
      </div>
    </header>
    <div class="activity__body">
      <!-- content -->
      <!-- tabs -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'ActivityItem',
  props: ['story'],
  mounted() {
    console.log( story )
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
</style>
