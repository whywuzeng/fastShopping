<template>
    <div class="head3-wrapper">
        <topic-head></topic-head>
        <scroller class="main-list" offset-accuracy="300px" @loadmore="onloadmore" loadmoreoffset="300">
            <topic-refresh></topic-refresh>
            <div class="cell-button">
                <topic-block4 :topics1="topics33"></topic-block4>
            </div>
            <div class="cell-button articles" v-for="art in articles">
                <topic-block5 :art="art"></topic-block5>
            </div>
        </scroller>
    </div>
</template>

<script>
  import Head2 from '../components/Head2.vue'
  import refresh from '../components/refresh.vue'
  import Block4 from '../components/Block4.vue'
  import Block5 from '../components/Block5.vue'

  export default {
    data () {
      return {
        topics33: [],
        articles: []
      }
    },
    name: 'Topic',
    components: {
      'topic-head': Head2,
      'topic-refresh': refresh,
      'topic-block4': Block4,
      'topic-block5':Block5
    },
    created () {
      const self = this;
      this.GET('./api/topic/index', res => {
        let result = res.data.result
        this.topics33 = result['topics']
        console.log('111111111111111' + this.topics33[0].name);
      })
      //http://cdn.zwwill.com/yanxuan/api/topic/articles
      this.GET('./api/topic/articles', res => {
        if(res.ok) {
          let result = res.data.result
          this.articles = result['articles']
          console.log('111111111111111' + this.articles);
        }
      })
    },
    watch :{
      topics33(newV,oldV){
        console.log('1111111111' + newV + '21111111' + oldV);
      }
    },
    methods :{
      onloadmore(){
        setTimeout(() =>{
            this.articles.push(...this.articles);
        },100)
      }
    }
  }
</script>

<style scoped>
    .cell-button {
        background-color: #ffffff;
        margin-bottom: 20px;
    }
    .main-list{
        position: absolute;
        width: 750px;
        bottom: 50px;
        left: 0px;
        top: 70px;
    }
    .articles{
    }
</style>
