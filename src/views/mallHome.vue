<template>
  <div>
    <div class="center">
      <h1>mall商品列表</h1>
    </div>
    <div>
      <searchButton v-model="searchValue" @click="selectKeyWord"/>
    </div>
    <br />
    <br />
    <div>此次跳過的商品數為:{{ offset }}</div>
    <div>此次顯示的商品數為:{{ limit }}</div>
    <div>此次取得的商品總數為:{{ total }}</div>
    <el-row tpye="flex">
      <el-col
        :offset="1"
        :span="5"
        v-for="(product, i) in productList"
        :key="i"
      >
        <div class="product-content">
          <el-col :span="24">
            <img :src="product.imageUrl" style="width: 100px; height: 100px" />
          </el-col>
          <div>
            {{ product.createDate }}
          </div>
          <div>
            {{ product.productName }}
          </div>
          <div>
            {{ !product.description ? "-" : product.description }}
          </div>
          <div>
            {{ product.price }}
          </div>
        </div>
      </el-col>
    </el-row>
    <el-col :span="24">
      <pageButton v-model="searchValue" ></pageButton>
    </el-col>
  </div>
</template>

<script>
import axios from 'axios'
import searchButton from '@/components/searchButton.vue'
import pageButton from '@/components/pageButton.vue'

export default {
  data () {
    return {
      productList: '',
      total: '',
      searchValue: '',
      offset: '',
      limit: ''
    }
  },
  components: {
    searchButton,
    pageButton
  },
  async created () {
    try {
      const { data } = await (axios.get('http://localhost:8081/products'))
      this.productList = data.results
      this.total = data.total
      this.offset = data.offset
      this.limit = data.limit
      // .then(res => {
      //   const data = res.data
      //   this.data = data
      //   this.total = data.total
      //   this.offset = data.offset
      //   this.limit = data.limit
      // })
    } catch (e) {
      console.log(e)
    } finally {
      console.log(this.data)
    }
  },
  methods: {
    selectKeyWord () {
      try {
        console.log(this.searchValue, '這裡')
        axios.get('http://localhost:8081/products', {
          params:
            { search: this.searchValue }
        }).then(res => {
          this.data = res.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    totalPage: {
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
}
.col {
  width: 10%;
  left: 20px;
  height: 20px;
}
.img {
  width: 250px;
}

.el-row {
  margin-bottom: 40px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}
.product-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
  border-width: 3px;
  border-style: solid;
  border-color: #1f1f1f;
  padding: 5px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
