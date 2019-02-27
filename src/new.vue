<template>
    <div class="warpper">
        <home-header></home-header>
        <text class="title">this is new page</text>
    </div>
</template>

<script>
import Header from './asserts/components/Header.vue';
export default {
  components:{
    'home-header': Header
  },
  data: function () {
    return {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World'
    }
  }
}
</script>

<style scoped>
    .title{
        padding-top:40px; padding-bottom: 40px; font-size: 48px;
    }
    .warpper{
        align-items: center;width: 400px;margin-top: 120px;
    }
</style>
