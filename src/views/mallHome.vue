<template>
  <div>
    <div class="center">
      <h1>mall商品列表</h1>
    </div>
    <div>
      <searchButton v-model="searchValue" @click="selectKeyWord(1, 'search')"/>
    </div>
    <br />
    <br />
    <div class="layout">
      <div
        v-for="(item ,i) in productList"
        :key="i"
        class="outside"
      >
        <div class="content">
          <img class="imagecss" :src="item.imageUrl"/>
          <div class="text">
            <div class="title">
              {{ item.productName }}
            </div>
            <div class="content2">
              {{ item.description }}
            </div>
            <div class="price">
              $ {{ item.price }}
            </div>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="pagecss">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="5"
        :current-page.sync="current"
        @current-change="selectKeyWord($event)"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import searchButton from '@/components/searchButton.vue'

export default {
  components: {
    searchButton
  },
  data () {
    return {
      productList: '',
      total: 0,
      searchValue: '',
      offset: 0,
      limit: 0,
      current: 1
    }
  },
  methods: {
    async selectKeyWord (current, type) {
      try {
        const { data } = await axios.get('http://localhost:8080/products',
          { params: { search: this.searchValue, offset: current - 1, limit: this.limit } }
        )
        this.productList = data.results
        this.total = data.total
        this.offset = data.offset
        this.limit = data.limit
        if (type === 'search') {
          this.current = 1
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  async created () {
    try {
      const { data } = await axios.get('http://localhost:8080/products',
        { params: { offset: 0, limit: 5 } }
      )
      this.productList = data.results
      this.total = data.total
      this.offset = data.offset
      this.limit = data.limit
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
.layout {
  padding: 50px 0;
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-auto-rows: 350px;
  gap: 20px;
  justify-content: center;
}

.outside {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}

.content {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.imagecss {
  object-fit: cover;
  width: 100%;
  height: 200px;
}

.text {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 30px;
  color: rgb(53, 53, 53);
}

.content2 {
  flex: 1;
  color: rgb(105, 105, 105);
}

.price {
  color: orange;
  font-size: 20px;
}

.line {
  height: 10px;
  width: 100%;
  background: rgb(173, 203, 255);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.pagecss {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

</style>
