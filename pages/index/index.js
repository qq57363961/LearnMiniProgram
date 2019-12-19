//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dataList: null
  },
  onLoad: function(){
    this.getDataList();
  },
  getDataList: function(){
    var self = this;
    wx.request({
      url: app.globalData.host,
      method: "GET",
      success: function(res){
        self.setData({
          dataList: res.data
        })
      }
    })
  }
})
