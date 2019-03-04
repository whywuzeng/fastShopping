<template>
    <div class="b4-content">
        <scroller class ="b4-scroller" show-scrollbar =false @loadmore = "onloadmore"  scroll-direction="horizontal" offset-accuracy=300px>
             <div class="b4-itemview" v-for="g in goods">
                 <image class="b4-image" resize = "cover" :src="g.url"></image>
                 <text class="b4-middle">{{g.desc}}</text>
             </div>
        </scroller>
    </div>
</template>

<script>
  export default {
    name: 'Block4',
    methods:{
      onloadmore(){

      }
    }
  }
</script>

<style scoped>
    .b4-content{
        position: relative;
    }
    .b4-scroller{
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .b4-itemview
    {
        border-radius: 6px;
        width: 200px;
        height: 70px;
    }
    .b4-image{
        width: 100%;
        height: 100%;
        position: absolute;
        padding: 10px;
        top: 0;
        left: 0;
    }
    .b4-middle{
        font-size: 28px;
        color: #ffffff;
        text-align: center;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

</style>
