<template>
   <div class="box-content">
   <div class="top-box">
      <image class="tlt-avator" resize = "cover" :src ="art.autherImg"></image>
      <text class="tlt-name">{{art.auther}}</text>
   </div>
      <div class="img-box">
         <template v-if="typeof art.img =='string'">
            <image class="box-middle" resize="cover" :src="art.img"></image>
         </template>
         <template v-else-if="typeof art.img == 'object' && art.img.length >=3 ">
            <image class="sub-img-middle" resize="cover" :src="art.img[0]"></image>
            <div class="sub-img-box">
               <image class="sub-img-top" resize="cover" :src="art.img[1]"></image>
               <image class="sub-img-bottom" resize="cover" :src="art.img[2]"></image>
            </div>
         </template>
      </div>
   <div class="box-bottom">
      <div class="box-tlt-bottom box-tlt-name-bottom">
      <text class="tlt-name-bottom tlt-bottom">{{art.tlt}}</text>
      </div>
      <div class="box-tlt-bottom box-tlt-price">
      <text class="tlt-price tlt-bottom">{{art.price}}起</text>
      </div>
      <div class="box-tlt-bottom box-tlt-info">
      <text class="tlt-info tlt-bottom">{{art.info}}</text>
      </div>
   </div>
   </div>
</template>

<script>
  export default {
    name: 'Block5',
    props :['art']
  }
</script>

<style scoped>
   .box-content{
      flex-direction: column;
   }
   .top-box{
      height: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;
   }
   .tlt-avator{
      width: 60px;
      height: 60px;
      border-radius: 30px;
   }
   .tlt-name{
      line-height: 60px;
      text-align: center;
      height: 60px;
      font-size: 24px;
      width: 160px;
   }
   .box-middle{
      height: 300px;
      width: 100%;
   }
   .box-bottom{
      height: 100px;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      flex-direction: row;
   }
   .tlt-name-bottom{
      font-size: 28px;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-left: 20px;
      line-height: 50px;
   }
   .tlt-info{
      margin-right: 10px;
      font-size: 22px;
      color: #000;
      margin-left: 20px;
   }
   .tlt-price{
      font-size: 30px;
      color: #238FFF;
      text-align: end;
      line-height: 50px;
      margin-right: 20px;
   }
   .box-tlt-bottom{
      height: 50px;
   }
   .box-tlt-name-bottom{
      flex-grow: 3;
      width: 300px;
   }
   .box-tlt-price{
      flex-grow: 1;
      width: 300px;
   }
   .box-tlt-info{
      width: 300px;
      flex-grow: 2;
   }
   .img-box{
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 300px;
   }
   .sub-img-box{
      display: flex;
      flex-direction: column;
   }
   .sub-img-top{
      height: 150px;
      width: 200px;
   }
   .sub-img-bottom{
      height: 150px;
      width: 200px;
   }
   .sub-img-middle{
      width: 550px;
      height: 300px;
   }
</style>
