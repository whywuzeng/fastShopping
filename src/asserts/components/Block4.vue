<template>
    <div class="b4-content">
        <scroller class="b4-scroller" show-scrollbar=false
                  scroll-direction="horizontal" offset-accuracy=300px>
            <div class="b4-itemview" v-for="top in topics1">
                <image class="b4-image" resize="cover" :src="top.img"></image>
                <text class="b4-middle">{{top.name}}</text>
            </div>
        </scroller>
    </div>
</template>

<script>
  export default {
    name: 'Block4',
    props: ["topics1"],
    methods: {
    },
    data() {
      return {
        topics2:[
          {name:"严选look",img:"https://yanxuan.nosdn.127.net/15030393722652401.jpg"},
          {name:"严选推荐",img:"https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg"},
          {name:"丁磊私物推荐",img:"https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg"},
          {name:"挑款师推荐",img:"http://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png"}
        ]
      }
    },
    watch: {
      topics1(newV,oldV) {
        console.log(`1111111-----1111111${newV}he${oldV}`)
      }
    }
  }
</script>

<style scoped>
    .b4-content {
        height: 200px;
    }

    .b4-scroller {
        position: relative;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 200px;
    }

    .b4-itemview {
        width: 275px;
        height: 150px;
        margin: 10px;
    }

    .b4-image {
        border-radius: 6px;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .b4-middle {
        font-size: 28px;
        color: #ffffff;
        line-height: 150px;
        text-align: center;
        lines: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

</style>
