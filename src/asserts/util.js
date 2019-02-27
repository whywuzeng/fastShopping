let utilFunc = {
  initIconFont (){
      let module = weex.requireModule('dom')
      module.addRule('fontFace', {
        'fontFamily': 'iconfont',
        'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
      })
  }
}

export default utilFunc;
