// pages/my_make/my_mke.js
const app = getApp()
const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tas:[],
    taas:[],
    currentData: 0,
  }, 
  //获取当前滑块的index 
  bindchange: function (e) { 
    const that = this; 
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    /**
 * 老师我的预约接口
 *  
 */ 
var teacherid = wx.getStorageSync('teacherid')
  
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/Subscribe/sub_t_sub',
      data: {
        id: teacherid,
      },
      success(res) {
        console.log('我的预约接口', res.data.data)
        that.setData({
          taas: res.data.data
        })
      }
    })

   /**
 * 预约我的接口
 */
   wx.request({
     url: 'http://jiajiao.gcshop.cc/api/Subscribe/sub_t_subs',
     data: { id: teacherid},
     success:function(res){
       console.log('预约我的接口',res.data.data)
       that.setData({
         tas: res.data.data
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