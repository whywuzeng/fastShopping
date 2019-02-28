<template>
    <div class="warpper">
        <home-header></home-header>
        <top-channel></top-channel>
        <scroller v-bind:class="['main-list','']"  loadmoreoffset="300" @loadmore ="onloadmore" >
            <top-refresh></top-refresh>
            <div class="cell-button">
                <bh-slider :ImageList="BhBanners"></bh-slider>
            </div>
            <div class="cell" v-for="num in lists">
                <div class="panel">
                    <text class="text">{{num}}</text>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
  var modal = weex.requireModule('modal')
import Header from './asserts/components/Header.vue';
import topChannel from './asserts/components/topChannal.vue';
import refreshCom from './asserts/components/refresh.vue';
import BHSlider from './asserts/components/BhSlider.vue';
export default {
  components:{
    'home-header': Header,
    'top-channel': topChannel,
    'top-refresh': refreshCom,
    'bh-slider':BHSlider
  },
  data: function () {
    return {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      lists: [1,2,3,4,5],
      BhBanners:[],
      makers: {
        title:'品牌SS制造商直供',
        items: []
      },
      recommend: {
        head1: {
          tlt: '周一周四 · 新品发布',
          tltBg: 'http://doc.zwwill.com/yanxuan/imgs/bg-new.png',
          url: 'http://m.you.163.com/item/newItem'
        },
        goods1: [],
        head2: {
          tlt: '人气推荐 · 好物精选',
          tltBg: 'http://doc.zwwill.com/yanxuan/imgs/bg-hot.png',
          url: 'http://m.you.163.com/item/recommend'
        },
        goods2: []
      },
      goodsList:[],
      showLoading: 'hide'
    }
  },
  methods :{
    onloadmore () {
      modal.toast({message : 'loadmore' ,duration : 0.3})
    }
  },
  created () {
     this.GET("api/home/index",res =>{
       let result = res.data.result;
       this.BhBanners = result['banners'];
       this.makers = result['makers'];
       this.recommend = result['recommend'];
     })
  }
}
</script>

<style scoped>
    .title{
        padding-top:40px; padding-bottom: 40px; font-size: 48px;
    }
    .warpper{
        position: fixed;
        left: 0;
        right: 0;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
    }
    .panel {
        width: 600px;
        height: 250px;
        margin-left: 75px;
        margin-top: 35px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: #DDDDDD;
        background-color: #F5F5F5;
    }
    .text {
        font-size: 50px;
        text-align: center;
        color: #41B883;
    }
    .main-list{
        position: absolute;
        left: 0;
        right: 0;
        justify-content: space-around;
        top: 170px;
        bottom: 90px;
    }
</style>
