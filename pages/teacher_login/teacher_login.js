// pages/teacher_login/teacher_login.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: { 

  },

  formSubmit(e) {
    console.log(e.detail.value)
    var data = e.detail.value

    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/auth/login', // 仅为示例，并非真实的接口地址
      data: {
        phone: data.tel,
        password: data.pass,
        type: 2
      },
      success(res) {
        console.log(res.data)
        if (res.data.code != 200) {
          wx.showModal({
            title: '温馨提示',
            content: res.data.msg,
            success: function(res) {},
            fail: function(res) {},
          })
        } else {
          wx.setStorageSync('teacherid', res.data.data)
          console.log(wx.getStorageSync('teacherid'))
          console.log(11111111)
          wx.navigateTo({
            url: '../teachers_ center/teachers_center',
          })
        }

      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  }, 

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})