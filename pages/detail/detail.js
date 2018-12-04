
import fetch from '../../utils/fetch.js'

Page({
  data:{
    id:-1,
    detail:{}
  },

  onLoad(e){
    console.log(e)
    this.setData({
      id : e.id
    })
    this.loadDetail()
  },

  loadDetail(){
    fetch({
      url:`/shops/${this.data.id}`
    }).then(res => {
      this.setData({
        detail:res.data
      })
    })
  },

  previewImage(e){
    console.log("图片预览",e)
  }

})