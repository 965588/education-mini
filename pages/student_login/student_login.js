// pages/student_login/student_login.js
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
  formSubmit(e){
    console.log(e.detail.value)
    var data = e.detail.value
    wx.request({
      url:'http://jiajiao.gcshop.cc/api/auth/login',
      data:{
        phone:data.tel,
        password:data.pwd,
        type: 1,
      },
      success(res) {
        console.log(res.data.data)
      if(res.data.code !=200){
        wx.showModal({
          title: '温馨提示',
          content: '账号或密码不正确',
        })
      }else {
        wx.setStorageSync('userid', res.data.data)
        wx.navigateTo({
          url: '../student_center/student_center',
        })
      }
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