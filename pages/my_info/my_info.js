// pages/my_info/my_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp: [],
  },

  aaa: function () {
    wx.switchTab({
      url: '../education/education',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
/**
* 学员信息
*/

    var userid = wx.getStorageSync('userid')

  
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/student/s_detail',
      data: {
        id:userid,
       
      },

      success(res) {
        console.log('学员信息', res.data.data)
        that.setData({
          temp: res.data.data
        })
      }
    })

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