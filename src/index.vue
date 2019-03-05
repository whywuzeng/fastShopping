<template>
    <div class="head3-wrapper">
        <router-view class="r-box"></router-view>
        <tab-bar @tabTo="onTabTo"></tab-bar>
    </div>
</template>

<script>
  import util from './asserts/util.js'
  import tabBar from './asserts/components/tabBar.vue'

  export default {
    methods: {
      onTabTo (_result) {
        let _key = _result.data.key || ''
        this.$router && this.$router.push('/' + _key)
      }
    },
    components: {
      'tab-bar': tabBar
    },
    created () {
      util.initIconFont()
    },
    data () {
      return {}
    }
  }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color: #333;
    }
</style>
<style scoped>
    .head3-wrapper {
        background-color: #f4f4f4;
    }
    .r-box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
