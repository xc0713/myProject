<template>
  <div class="wrapper">
      <div class="searchint">
        <input type="text" placeholder="搜索你感兴趣的人和物" @focus="Tosearch"/>
      </div>
      <div>
        <image src="../../static/images/banner.png" mode="widthFix"/>
      </div>
      <div class="content">
        <ul class="list">
          <li><image src="../../static/images/1.png" mode="widthFix"/><span>拼团</span></li>
          <li><image src="../../static/images/2.png" mode="widthFix"/><span>送书</span></li>
          <li><image src="../../static/images/3.png" mode="widthFix"/><span>享Go</span></li>
          <li><image src="../../static/images/4.png" mode="widthFix"/><span>故事</span></li>
          <li><image src="../../static/images/5.png" mode="widthFix"/><span>签到</span></li>
        </ul>
        <Swiper />
        <div class="classfy" >
            <ul v-for="(item,index) in navList" :key="index">
                <li @click="tabNav(index,item)" :class="{'activeclassfy' : defaultclassfy === index }">{{item}}</li>
            </ul>
        </div>
        <div class="plower">
            <span @click="tab(0)" :class="{'activeplower' : plower1 }">一口花</span>
            <span @click="tab(1)" :class="{'activeplower' : plower2 }">全新</span>
            <span @click="tab(2)" :class="{'activeplower' : plower3 }">同城</span>
        </div>
        <Shop :storeList="storeList"/>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Swiper from "@/components/swipers"
import Shop from "@/components/shop"

export default {
  components: {
   Swiper,
   Shop
  },
    computed:{
        ...mapState({
            storeList:state=>state.search.storeList
        })
    },
  data () {
   return{
       navList:['全部','品牌','时尚','美妆','母婴','书籍'],
       defaultType:'全部',
       defaultclassfy:0,
       plower1:false,
       plower2:false,
       plower3:false,
       pageNum:1,
   }
  },
  methods:{
    tabNav(index,item){
        this.defaultclassfy = index;
        this.defaultType = item;
        this.$store.dispatch('getStoreList',this.defaultType,this.plower1,this.plower2,this.plower3)
    },
    tab(index){
        if(index == 0){
          this.plower1 = !this.plower1;
          this.$store.dispatch('getStoreList',this.defaultType,this.plower1,this.plower2,this.plower3)
        }else if(index == 1){
          this.plower2 = !this.plower2;
          this.$store.dispatch('getStoreList',this.defaultType,this.plower1,this.plower2,this.plower3)
        }else if(index == 2){
          this.plower3 = !this.plower3;
          this.$store.dispatch('getStoreList',this.defaultType,this.plower1,this.plower2,this.plower3)
        }
    },
    lower(){
        console.log(1)
        this.pageNum++;
        this.$store.dispatch('getStoreList',this.defaultType,this.plower1,this.plower2,this.plower3,this.pageNum)
    },
    Tosearch(){
      wx.navigateTo({
        url: "../search/main"
      })
    }
  },
  created () {
      this.$store.dispatch('getStoreList',this.defaultType,this.plower1,this.plower2,this.plower3)
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  height:100%;
  display: flex;
  flex-direction:column;
  .banner{
    width:100%;
    position: relative;
  }
  .searchint{
    position: absolute; 
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 90%;
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background: #fff;
    box-sizing: border-box;
    font-size: 14px;
    justify-content: center;
  }
  .content{
    width: 100%;
    .list{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 0 10px;
      box-sizing: border-box;
      li{
        flex:1;
        padding: 10px;
        text-align: center;
        image{
          width: 100%;
        }
      }
    }
    .classfy{
        width:100%;
        height:50px;
        display: flex;
        align-items: center;
        position: sticky;
        top:0;
        background: #fff;
        z-index: 99;
        ul{
            width:100%;
            height:50px;
            display: flex;
            align-items: center;
            li{
                flex: 1;
                text-align: center;
                // height:50px;
                // line-height: 50px;
            }
            .activeclassfy{
                border-bottom: 2px solid blue;
                line-height: 40px;
            }
        }
    }
    .plower{
        width:100%;
        height:50px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        position: sticky;
        top:50px;
        background: #fff;
        z-index: 99;
        span{
            padding:5px 10px;
            margin:0 5px;
            text-align: center;
            border-radius: 10px;
            background: #ccc;
        }
        .activeplower{
            color:#f00;
        }
    }
    .scroll-view{
        height:5251px;
        background: yellowgreen;
    }
  }

}
</style>


