// pages/teacher/teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      nav:[
        { 'id': 1, 'title': '家教科目' },
        { 'id': 2, 'title': '授课区域' },
        { 'id': 3, 'title': '教员类型' },
        { 'id': 4, 'title': '订单搜索' },
      ],
    left1: ['小学1', '小学2', '小学3', '小学4'],
    left2: ['111', '小22学2', '小33学3', '小学4'],
    left3: ['小学1', '小学2', '小学3', '小学4'],
    left4: ['小学1', '小学2', '小学3', '小学4'],
    left:''
  },
  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  openList:function(e){
    console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.title)
    var that = this
    var id = e.currentTarget.dataset.id
    if (id == 1) {
      that.setData({
        left : that.data.left1
      })
    }else if(id == 2){
      that.setData({
        left: that.data.left2
    })
    } else if (id == 3) {
      that.setData({
        left: that.data.left3
      })
    } else if (id == 3) {
      that.setData({
        left: that.data.left3
      })
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})