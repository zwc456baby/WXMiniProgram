import fetch from "../../utils/fetch.js"

Page({
  data:{
    list:[],
    id:-1,
    curPage:0,
    pageSize:10,
    hasMore:true,
    isLoading:false,

    inputShowed:false,
    inputVal:""
  },

  onLoad(event){
    console.log(event.id)
    this.setData({
      id:event.id
    })
    this.loadTitle()
    this.loadList()
  },

// 触底加载事件
  onReachBottom(){
    console.log('触底加载事件')
  },



// 加载列表 
  loadList(){
    let { isLoading,id,curPage,pageSize,list } = this.data
    if (isLoading){
      console.log("is loading ...")
      return
    }
    this.setData({
      isLoading:true
    })
    const url = `/categories/${id}/shops`

    curPage++
    fetch({
      url,
      data:{
        _page:curPage,
        _limit:pageSize
      }
    }).then(res=>{
      this.setData({
        list:[...list,...res.data],
        curPage,
        hasMore:curPage < Math.ceil(res.header['X-Total-Count'] / pageSize),
        isLoading:false
      })
    }).catch(err => {
      console.log('错误信息:',err)
    })

  },

  // 动态改变title
  loadTitle(){
    fetch({
      url:`/categories/${this.data.id}`
    }).then(res => {
      wx.setNavigationBarTitle({
        title: res.data.name,
      })
    })
  }
})