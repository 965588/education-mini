// pages/teacher_details/teacher_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    temp:[],
    status:''
  },

  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log('+++++++++++++++++',options)
    this.setData({
      status: options.status
    })
   var id = wx.getStorageSync('userid')
    console.log('6666666666',id) 
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/student/s_detail',
      data: {
        id: options.id,
      },
      success(res) {
        console.log('111111', res)
        that.setData({
          temp: res.data.data,
        })
        
      },
      
    })
   

    
  },
  tijiao:function(){
    // wx.showModal({
    //   title: '提示',
    //   content: '同意预约',
    //   showCancel: true,
    // })
    wx.showModal({
      title: '提示',
      content: '同意预约',
      showCancel: true,
      success: function(res) { 
        if (res.confirm) {
            wx.navigateTo({
              url: "/pages/my_order/my_order?id=id"
        })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
  
      },
      
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