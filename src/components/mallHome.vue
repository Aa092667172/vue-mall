<template>
    <div>
        <h1>
         mall商品列表
        </h1>
        <div>
          <input type="text" v-model="inputValue" placeholder="搜尋關鍵字"/>
          <input type="button" v-on:click ="selectKeyWord()" value="送出"/>
        </div>
        <div>
          此次跳過的商品數為:{{data.offset}}
        </div>
         <div>
          此次顯示的商品數為:{{data.limit}}
        </div>
        <div>
          此次取得的商品總數為:{{data.total}}
        </div>
        <div class="table-responsive-md">
          <table class="rwd-table">
              <thead>
                <tr>
                  <th scope="col">序號</th>
                  <th scope="col">商品編號</th>
                  <th scope="col">商品名稱</th>
                  <th scope="col">商品種類</th>
                  <!-- <th scope="col">商品圖片</th> -->
                  <th scope="col">商品價錢</th>
                  <th scope="col">商品庫存</th>
                  <th scope="col">商品描述</th>
                  <th scope="col">上架時間</th>
                </tr>
              </thead>
              <tbody  v-for="(product, i) in data.results"
              :key="i">
                <tr>
                    <td data-th="序號" scope="row">{{i+1}}</td>
                    <td data-th="商品編號">{{product.productId}}</td>
                    <td data-th="商品名稱">{{product.productName}}</td>
                    <td data-th="商品種類">{{product.category}}</td>
                    <!-- <td><img src="http://i2.kknews.cc/Iu51GEHA6amYfSPA9vHea0cSMD6QXYUIvCf6FAuV8go/0.jpg"/></td> -->
                    <td data-th="商品價錢">{{product.price}}</td>
                    <td data-th="商品庫存">{{product.stock}}</td>
                    <td data-th="商品描述">{{!product.description?'-':product.description}}</td>
                    <td data-th="上架時間">{{product.createDate}}</td>
                </tr>
              </tbody>
          </table>
         </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      data: '',
      inputValue: ''
    }
  },
  async created () {
    try {
      this.data = await (await axios.get('/products')).data
    } catch (e) {
    } finally {
      console.log(this.data)
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
