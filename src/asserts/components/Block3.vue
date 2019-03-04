<template>
    <div class="item-content">
        <div class="title-top">
            <text class="title-txt">猜你喜欢</text>
        </div>
        <div class="item-view" v-for="good in goodsList">
            <image class="img" resize = "cover" :src = "good.img"></image>
            <text class="item-tlt">{{good.info}}</text>
            <div class="bottompage">
            <text class="item-desc">{{good.tlt}}</text>
            <text class="item-price">￥{{good.price}}</text>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Block3',
    props:["goodsList"]
  }
</script>

<style scoped>
    .title-top{
        height: 100px;
        width: 100%;
        background-color: #FFF;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .title-txt{
        text-align: center;
        line-height: 60px;
    }
    .item-content{
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #fff;
    }
    .item-view{
        margin: 5px;
        flex-direction: column;
        background-color: #f4f4f4;
    }
    .img{
        width: 350px;
        height:300px;
    }
    .item-tlt{
        margin-top: 10px;
        margin-bottom: 10px;
        color: #9F8A60;
        background-color: #F1ECE2;
        font-size: 24px;
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        line:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item-desc{
        font-size: 24px;
        width: 286px;
        margin-top: 5px;
        color:#000;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item-price{
        font-size: 28px;
        width: 286px;
        margin-top: 10px;
        color:#b4282d;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .bottompage{
        background-color: #FFF;
    }
</style>
