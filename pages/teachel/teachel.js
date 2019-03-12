Page({
  /* 页面的初始数据*/
  data: {
    // 获取设备高度
    appHeight: '',
    teacher:[],
    gname:'',
    subname:'',
    site:[],

    // 筛选导航栏数据
    msgList: [
      { key: 1, name: '所授科目' },
      { key: 2, name: '区域' },
      { key: 3, name: '学校' },
      { key: 4, name: '教师筛选' }
    ],
    // 判断导航栏列表是否显示
    meunShow: [
      { isShows: true }, 
      { isShows: true },
      { isShows: true },
      { isShows: true } 
    ],


    //科目
    subject:'',

    // 区域数据
    // 西安市区
    areaLise: [],
    // 市区街道
    rowLise: [],

    // 区域模块市区街道隐藏/显示
    rowShow: [
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true },
    ],

    // 区域右侧是否显示
    rigShow: true,

    // 售价
    price: [],

    // 房间型号
    roomModel: [
      { id: 0, name: '交大' },
      { id: 1, name: '西工大' },
      { id: 2, name: '二室' },
      { id: 3, name: '三室' },
      { id: 4, name: '四室' },
      { id: 5, name: '五室以上' },
      { id: 0, name: '交大' },
      { id: 1, name: '西工大' },
      { id: 2, name: '二室' },
      { id: 3, name: '三室' },
      { id: 4, name: '四室' },
      { id: 5, name: '五室以上' },
      { id: 0, name: '交大' },
      { id: 1, name: '西工大' },
      { id: 2, name: '二室' },
      { id: 3, name: '三室' },
      { id: 4, name: '四室' },
      { id: 5, name: '五室以上' },
      { id: 0, name: '交大' },
      { id: 1, name: '西工大' },
      { id: 2, name: '二室' },
      { id: 3, name: '三室' },
      { id: 4, name: '四室' },
      { id: 5, name: '五室以上' }
    ]

  },
  onShow: function (options){
    console.log(options)
  },
  onLoad: function (options) {
    
    var that = this
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/nav/subk',
      data:'',
      success: function (res) { 
       // console.log('99999999999999999999999999',res)
        console.log('111111')
      that.setData({
        areaLise: res.data.data
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
        console.log('城市接口', res.data.data);
        that.setData({
          price: res.data.data
        })
      }
    })

 



    var that = this
    // 获取设备高度
    var res = wx.getSystemInfoSync();
    this.setData({
      appHeight: res.windowHeight
    });

    console.log(this.data.appHeight)





    /**
* 教员库接口
* 
*/
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/teacher/teacher',
      data: {},
      success(res) {
        console.log('教员库', res.data.data)
        that.setData({
          teacher: res.data.data
        })
      }
    })
  },

  /**
* 搜索接口
*/

  // 筛选导航栏事件
  menuClick: function (e) {

    console.log('+++++++++++++++++++++++',e)
    // 获取通过wxml  data-hi="{{ idx }}" 传过来的索引
    var menuNum = e.currentTarget.dataset.hi;

    // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
    var menuSrc = "meunShow[" + menuNum + "].isShows";

    // 循环data中设置的meunShow
    for (var n = 0; n < this.data.meunShow.length; n++) {
      // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
      var menuSrcs = "meunShow[" + n + "].isShows";
      // 解决重复点击不能隐藏的问题
      if (n != menuNum) {
        // 初始化，每次点击时先全部隐藏，但是重复点击不会隐藏
        this.setData({
          [menuSrcs]: true
        });
      };
    };

    // 给当前点击的去反data中设置的meunShow，使之显示， 只写此处只会显示不能隐藏
    this.setData({
      [menuSrc]: !this.data.meunShow[e.currentTarget.dataset.hi].isShows
    });
  },

  // kemu表事件
  rowClick: function (e) {
    var gid = e.target.dataset.value
    var that = this

    console.log()
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/nav/grbk',
      data: {
        gid: gid
        },
      success: function (res) {
        console.log('111',res.data.data)
        that.setData({
          rowLise: res.data.data,
          subname: e.currentTarget.dataset.id,
        })
      }
    })

    var gname = this.data.gname
    var subname = this.data.subname
    // console.log(gname)
    // var key = {
    //   'subname': e.currentTarget.dataset.id,
      
    // }
    console.log(e.currentTarget.dataset.id)

    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/search/search',
      data: {
        // key:key
        subname: that.data.subname,
        gname: that.data.gname,
        site: that.data.site
      },
      success: function (res) {
        console.log('111', res)

      }
    })

  },

  getValue(e){
     console.log(e.currentTarget.dataset.id)

    this.setData({
      gname:e.currentTarget.dataset.id
    })
  },
  getValu(e){
    console.log('2222',e.currentTarget.dataset.id)
    this.setData({
      site: e.currentTarget.dataset.id
    })
  }
});