// pages/student_pass/student_pass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formSubmit: function (e) {
    var id = wx.getStorageSync('userid')
    var form = e.detail.value
    if (form.pass1 != form.pass2) {
      wx.showModal({
        title: '提示',
        content: '两次新密码不一致',
        showCancel: false,
        success: function (res) { },
      })

      return false;
    }
    if (form.password_r == '') {
      wx.showModal({
        title: '提示',
        content: '原密码不能为空',
        showCancel: false,
        success: function (res) { },
      })

      return false;
    }
    if (form.pass1 == '') {
      wx.showModal({
        title: '提示',
        content: '新密码不能为空',
        showCancel: false,
        success: function (res) { },
      })

      return false;
    }
    if (form.pass2 == '') {
      wx.showModal({
        title: '提示',
        content: '确认密码不能空',
        showCancel: false,
        success: function (res) { },
      })

      return false;
    }
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/password/s_password',
      data: {
        id: id,
        password: form.pass1,
        password_y: form.password_r
      },
      success(res) {
        console.log(res)
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          showCancel: false,
          success: function (res) { },
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