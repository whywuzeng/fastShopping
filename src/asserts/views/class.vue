<template>
<div class="wrapper">
    <class-head3></class-head3>
    <div class="class-list">
        <scroller offset-accuracy="300px">
            <text class="class-txt" v-for="cla in classes">{{cla}}</text>
        </scroller>
    </div>
    <scroller class="main-list" offset-accuracy="300px">
        <head3Refresh></head3Refresh>
        <image class="main-img" resize="cover"
               src="http://yanxuan.nosdn.127.net/3ebd7addcc0d101d116052a57cec2f16.png"></image>
        <div class="main-middle">
            <text class="main-class-txt">---推荐区分类---</text>
        </div>
        <div class="main-class-bottom">
            <div class="main-class-bottom-item" v-for="sub in subclasses">
                <image class="class-item-view" resize="cover" :src="sub.img"></image>
                <text class="class-item-name">{{sub.name}}</text>
            </div>
        </div>
    </scroller>
</div>
</template>

<style scoped>
    .wrapper{
    }
    .class-list{
        top: 113px;
        position: relative;
        width: 162px;
        margin-bottom: 90px;
        padding-top: 20px;
        border-right-width: 1px;
        border-right-color: #d9d9d9;
        align-items: center;
    }

    .class-txt {
        width: 80px;
        height: 30px;
        font-size: 24px;
        margin: 30px 25px;
        text-align: center;
    }
    .main-list
    {
        left: 180px;
        margin: 15px;
    }
    .main-img{
        width: 532px;
        height: 194px;
        border-radius: 6px;
        margin: 6px;
    }
    .main-middle{
        height: 50px;
        align-items: center;
        justify-content: center;
    }
    .main-class-txt{
        font-size: 22px;
        text-align: center;
    }
    .main-class-bottom{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
    }
    .main-class-bottom-item{
        width: 178px;
        height: 200px;
    }
    .class-item-view{
        width: 150px;
        margin-left: 14px;
        margin-right: 14px;
        height: 150px;
    }
    .class-item-name{
        font-size: 22px;
        text-align: center;
    }
</style>

<script>
    import Head3 from '@/asserts/components/Head3.vue'
    import head3Refresh from '@/asserts/components/refresh.vue'
    export default {
      components :{
        'class-head3':Head3,
        head3Refresh
      },
      data(){
        return {
          classes: [],
          subclasses: []
        }
      },
      created () {
        // http://cdn.zwwill.com/yanxuan/api/class/index
        this.GET('api/class/index',res => {
          if (!res.ok) {
            console.log('网络请求出错')
          }
          let result = res.data.result
          this.classes = result['classes'];
        })

        //http://cdn.zwwill.com/yanxuan/api/class/subclasses
        this.GET('api/class/subclasses', res => {
          let result = res.data.result
          this.subclasses = result['subclasses']
        })
      }
    }

</script>
