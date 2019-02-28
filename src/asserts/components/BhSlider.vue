<template>
    <slider class ="slider" auto-play = "true" interval = "5000" @change="onchange" infinite ="false">
        <div class="frame" v-for="img in ImageList">
            <image class="image" resize = "cover" :src="img.src"></image>
        </div>
        <indicator class = "indicator"></indicator>
    </slider>
</template>

<style scoped>
    .slider{
        position: fixed;
        right: 0;
        left: 0;
        top: 180px;
    }
    .frame{
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        justify-content: center;
    }
    .indicator{
        width: 750px;
        height: 40px;
        item-color: white;
        item-selected-color: #b4282d;
        item-size: 12px;
        position: absolute;
        bottom: 10px;
        right: 0px;
    }
</style>

<script>
   export default {
        props:['ImageList'],
        data(){
          return{}
        },
        methods:{
          onchange(event){

          }
        }
   }
</script>
