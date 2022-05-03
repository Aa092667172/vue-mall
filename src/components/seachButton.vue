<template>
     <div>
          <input type="text" v-model="inputValue" placeholder="搜尋關鍵字"/>
          <input type="button" @click ="selectKeyWord" value="送出"/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    selectKeyWord () {
      alert(this.inputValue)
    }
  }
}
</script>

<style scoped>

</style>
