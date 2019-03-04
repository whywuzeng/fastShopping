<template>
    <div class="newgoods">
        <div class="midlle" v-if="newGoods">
            <image class="tlt-image" resize="cover"
                   src="http://doc.zwwill.com/yanxuan/imgs/bg-new.png"></image>
            <text class="head-title new">{{head1.tlt}}</text>
            <text class="look-title all-new">查看全部</text>
        </div>
        <div class="midlle" v-else-if="hotGoods">
            <image class="tlt-image" resize="cover"
                   src="http://doc.zwwill.com/yanxuan/imgs/bg-new.png"></image>
            <text class="head-title hot">{{head1.tlt}}</text>
            <text class="look-title all-hot">查看全部</text>
        </div>
        <scroller class = "box" scroll-direction = "horizontal" show-scrollbar =false>
            <div class="item-view" v-for="g in goods">
                <image class="item-img" resize ="cover" :src ="g.img"/>
                <text class="item-title">{{g.tlt}}</text>
                <text class="item-desc">{{g.info}}</text>
                <text class="item-price">￥{{g.price}}</text>
            </div>
            <div class="more" v-if="hasmore">
                <text class = "go-more">查看全部</text>
            </div>
        </scroller>
    </div>

</template>

<script>
  export default {
    name: 'Block2.vue',
    props:['newGoods','head1','hotGoods',"goods","hasmore"],
    data(){
      return {
      }
    }
  }
</script>

<style scoped>
    .newgoods{
        position: relative;
        margin: auto;
        background-color: #fff;
        padding-bottom: 6px;
    }
    .midlle{
        height: 260px;
        width: 750px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .look-title{
        margin-top: 10px;
    }
    .tlt-image{
        height: 300px;
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
    }
    .head-title{
        text-align: center;
        font-size: 34px;
        color:#8BA0B6;
    }
    .look-title{
        text-align: center;
        width: 220px;
        background-color: #D8E5F1;
        border-radius: 5px;
        padding: 10px;
        font-size: 24px;
        color: #8BA0B6;
        margin-top: 20px;
    }
    .hot{
        color:#B4A078;
    }
    .all-hot {
        color: #B4A078;
        background-color: #F4E9CB;
    }
    .box{
        width: 750px;
        height: 500px;
        flex-direction: row;
        margin-top: 50px;
    }
    .item-view{
        margin: 10px;
    }
    .item-img{
        height: 286px;
        width: 286px;
        background-color: #f4f4f4;
    }
    .item-title{
        font-size: 28px;
        color:#333;
        margin-top: 16px;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 286px;
    }
    .item-desc{
        font-size: 24px;
        width: 286px;
        margin-top: 8px;
        color:#7f7f7f;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item-price{
        font-size: 28px;
        width: 286px;
        margin-top: 16px;
        color:#b4282d;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .more{
        border-width: 6px;
        border-color: #f4f4f4;
        padding-left: 15px;
        padding-right: 15px;
        align-items: center;
        height: 286px;
        width: 286px;
        display: flex;
        justify-content: center;
        margin: 10px;
    }
    .go-more{
        font-size: 28px;
        border-color: #f4f4f4;
    }
</style>
