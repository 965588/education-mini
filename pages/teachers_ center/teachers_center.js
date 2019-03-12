// pages/teachers_ center/teachers_center.js
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
     console.log('学员库', id)
     var that = this
     var id = wx.getStorageSync('teacherid')
 
     wx.request({
       url: 'http://jiajiao.gcshop.cc/api/teacher/t_detail',
       data: {
         id:id
       },
       success(res) {
         console.log('学员库', res.data.data)
          that.setData({
            temp: res.data.data
          })
       }
     })
   },
  subscribe: function (e){
    
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