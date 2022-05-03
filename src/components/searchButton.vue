<template>
     <div>
          <input type="text" v-model="inputValue" placeholder="搜尋關鍵字"/>
          <input type="button" @click ="selectKeyWord" value="送出"/>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      inputValue: '',
      searchData: ''
    }
  },
  methods: {
    selectKeyWord () {
      try {
        axios.get('http://localhost:8081/products', {
          params:
            { search: this.inputValue }
        }
        ).then(res => {
          this.searchData = res.data
          console.log(this.searchData)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
