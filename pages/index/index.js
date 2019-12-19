//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    info: null
  },
  onLoad: function(){
    this.getInfo();
  },
  getInfo: function(){
    var self = this;
    wx.request({
      url: 'http://127.0.0.1:3000/',
      method: "GET",
      success: function(res){
        self.setData({
          info : res.data
        })
        console.log(res.data);
      }
    })
  }
})
