// pages/scrollview/scrollview.js
Page({
  data: {

  },
  handleScroll(event){
    console.log("正在滚动",event);
  },
  handleToUpper(){
    console.log("已经滚动到最顶部了！！");
  },
  handleToLower(){
    console.log("已经滚动到最底部了！！");
  }
})