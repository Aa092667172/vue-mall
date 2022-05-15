<template>
    <div>
        <el-pagination class="center"
        background
        layout="prev, pager, next"
        :total="10" >
        </el-pagination>
    </div>
</template>

<script>

export default {
  data () {
    return {
      total: ''
    }
  }
}
</script>

<style scoped>

  .center {
    text-align:center;
  }

</style>
