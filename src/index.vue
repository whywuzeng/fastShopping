<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <HelloWorld/>
    <div style = "justify-content: center">
      <text class="freeStyle">Yo</text>
    </div>
    <div class="wrapper">
      <div class = "wrapper1" @click="update">
        <image :src="logo" class="logo"></image>
        <text class="title">click me to new page</text>
      </div>
      <div class="graph">
        <div class="circle red"></div>
        <div class="circle green"></div>
        <div class="circle blue"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import util from './asserts/util.js'
var navigator = weex.requireModule('navigator')
var modal = weex.requireModule('modal')
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
  console.log('url:', weex.config.bundleUrl)
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  created (){
    util.initIconFont();
  },
  methods:{
    update: function (event) {
      navigator.push({
        url: 'http://192.168.37.155:8081/new.html',
        animated: 'true'
      },event => {
        return modal.toast({message: 'callback' + event})
      })
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
  .freeStyle{
    color: #41B883;
    font-size: 233px;
    text-align: center;
    margin-top: 100px;
  }
  .wrapper{
    justify-content: center;
    align-items: center;
  }
  .graph{
    position: relative;
    width: 700px;
    height: 700px;
  }
  .circle{
    position: absolute;
    width: 500px;
    height: 500px;
    border-width: 4px;
    border-style: solid;
    border-radius: 250px;
  }
  .red{
    top: 0;
    left: 100px;
    background-color: rgba(255,88,88,0.5);
    border-color: rgba(255,88,88,0.7);
  }
  .green{
    left: 0;
    bottom: 0;
    background-color: rgba(106,230,106,0.5);
    border-color: rgba(59,195,59,0.7);
  }
  .blue{
    right: 0;
    bottom: 0;
    background-color: rgba(106,230,106,0.5);
  }
  .wrapper1{
   align-items: center; margin-top: 120px;
  }
  .logo{
    width: 360px; height: 156px;
  }
  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }
</style>
