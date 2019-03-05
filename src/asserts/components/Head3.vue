<template>
    <div class="head3-wrapper">
        <text class="iconfont search">&#xe65c;搜索商品，共有8888款好物</text>
    </div>
</template>

<script>
  export default {
    name: 'Head3'
  }
</script>

<style scoped>
    .iconfont{
        font-family: iconfont;
    }
    .head3-wrapper{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        height: 114px;
        border-bottom-width: 1px;
        border-bottom-color: #d9d9d9;
        background-color: #fafafa;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: nowrap;
        align-items: flex-end;
    }
    .search{
        height: 60px;
        color: #666;
        border-radius: 6px;
        margin-bottom: 8px;
        font-size: 26px;
        margin-left: 26px;
        margin-right: 26px;
        text-align: center;
        line-height: 60px;
        background-color: #ededed;
        flex: 1;
    }
</style>
