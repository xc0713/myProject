<template>
    <div class="wrapper">
        <div class="searchint">
            <input type="text" placeholder="请输入关键词" @input="ModuleSearch">
            <span>取消</span>
        </div>
        <div v-for="(item,index) in ModuleList" :key="index">
            <p @click="ShopClass(item)">{{item}}</p>
        </div>
        <div class="hotsearch">
            <p class="hottitle">热门搜索</p>
            <ul class="hotcontent">
                <li v-for="(item,index) in HotSearch" :key="index">{{item.recommendText}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  computed: {
    ...mapState({
      HotSearch: state => state.search.HotSearch,
      ModuleList: state => state.search.ModuleList,
      SearchList: state => state.search.SearchList
    })
  },
  data() {
    return {};
  },
  methods: {
    ModuleSearch(e) {
      //   console.log(e.mp.detail.value);
      let valIpt = e.mp.detail.value;
      this.$store.dispatch("getModule", valIpt);
      
    },
    ShopClass(item) {
      console.log(item);
      this.$store.dispatch("getSearchList", item);
      //   wx.setStorageSync("History", "item");
      wx.navigateTo({
        url: "../result/main",
        // success: function(res) {
        //   console.log(res);
        // }
      });
    }
  },
  created() {
    this.$store.dispatch("getSearch");
    // console.log(2555)
    // wx.setStorageSync("History", "item");
    // wx.getStorageSync('History')
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .searchint {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 16px;
    justify-content: center;
    justify-content: space-between;
    input {
      height: 35px;
      border-radius: 50px;
      border: 1px solid #ccc;
      flex: 1;
      padding-left: 10px;
      margin-right: 10px;
    }
  }
  .hotsearch {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    .hottitle {
      width: 100%;
      height: 50px;
      line-height: 50px;
    }
    .hotcontent {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 5px 10px;
        margin: 5px;
        text-align: center;
        border-radius: 10px;
        background: #ccc;
      }
    }
  }
}
</style>
