<template>
     <div>
        <el-col :offset="6" :span="10" >
          <el-input v-model="inputValue" placeholder="请输入内容"/>
        </el-col>
        <el-col :span="2" >
          <el-button type="button" @click ="selectKeyWord" icon="el-icon-search">搜索</el-button>
        </el-col>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      inputValue: '',
      total: ''
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
          this.total = res.data
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
