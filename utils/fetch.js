const BASE_URL = 'https://locally.uieee.com'

export default function fetch(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      // 接口地址
      url: BASE_URL + options.url,
      // 参数
      data: options.data || {},
      // 请求类型
      method: options.method || 'GET',
      // 返回数据格式
      dataType: 'json',
      // 成功的回调函数
      success: resolve,
      // 失败的回调函数
      fail: reject
    })
  })
}
