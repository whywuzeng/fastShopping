<template>
    <div class="swapper">
        <text class="title iconfont">{{title}}&#xe74b;</text>
        <div class="box">
            <div class="item-block"  v-for="item in items">
                <image class="item-image" resize = "cover" :src = "item.bg"></image>
                <text class="item-title text-qi">{{item.name}}</text>
                <div class="div-price">
                    <text class="item-price">{{item.price}}</text>
                    <text class="item-qi text-qi">元起</text>
                </div>
                <text class="item-state" v-if="item.state">{{item.state}}</text>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .iconfont{
        font-family: iconfont;
    }
    .swapper{
        margin-bottom: 12px;
        background-color: #fff;
    }
    .title{
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: 35px;
        color: #000;
       text-align: center;
    }
    .box{
        width: 750px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .item-block{
        height: 260px;
        width: 350px;
        margin: 5px;
        padding: 20px;
        background-color: #efefef;
    }
    .item-image{
        position: absolute;
        height: 260px;
        width: 350px;
        top:0;
        left: 0;
    }
    .text-qi{
        font-size: 25px;
        color: #000;
    }
    .item-price{
        font-size: 40px;
    }
    .div-price{
        flex-direction: row;
        margin-top: 10px;
    }
    .item-qi{
        position: relative;
        padding-top: 10px;
    }
    .item-state{
        font-size: 20px;
        color:#b8a989;
        width: 70px;
        line-height: 20px;
        margin-top: 20px;
        padding: 5px;
        border-width: 1px;
        border-color: #b8a989;
        border-radius: 4px;
        text-align: center;
    }
</style>

<script>
    export default {
      data(){
        return {
          title:"品牌制造商直供",
          items:[
            {bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-1.jpg",
              name: "新秀丽制造商",
              price: "59",
              state: "上新",
              url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001037%26page%3D1%26size%3D100"
            },
            {
              bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-2.jpg",
              name: "MUJI制造商",
              price: "12.9",
              state: "上新",
              url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001000%26page%3D1%26size%3D100"
            },
            {
              bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-3.jpg",
              name: "CK制造商",
              price: "29",
              state: "上新",
              url: "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1026000%26page%3D1%26size%3D100"
            },
            {
              bg: "http://yanxuan.nosdn.127.net/75523d4274d85825ece16370cdb1693f.jpg",
              name: "Adidas制造商",
              price: "29",
              url: "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001003%26page%3D1%26size%3D100"
            }
          ]
        }
      }
    }
</script>
