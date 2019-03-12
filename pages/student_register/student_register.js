import WxValidate from '../../utils/WxValidate.js';
// pages/student_register/student_register.js
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
    this.initValidate();
  },
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },
  submitForm(e) {

    /**
     * 4-3(表单提交校验)
     */
    const params = e.detail.value
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }
    /**
     * 这里添写验证成功以后的逻辑
     * 
     */
    //验证通过以后->
    this.submitInfo(params);
  },

  /**
   * 表单-提交
   */
  submitInfo(params) {
    // form提交
    if (params.pwd != params.pwdd) {
      wx.showModal({
        title: '提示',
        content: '两次密码不一致',
        success: function (res) { },
        fail: function (res) { },
      })

      return false
    }

    let form = params;
    console.log('将要提交的表单信息：', form);
     /**
   * 学员注册
   */
    console.log(params)
    var data = params
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/auth/sregister', 
      data: {
        phone: data.tel,
        verify: data.verify,
        password: data.pwd,
        type: null,
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) { 
        console.log(res.data)
        if (res.data.code != 200) {
          wx.showModal({
            title: '温馨提示',
            content: res.data.msg,
            success: function (res) { },
            fail: function (res) { },
          })
        }else{
          wx.showToast({
            title: '提交成功！！！！',
          })
        }
      },
      fail: function (res) { },
    })
   
  },
  /**
   * 表单-验证字段
   */
  initValidate() {

    /**
     * 4-2(配置规则)
     */
    const rules = {
      
      tel: {
        required: true,
        tel: true,
      },
      pwd: {
        required: true,
        rangelength: [6, 12]
      },
      pwdd: {
        required: true,
      },

      assistance: {
        required: true,

      },


      // 配置false可关闭验证

    }
    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      
      tel: {
        required: '请输入11位手机号码',
        tel: '请输入正确的手机号码',
      },
      pwd: {
        required: '请输入密码',
        rangelength: '请输入正确的密码'
      },
      pwdd: {
        required: '请确认密码',
      },
      assistance: {
        required: '请勾选注册即同意《用户协议》《免责声明》'
      },
    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)
    /**
     * 也可以自定义验证规则
     */

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