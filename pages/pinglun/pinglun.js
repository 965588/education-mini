// pages/pinglun/pinglun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      sid:5,
      tid:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formSubmit(e) {
    // form提交
    
    var data = e.detail.value
    
    console.log(wx.getStorageSync('userid'));
    console.log(wx.getStorageSync('teaherid'));
    //console.log('将要提交的表单信息：', data);
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/comment/comment',
      data: {
        sid: 11,
        tid: wx.getStorageSync('userid'),
        content: data.name
      },
      success(res) {
        console.log(res)

      }
    })

    wx.showToast({
      title: '提交成功！！！！',
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