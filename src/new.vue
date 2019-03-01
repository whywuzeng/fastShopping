<template>
    <div class="warpper">
        <home-header></home-header>
        <top-channel></top-channel>
        <scroller v-bind:class="['main-list','']"  loadmoreoffset="300" @loadmore ="onloadmore" >
            <top-refresh></top-refresh>
            <div class="cell-button">
                <bh-slider :ImageList="BhBanners"></bh-slider>
                <div class="item3">
                    <text class="ig-text iconfont">&#xe63a; 网易自营品牌</text>
                    <text class="ig-text iconfont">&#xe63a; 30天无忧退货</text>
                    <text class="ig-text iconfont">&#xe63a; 48小时快速退款</text>
                </div>
            </div>
            <div class="cell-button">
                <block1></block1>
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
import Block1 from './asserts/components/Block1.vue'
  export default {
  components:{
    'home-header': Header,
    'top-channel': topChannel,
    'top-refresh': refreshCom,
    'bh-slider':BHSlider,
    'block1' :Block1
  },
  data () {
    return {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      lists: [1,2,3,4,5],
      BhBanners: [

      ],
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
      goodsList: [],
      showLoading: 'hide'
    }
  },
  methods :{
    onloadmore () {
      modal.toast({message : 'loadmore' ,duration : 0.3})
    }
  },
  created () {
    const self = this;
    this.BhBanners = [{
      src: "http://yanxuan.nosdn.127.net/630439320dae9f1ce3afef3c39721383.jpg",
      title: ''
    }];
    modal.toast({message : "created" ,duration : 3})
    this.GET("api/home/index",res => {
      if (!res.ok) {
        modal.toast({
          message:"NetWork Error",
          duration:3
        })
      }
      let result = res.data.result;
      self.BhBanners = result['banners'];
      modal.toast({message : self.BhBanners.length ,duration : 1000})
      self.makers = result['makers']
      self.recommend = result['recommend'];
    });
    this.GET('api/home/pullGoods', res => {
      let result = res.data.result;
      this.goodsList = result['goods'];
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
        background-color: #f4f4f4;
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
        position: fixed;
        left: 0;
        right: 0;
        justify-content: flex-start;
        top: 170px;
        bottom: 90px;
        flex-direction: column;
    }
    .cell-button {
        position: relative;
        justify-content: flex-start;
        margin-bottom: 20px;
    }
    .cell{
        position: relative;
        left: 0;
        right: 0;
        justify-content: space-around;
    }
    .item3{
        flex-direction: row;
        justify-content: space-around;
        background-color: #fff;
        padding-top: 18px;
        padding-bottom: 18px;
    }
    .iconfont{
        font-family: iconfont;
    }
    .ig-text{
        height: 30px;
        font-size: 26px;
        color: navy;
        text-align: center;
        flex: 1;
    }
</style>
