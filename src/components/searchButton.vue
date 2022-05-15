<template>
     <div>
        <el-col :offset="6" :span="10" >
          <el-input :value="value" @input="$emit('input', $event)" placeholder="请输入内容"/>
        </el-col>
        <el-col :span="2" >
          <el-button type="button" @click ="$emit('click')" icon="el-icon-search">搜索</el-button>
        </el-col>
    </div>
</template>

<script>

export default {
  data () {
    return {
      searchValue: ''
    }
  },
  props: ['value']
}
</script>

<style scoped>

</style>
