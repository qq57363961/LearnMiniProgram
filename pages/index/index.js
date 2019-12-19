//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: "pengcheng",
    students: [
      {id:110,name:"kobe",age:30},
      {id:111,name:"james",age:35},
      {id:112,name:"curry",age:32},
    ],
    n: 0
  },
  add: function(){
    //this.data.n ++;  // 区别于vue，界面不会同步刷新
    this.setData({
      n: this.data.n + 1
    })
  }
})
