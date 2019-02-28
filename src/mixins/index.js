let stream = weex.registerModule('stream');
export default {
    methods :{
      GET (api,callback){
        return stream.fetch({
          method:'GET',
          type :'json',
          url :'http://cdn.zwwill.com/yanxuan/'+api,
        },callback)
      }
    }
}
