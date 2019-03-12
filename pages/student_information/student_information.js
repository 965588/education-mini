// pages/student_information/student_information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp:[], 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/student/s_detail',
      data: {
        id: options.id
      },
      success(res) {
         that.setData({
           temp: res.data.data
         })
      }
    })
  },
    /**
   * 老师预约学生
   */
  setDisabled:function(e){
    var teacherid = wx.getStorageSync('teacherid')
    console.log(teacherid)
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/Subscribe/sub_t_save',
      data: {
        id: teacherid,
        sid: e.currentTarget.dataset.sid
      },
      
      success(res) {
        console.log('老师预约学生', res)
          wx.showModal({
            title: '提示',
            content: '预约成功！',
            showCancel: false,
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