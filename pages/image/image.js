// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handleChooseAlbum : function(){
    var self = this;
    //系统API，让用户在相册中选中图片，或者拍照
    wx.chooseImage({
      success: function(res) {
        //1.取出路径
        const path = res.tempFilePaths[0];
        //2.设置imagePath
        self.setData({
          imagePath:path
        })
      },
    })
  },
  handleImageLoad: function(){
    console.log("图片加载完成");
  }
})