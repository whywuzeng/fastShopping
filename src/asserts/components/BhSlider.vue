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
        position: relative;
        width: 750px;
        height: 430px;
    }
    .frame{
        position: relative;
        right: 0;
        left: 0;
        width: 750px;
        height: 430px;
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
    .image{
        position: relative;
        width: 750px;
        height: 430px;
    }
</style>

<script>
    var modal = weex.requireModule('modal')
    export default {
        props:['ImageList'],
        data(){
          return{}
        },
        methods:{
          onchange(event){

          }
        },
     created () {
       console.log(this.ImageList)
       // modal.toast({message: this.ImageList.length, duratoion: 1000})
     },
      watch :{
        ImageList :function (newvlues, oldvlues) {
          modal.toast({message: newvlues.length, duratoion: 1000})
        }
      }
   }
</script>
