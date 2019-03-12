import WxValidate from '../../utils/WxValidate.js';
// pages/education/education.js
const app = getApp()
Page({

  /** 
   * 页面的初始数据  
   */
  data: {
    bag:[],
    btntext:'发送验证码',
    // placeholder:'',
   /**
   * 年级
   */
    // discounts: '',
    // discountIndex: '',
    // Countstype: '',
    // cc_id: '',
     grade:[], 
     gradeIndex:0,
     index:'',
  /**
   * 科目
   */
    course: [],
    courseIndex: 0,
  /**
   * 授课时间
   */
    give: ['一周一次 每次一个小时', '一周二次 每次一个小时', '一周三次 每次一个小时', '一周四次 每次一个小时'],
    giveIndex: 0,
   /**
   * 授课区域
   */
    area: [],
    areaIndex: 0,
   /**
   * 收费金额
   */
    money: ['1000', '20000', '3000', '88'],
    type:['兼职', '大学生',],
    sex:'1'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
    * 4-1(先初始化表单)
    */ 
    this.initValidate();
//     var addre = 
// console.log(addre)
    var that = this
    /**
    * 获取年级信息接口
    */
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/Sundry/grade',
      data: {},

      success(res) {
        console.log('学员年级信息', res.data.data);
        var grade = [];
        for (var i = 0; i < res.data.data.length; i++) {
          console.log(res.data.data[i].name);
          grade.push(res.data.data[i].name)
        }
        console.log(grade)
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
        console.log('科目信息', res);
        var course = [];
        for (var i = 0; i < res.data.data.length; i++) {
          console.log(res.data.data[i].name);
          course.push(res.data.data[i].name)
        }
        console.log(course)
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
        name:wx.getStorageSync('address'),
      },
      success(res) {
        console.log('科目信息', res.data.data);
        var area = [];
        for (var i = 0; i < res.data.data.length; i++) {
          console.log(res.data.data[i].name);
          area.push(res.data.data[i].name)
        }
        console.log(area)
        that.setData({
          area: area
        })
      }
    })
 
   
  wx.request({
    url: 'http://jiajiao.gcshop.cc/api/student/s_detail',
    data:{
      id: wx.getStorageSync('userid')
    },
    success(res){
      console.log('11111111111',res)
      that.setData({
        bag: res.data.data,
      })
    }
  })
    
  },


  


 


    /**
    * 弹出框
    */
  /**
    * 获取年级
    */
  bindPickerr: function (e) {

    this.setData({
      index: this.data.grade[e.detail.value]
    })
  },
 /** 
    * 获取科目
    */
  bindPicker: function(e){
    this.setData({
      option: this.data.course[e.detail.value]
    })
  },

  

  item: function(e){
    this.setData({
      item: this.data.give[e.detail.value]
    })
  },
  /**
    * 获取区域
    */
  
  eame:function(e){
    console.log(11111111111111111, this.data.area[e.detail.value])
    this.setData({
      district: this.data.area[e.detail.value]
    })
    
  },
  
  money:function(e){
    this.setData({
      usa: this.data.money[e.detail.value]
    })
  },
  teacher: function (e) {
    this.setData({
      teacher: this.data.type[e.detail.value]
    })
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
    console.log(params); 
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
   radioChange(e) {
    //  var sex =  e.detail.value
    //  this.setData({
    //    sex:sex
    //  })
  },

  /**
   * 表单-提交
   */
  submitInfo(params) { 
    // form提交
    let data = params;
    console.log('将要提交的表单信息：', this.data.sex);
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/student/save',
      data: {
        id: wx.getStorageSync('userid'),
        verify: data.varify,
        name: data.name,
        sex: data.sex,
        phone: data.tel,
        grade: data.grade,
        subject: data.subject,
        cycle: data.time,
        district: data.eame,
        address: data.detail,
        teachersex: data.teachersex,
        range: data.money,
        teachertype: data.teacher,
        text: data.ask
      },
      success(res) {
        console.log(res.data.data)

      }
    })
    
    wx.showToast({
      title: '提交成功！！！！',
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
      name: {
        required: true,
        rangelength: [2, 4]
      },
      tel: {
        required: true,
        tel: true,
      },
      grade: {
        required: true,
      },
      subject: {
        required: true,
      },

      time: {
        required: true,
      },
      eame:{
        required: true,
      },
      detail:{
        required: true,
      },
      money:{
        required: true,
      },
      teacher:{
        required: true,
      },
      ask:{
        required: true,
      }

      // 配置false可关闭验证

    }
    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      name: {
        required: '请输入姓名',
        name: '请输入2~4个汉字',
      },
      tel: {
        required: '请输入11位手机号码',
        tel: '请输入正确的手机号码',
      },
      grade: {
        required: '请选择年级',
      },
      subject: {
        required: '请选择科目',
      },
      time: {
        required: '请选择授课时间'
      },
      eame:{
        required: '请选择授课区域'
      },
      detail:{
        required: '请输入详细地址'
      },
      money: {
        required: '请输入金额',
      },
      teacher: {
        required: '请选择教师类型',
      },
      ask: {
        required: '请输入教师要求',
      },
    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)
    /**
     * 也可以自定义验证规则
     */

  },
/**
 * 验证码
 */
  // bindvalue(event) { // 实时监听表单输入的值
  //   this.setData({
  //     phonecode: event.detail.value
  //   })
  // },
  sendcode: function () {
    var that =this
    // if (codeV == 200){
      var coden = 60
      var codeV = setInterval(function(){
        that.setData ({
          btntext: '重新获取' + (--coden) + 's'
        })
        if (coden == -1){
          clearInterval(codeV)
          that.setData({
            btntext:'获取验证码'
          })
        }
      }, 1000)
    // }
    // wx.request({
    //   url: 'http://jiajiao.gcshop.cc/api/index/sendcode',
    //   data: { 'phone': '15769203576' },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' // 默认值
    //   },
    //   success(res) {
    //     console.log(res)

    //   },
    //   fail: function () {
    //     console.log('出错了')
    //   }
    // })
  },

   /**
   * 学生提交接口
   */
  
  formSubmit(e) {
 

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