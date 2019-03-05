<template>
    <div class="warpper">
        <home-header></home-header>
        <top-channel></top-channel>
        <scroller v-bind:class="['main-list','']" loadmoreoffset="300" @loadmore="onloadmore">
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
            <div class="cell-button">
                <block2 :newGoods =true :head1="recommend.head1" :goods="recommend.goods1" :hasmore =true></block2>
            </div>
            <div class="cell-button">
                <block2 :hotGoods =true :head1="recommend.head2" :goods="recommend.goods2" :hasmore =true></block2>
            </div>
            <div class="cell-button">
                <block3 :goodsList ="goodsList"></block3>
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
  import Header from './asserts/components/Header.vue'
  import topChannel from './asserts/components/topChannal.vue'
  import refreshCom from './asserts/components/refresh.vue'
  import BHSlider from './asserts/components/BhSlider.vue'
  import Block1 from './asserts/components/Block1.vue'
  import Block2 from '@/asserts/components/Block2.vue'
  import Block3 from '@/asserts/components/Block3.vue'
  export default {
    components: {
      'home-header': Header,
      'top-channel': topChannel,
      'top-refresh': refreshCom,
      'bh-slider': BHSlider,
      'block1': Block1,
      'block2':Block2,
      'block3':Block3
    },
    data () {
      return {
        logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
        target: 'World',
        lists: [1, 2, 3, 4, 5],
        BhBanners: [],
        makers: {
          title: '品牌SS制造商直供',
          items: []
        },
        recommend: {
          head1: {
            tlt: '周一周四 · 新品发布',
            tltBg: 'http://doc.zwwill.com/yanxuan/imgs/bg-new.png',
            url: 'http://m.you.163.com/item/newItem'
          },
          goods1: [
            {
              tlt: '日式和风声波式电动牙刷',
              img: 'http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330',
              info: '进口刷毛，专利技术',
              price: '119'
            },
            {
              tlt: '小馒头 多色双肩包',
              img: 'http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330',
              info: '奶油色泽，小巧减龄',
              price: '79'
            },
            {
              tlt: '多功能商务双肩包',
              img: 'http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330',
              info: '17个功能分区，内置分层收纳',
              price: '334'
            },
            {
              tlt: '切尔西牛皮女靴',
              img: 'http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330',
              info: '经典牛皮切尔西，时尚帅气',
              price: '289'
            },
            {
              tlt: '清心花茶壶套装',
              img: 'http://yanxuan.nosdn.127.net/a2a0f13385d67220b29e7a1124a361e6.png?imageView&quality=85&thumbnail=330x330',
              info: '明亮通透，滤茶迅速',
              price: '119'
            },
            {
              tlt: '全棉色织磨毛四件套',
              img: 'http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330',
              info: '优雅色织，温暖磨毛',
              price: '299'
            },
            {
              tlt: '黑凤梨 20寸PC膜拉链登机箱',
              img: 'http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330',
              info: '热卖9万只，网易人手1只',
              price: '185'
            },
            {
              tlt: '日式和风敞口保温杯',
              img: 'http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330',
              info: '真空隔热，保温保冷',
              price: '32'
            }
          ],
          head2: {
            tlt: '人气推荐 · 好物精选',
            tltBg: 'http://doc.zwwill.com/yanxuan/imgs/bg-hot.png',
            url: 'http://m.you.163.com/item/recommend'
          },
          goods2: [
            {
              tlt: '牛皮复古双肩背包',
              img: 'http://yanxuan.nosdn.127.net/6fe7a267fee8eb288cc28d67d5d9f57c.png?imageView&quality=85&thumbnail=330x330',
              info: '复古全牛皮，体验品质格调',
              price: '479'
            },
            {
              tlt: '双宫茧桑蚕丝被 空调被',
              img: 'http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330',
              info: '一级桑蚕丝，吸湿透气柔软',
              price: '479'
            },
            {
              tlt: '清新两用杯',
              img: 'http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330',
              info: '办公杯优选 轻松饮茶',
              price: '52'
            },
            {
              tlt: '日式蓬软太鼓抱枕',
              img: 'http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330',
              info: '萌趣太鼓造型 软糯轻柔回弹',
              price: '29'
            },
            {
              tlt: '怀抱休闲椅组合（皮款）',
              img: 'http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330',
              info: '葛优躺神器皮款',
              price: '3999'
            },
            {
              tlt: '欧式哑光餐具套装',
              img: 'http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330',
              info: '德化白瓷，坚实耐用',
              price: '189'
            },
            {
              tlt: '可水洗抗菌防螨丝羽绒枕',
              img: 'http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330',
              info: '进口防螨布，热销50万件',
              price: '99'
            },
            {
              tlt: '两带式男/女款拖鞋',
              img: 'http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330',
              info: '鞋杯随脚型而变，舒适呵护',
              price: '69.9'
            }
          ]
        },
        goodsList: [],
        showLoading: 'hide'
      }
    },
    methods: {
      onloadmore () {
        // modal.toast({message: 'loadmore', duration: 0.3})
      }
    },
    created () {
      const self = this
      this.BhBanners = [{
        src: 'http://yanxuan.nosdn.127.net/630439320dae9f1ce3afef3c39721383.jpg',
        title: ''
      }]
      this.GET('api/home/index', res => {
        if (!res.ok) {
          modal.toast({
            message: 'NetWork Error',
            duration: 3
          })
        }
        let result = res.data.result
        self.BhBanners = result['banners']
        modal.toast({message: self.BhBanners.length, duration: 3})
        self.makers = result['makers']
        self.recommend = result['recommend']
      })
      this.GET('api/home/pullGoods', res => {
        let result = res.data.result
        this.goodsList = result['goods']
      })
    }
  }
</script>

<style>
    .title {
        padding-top: 40px;
        padding-bottom: 40px;
        font-size: 48px;
    }
    .warpper {
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

    .main-list {
        position: fixed;
        left: 0;
        right: 0;
        justify-content: flex-start;
        top: 170px;
        bottom: 90px;
        flex-direction: column;
    }

    .cell-button {
        justify-content: flex-start;
        margin-bottom: 20px;
    }

    .cell {
        position: relative;
        justify-content: flex-start;
        margin-bottom: 20px;
    }

    .item3 {
        flex-direction: row;
        justify-content: space-around;
        background-color: #fff;
        padding-top: 18px;
        padding-bottom: 18px;
    }

    .iconfont {
        font-family: iconfont;
    }

    .ig-text {
        height: 30px;
        font-size: 26px;
        color: navy;
        text-align: center;
        flex: 1;
    }
</style>
