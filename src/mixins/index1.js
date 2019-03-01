export default {
  methods: {
      GET (api,callback){
        const stream = weex.requireModule('stream');
        return stream.fetch({
          method:'GET',
          type :'json',
          url :'http://cdn.zwwill.com/yanxuan/'+api
        },callback)
      }
    }
}
