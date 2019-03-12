
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js') //引入获得地址的js文件
var qqmapsdk;
//index.js
//获取应用实例
const app = getApp()
// pages/my/my.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    imgUrls: [],
    hot:'',

    temp:[],
    
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true,

     imgThis: [
       { url:'../../img/Chinese.png',id:1},
       { url: '../../img/Mathematics.png',id: 2 },
       { url: '../../img/English.png', id: 3 },
       { url: '../../img/Physics.png', id: 4 },
       { url: '../../img/Chemistry.png', id: 5 },
       { url: '../../img/Biology.png', id: 6},
       { url: '../../img/Art.png', id: 7 },
       { url: '../../img/Play.png',id: 8 },
    ],
  },
   


  phonecallevent: function (e) {
    var phoneNumber = e.currentTarget.dataset.tel
    wx.makePhoneCall({
      phoneNumber: phoneNumber
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    //轮播图接口
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/index/slideshow',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        //console.log(JSON.stringify(res))
        that.setData({
          imgUrls: res.data
        })
      },
      fail: function () {
        console.log('出错了')
      }
    })
    /**
     * 客服热线接口
     */
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/index/phone',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
       // console.log(res)
        that.setData({
          hot: res.data.data.phone
        })
      },
      fail: function () {
        //console.log('出错了')
      }
    })

    /**
     * 入驻老师接口
     * 
     */
     wx.request({
       url: 'http://jiajiao.gcshop.cc/api/index/teachercount',
       data:{},
       header: {
         'content-type': 'application/x-www-form-urlencoded' // 默认值
       },
       success(res){
         console.log(res)
         that.setData({
           teacher: res.data.data
         })
       }
     })

    /**
   * 服务学员接口
   * 
   */
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/index/studentcount',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res)
        that.setData({
          pupil: res.data.data
        })
      }
    })

     /**
   * 优秀老师接口
   * 
   */
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/index/teacheryx',
      data:{
      
      },
      success(res) {
        console.log('优秀老师',res.data.data[1])
        that.setData({
          temp: res.data.data
        })
      }
    })
  },


  

  family_teacher: function(){
    wx.switchTab({
      url: '../education/education',
    })
  },

  teacher: function () {
    wx.switchTab({
      url: '../teachel/teachel',
    })
  },

  teacher_title: function(e){
    wx.switchTab({
      url: '../teachel/teachel',
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        var demo = new QQMapWX({
          key: 'BYGBZ-UHGKW-BU6RO-OGGHR-XDJTK-BGFGJ'
        });
        demo.reverseGeocoder({ //地址解析
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            console.log(res);
            wx.setStorageSync('address', res.result.address_component.city)
            //获得地址
            that.setData({
              address: res.result.address_component.city
            })
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
          }
        });
        that.setData({
          latitude: latitude,
          longitude: longitude,
          markers: {
            latitude: latitude,
            longitude: longitude,
          },
        })
      }
    })  
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
