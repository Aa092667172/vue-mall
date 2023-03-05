
<template>
  <div class="detail" scoped>
    <el-page-header @back="goBack" content="商品首頁">
    </el-page-header>
    <div class="demo-image">
      <div class="block">
        <span class="demonstration"></span>
        <div class="image-wrapper">
          <el-image ref
            style="width: 250px; height: 250px"
            :src="url"
            :fit="fit"></el-image>
        </div>
      </div>
    </div>
    <div class="content">
      <el-descriptions title="商品明細">
      <el-descriptions-item label="商品名稱">{{data.productName}}</el-descriptions-item>
      <el-descriptions-item label="商品種類">
        <el-tag size="small" v-if="data.category in tags">{{ tags[data.category] }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="商品建立時間">{{data.createDate}}</el-descriptions-item>
      <el-descriptions-item label="商品金額">{{data.price}}</el-descriptions-item>
      <el-descriptions-item label="商品描述" v-if="data.description ==''|| data.description==null">暫無描述</el-descriptions-item>
      <el-descriptions-item label="商品描述" v-else >{{ data.description }}</el-descriptions-item>
      <el-descriptions-item label="商品數量">{{data.stock}}</el-descriptions-item>

      </el-descriptions>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  methods: {
    goBack () {
      this.$router.push('/mall')
    }
  },
  data () {
    return {
      url: this.$route.query.url,
      data: '',
      tags: {
        CAR: '汽車',
        FOOD: '水果',
        BOOK: '書'
      }
    }
  },
  async created () {
    try {
      // 取最後一段ID
      const { data } = await axios.get('http://localhost:8080/products/' + this.$route.params.id
      )
      this.data = data
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}

</script>

<style scoped>
.detail .content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 50vh;
}
.detail .demo-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
.detail .image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

</style>
