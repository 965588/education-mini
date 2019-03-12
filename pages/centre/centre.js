// pages/centre/centre.js
Page({

  /**
   * 页面的初始数据 
   */
  data: { 
    line:[],
    grade: [],
    gradeIndex: 0,

    course: [],
    courseIndex: 0,

    give: ['一周一次 每次一个小时', '一周二次 每次一个小时', '一周三次 每次一个小时', '一周四次 每次一个小时'],
    giveIndex: 0,

    area: [],
    areaIndex: 0,

    mode: ['上门授课', '20000', '3000', '88'], 
  },

  class:function(e){
    console.log(e)
       this.setData({
         class: this.data.grade[e.detail.value]
       })
  },
  subjects:function(e){
      this.setData({
        coures: this.data.course[e.detail.value]
      })
  },
  time:function(e){
    this.setData({
       time:this.data.give[e.detail.value]
    })
  },
  site:function(e){
     this.setData({
       site: this.data.area[e.detail.value]
     })
  },
  vay:function(e){
     this.setData({
       vay: this.data.mode[e.detail.value]
     })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    /**
    * 获取年级信息接口
    */
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/Sundry/grade',
      data: {},

      success(res) {
        //console.log('学员年级信息', res.data.data);
        var grade = [];
        for (var i = 0; i < res.data.data.length; i++) {
          //console.log(res.data.data[i].name);
          grade.push(res.data.data[i].name)
        }
        //console.log(grade)
        that.setData({
          grade: grade
        })
      }
    })

    /**
 * 获取科目接口
 */
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/Sundry/subject',
      data: {},

      success(res) {
        //console.log('科目信息', res.data.data);
        var course = [];
        for (var i = 0; i < res.data.data.length; i++) {
          //console.log(res.data.data[i].name);
          course.push(res.data.data[i].name)
        }
        //console.log(course)
        that.setData({
          course: course
        })
      }
    })

    /**
    * 当前城市接口
    */
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/Sundry/area',
      data: {
        name: wx.getStorageSync('address'),
      },
      success(res) {
        //console.log('科目信息', res.data.data);
        var area = [];
        for (var i = 0; i < res.data.data.length; i++) {
          //console.log(res.data.data[i].name);
          area.push(res.data.data[i].name)
        }
        //console.log(area)
        that.setData({
          area: area
        })
      } 
    })

  /**
    * 获取数据
    */
    var teacherid = wx.getStorageSync('teacherid');
   // console.log(teacherid)
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/teacher/t_detail',
      data: {
        id: teacherid,

      },
      success(res) {
        console.log('老师信息', res.data.data)
        that.setData({
          line: res.data.data
        })
      }
    })


  },

  formSubmit:function(e){
    var data = e.detail.value;
    
    console.log('+++++++++++++99999999999999999999999',data)
   
    if (e.detail.value.name == '' ){
      wx.showModal({
          text:'提示',
          content: '姓名不能为空',
       })
      return false;
    }
    if (e.detail.value.option == ''){
      wx.showModal({
      text: '提示',
      content:'手机号不正确',
      })
      return false;
    }
    if (e.detail.value.class == '') {
      wx.showModal({
        text: '提示',
        content: '请选择年级',
      })
      return false;
    }
    if (e.detail.value.coures == ''){
      wx.showModal({
        text: '提示 ',
        content: '请选择科目',
      })
      return false;
    }
    if (e.detail.value.time == '') {
      wx.showModal({
        text: '提示 ',
        content: '请选择授课时间',
      })
      return false;
    }
    if (e.detail.value.site == '') {
      wx.showModal({
        text: '提示 ',
        content: '请选择授课地点',
      })
      return false;
    }
    if (e.detail.value.vay == '') {
      wx.showModal({
        text: '提示 ',
        content: '请选择授课方式',
      })
      return false;
    }
    if (e.detail.value.charge == '') {
      wx.showModal({
        text: '提示 ',
        content: '请输入授课费用',
      })
      return false;
    }
    if (e.detail.value.address == '') {
      wx.showModal({
        text: '提示 ',
        content: '请输入授课费用',
      })
      return false;
    }

    console.log(wx.getStorageSync('teacherid'))
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/teacher/save',
      data: {
        id: wx.getStorageSync('teacherid'),
        verify: data.varify,
        name: data.name,
        sex: data.sex,
        phone: data.tel,
        graduation:data.graduation,
        grade: data.grade,
        subject: data.coures,
        cycle: data.time,
        charge:data.charge,
        district: data.site,
        fmode: data.vay,
        address: data.address,
        selfdescription: data.selfdescription,
      },
      success(res) {
        console.log(res)
        wx.showToast({
          title: '提交成功！！！！',
        })
      }
     })
   
  },


 /**
   * 图片接口
   */
  // images: function() {
  //   wx.chooseImage({
  //     count: 1,
  //     sizeType: ['original', 'compressed'],
  //     sourceType: ['album', 'camera'],
  //     success(res) {
  //       // tempFilePath可以作为img标签的src属性显示图片
  //       const tempFilePaths = res.tempFilePaths
  //     }
  //   })
  // },

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