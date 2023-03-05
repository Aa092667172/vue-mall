<template>
    <div>
      <img :src="imageUrl" :alt="productName" />
      <h1>{{ productName }}</h1>
      <p>{{ productDescription }}</p>
    </div>
  </template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl () {
      return require(`@/assets/${this.product.image}`)
    },
    productName () {
      return this.product.name
    },
    productDescription () {
      return this.product.description
    }
  }
}
</script>
  <style scoped>
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
