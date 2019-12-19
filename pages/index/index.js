//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dataList: [{
      "name": "詹姆斯",
      "no": 23
    }, {
      "name": "库里",
      "no": 30
    }, {
      "name": "科比",
      "no": 24
    }]
  },
  getDetail: function(e) {
    var index = e.currentTarget.dataset.index;
    var name = this.data.dataList[index].name;
    wx.setStorageSync('name',name),
    wx.navigateTo({
      url: '/pages/detail/detail?name=' + name
    })
  }
})