// pages/good_teacher/good_teacher.js
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
    console.log(options)

    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/teacher/t_detail',
      data: {
        id:options.id
      },
      success(res) {
        console.log('优秀老师', res)
          that.setData({
            temp: res.data.data
          })
      }
    })
  },
   /**
   * 学生预约优秀老师
   */
  setDisabled:function(e){
    
    console.log('+++++++++++++++++', e.currentTarget.dataset.tid)
    var userid = wx.getStorageSync('userid')
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/Subscribe/sub_s_save', 
      data: {
        id: userid,
        tid: e.currentTarget.dataset.tid
    },
      success(res) {
        console.log('优秀老师预约', res)
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