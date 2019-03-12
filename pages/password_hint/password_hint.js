// pages/password_hint/password_hint.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btntext: '发送验证码',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  submitForm: function (e) {

    var id = wx.getStorageSync('teacherid')

   console.log(id)
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

    if (form.tel == '') {
      wx.showModal({
        title: '提示',
        content: '手机号不正确',
        showCancel: false,
        success: function (res) { },
      })

      return false;
    }
    if (form.verify == '') {
      wx.showModal({
        title: '提示',
        content: '验证码不正确',
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
    //console.log(id)
    // wx.request({
    //   url: 'http://jiajiao.gcshop.cc/api/password/t_password',
    //   data: {
    //     id: id,
    //     password: form.pass1,
    //     password_y: form.password_r
    //   },
    //   success(res) {
    //     console.log(res)
    //     wx.showModal({
    //       title: '提示',
    //       content: res.data.msg,
    //       showCancel: false,
    //       success: function (res) { },
    //     })
    //   }
    // })
    

  },
  sendcode: function () {
    var that = this
    // if (codeV == 200){
    var coden = 60
    var codeV = setInterval(function () {
      that.setData({
        btntext: '重新获取' + (--coden) + 's'
      })
      if (coden == -1) {
        clearInterval(codeV)
        that.setData({
          btntext: '获取验证码'
        })
      }
    }, 1000)
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