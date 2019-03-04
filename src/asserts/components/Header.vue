<template>
    <div class ="wrapper1">
        <div class="scan">
            <text class="ic_iconfont">&#xe689;</text>
            <text class="txt">扫一扫</text>
        </div>
        <text class="search iconfont" @click="jumpWeb()">&#xe65c; 搜索商品，共8888款好物</text>
        <div class="notice">
            <text class="ic_iconfont">&#xe70a;</text>
            <text class="txt">消息</text>
        </div>
    </div>
</template>

<style>
    .ic_iconfont{
        font-family: iconfont;
    }
    .wrapper1{
        position: fixed;
        top: 0;
        left: 0;right: 0;
        height: 114px;
        padding-top: 44px;
        background-color: #fafafa;
        justify-content: space-around;
        display:flex;
        flex-wrap: nowrap;
        flex-direction: row;
        z-index: 101;
        opacity: .99;
    }
    .w-ipx{
        height: 154px;
        padding-top: 84px;
    }
    .scan,.notice{
        height: 80px;
        width: 96px
    }
    .ic_iconfont,.txt,.search{
        text-align: center;
        color:#666;
        font-weight: 300;
    }
    .ic_iconfont{
        font-size: 32px;
    }
    .txt{
        font-size: 18px;
    }
    .search{
        flex: 1;
        height: 60px;
        font-size: 26px;
        padding-top: 13px;
        background-color: #ededed;
        border-radius: 8px;
    }
</style>

<script>
    import util from '../util.js'
  export default {
    data () {
      return {}
    },
    created () {
      util.initIconFont();
    },
    methods :{
      jumpWeb (_url) {
        console.log("1111"+_url);
      }
    }
  }
</script>
