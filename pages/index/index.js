//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    proList: [{
        name: "james",
        no: 23,
        team: "湖人队",
        salary: "4000万"
      },
      {
        name: "kobe",
        no: 24,
        team: "湖人队",
        salary: "3500万"
      },
      {
        name: "curry",
        no: 30,
        team: "勇士队",
        salary: "4300万"
      },
    ]
  },
  toDetail: function(e) {
    var index = e.currentTarget.dataset.index; //得到点击的是哪一条的index
    //把被点击的这一条的详细信息显示到详情页面
    var name = this.data.proList[index].name;
    var no = this.data.proList[index].no;
    var team = this.data.proList[index].team;
    var salary = this.data.proList[index].salary;
    wx.navigateTo({
      url: '/pages/detail/detail?name=' + name + '&no=' + no + '&team=' + team + '&salary=' + salary
    })
  }
})