<template>
  <div class="cat-card" @click="linkTo(category.slug)">
    <img :src="category.img.url" :srcset="category.img.srcset" :alt="category.title">
    <h3 class="cat-card__title">{{category.title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: ['category'],
  data() {
    return {}
  },
  methods: {
    linkTo( slug ) {
      console.log( 'cat: ', this.category )
      this.$router.push({ name: 'category', params: { slug, cat: this.category } })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.cat-card {
  margin: 10px;
  border-radius: 2px;
  img{ border-radius: 2px;}
  &:hover {
    cursor: pointer;
    background: #fafafa;
  }
}
.cat-card__title {
  padding: 0 15px;
  text-align: center;
}
</style>
