import fetch from '../../utils/fetch.js'

Page({
  data:{
    //轮播图
    swiperList:[],
    gridsList:[]
  },
  
  onLoad(){
    fetch({
      url:'/slides'
    }).then(res=>{
      this.setData({
        swiperList:res.data
      })
    })
    fetch({
      url:'/categories'
    }).then(res=>
      this.setData({
        gridsList: res.data
      })
    )
  }
})