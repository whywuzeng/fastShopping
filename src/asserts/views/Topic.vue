<template>
    <div class="wrapper">
        <topic-head></topic-head>
        <scroller class="main-list" offset-accuracy =300px @loadmore = "onloadmore" loadmoreoffset = 300>
            <topic-refresh></topic-refresh>

        </scroller>
    </div>
</template>

<script>
  import Head2 from '@/asserts/components/Head2.vue'
  import refresh from '@/asserts/components/refresh.vue'

  export default {
    name: 'Topic',
    components: {
      'topic-head': Head2,
      'topic-refresh':refresh
    },
    created () {
      this.GET('./api/topic/index',res =>{
        let result = res.data.result
        result['topics'];
      })
    },
    data(){
      return {
        topics:[]
      }
    }
  }
</script>

<style scoped>

</style>
