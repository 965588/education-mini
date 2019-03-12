Page({
  /* 页面的初始数据*/
  data: {
    // 获取设备高度
    appHeight: '',
    temp:[],
    // 筛选导航栏数据 
    msgList: [
      { key: 1, name: '家教科目' },
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

    // 区域数据
    // 西安市区
    areaLise: [
      { id: 0, name: '不限' },
      { id: 0, name: '小学' },
      { id: 1, name: '初中' },
      { id: 2, name: '高中' },
      { id: 3, name: '语言' },
      { id: 4, name: '音乐' },
      { id: 5, name: '其他' }
    ],
    // 市区街道
    rowLise: {
      row_weiyang: { id: 0, name: ['小学数学', '小学英语', '小学语文', '幼教', '小学奥数', '学前教育', '陪读陪玩', '星际教育'] },
      row_beilin: { id: 1, name: ['初中数学', '初中英语', '初中语文', '幼教', '初中奥数', '初中教育', '陪读陪玩', '星际教育'] },
      row_xincheng: { id: 2, name: ['高中数学', '高中英语', '高中语文', '幼教', '高中奥数', '高中教育', '陪读陪玩', '星际教育'] },
      row_yanta: { id: 3, name: ['大学数学', '大学英语', '大学语文', '幼教', '大学奥数', '大学教育', '陪读陪玩', '星际教育'] },
      row_gaoxin: { id: 4, name: ['小学数学', '小学英语', '小学语文', '幼教', '小学奥数', '学前教育', '陪读陪玩', '星际教育'] },
      row_baqiao: { id: 5, name: ['灞桥1路', '灞桥2路', '灞桥3路', '灞桥4路', '灞桥5路', '灞桥6路', '灞桥7路', '灞桥8路'] }
    },

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
    price: [
      { id: 0, name: '雁塔' },
      { id: 1, name: '碑林' },
      { id: 2, name: '凤城' },
      { id: 3, name: '长安' },
      { id: 4, name: '2.0 - 2.5万' },
      { id: 5, name: '2.5 - 3.0万' },
      { id: 6, name: '3.0 - 3.5万' },
      { id: 7, name: '3.5 - 4.0万' },
      { id: 8, name: '4万以上' },
      { id: 0, name: '雁塔' },
      { id: 1, name: '碑林' },
      { id: 2, name: '凤城' },
      { id: 3, name: '长安' },
      { id: 0, name: '雁塔' },
      { id: 1, name: '碑林' },
      { id: 2, name: '凤城' },
      { id: 3, name: '长安' },
      { id: 0, name: '雁塔' },
      { id: 1, name: '碑林' },
      { id: 2, name: '凤城' },
      { id: 3, name: '长安' },
      { id: 0, name: '雁塔' },
      { id: 1, name: '碑林' },
      { id: 2, name: '凤城' },
      { id: 3, name: '长安' },
    ],

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
  onLoad: function (options) {
    var that = this
    // 获取设备高度
    var res = wx.getSystemInfoSync(); 
    this.setData({ 
      appHeight: res.windowHeight
    });

    console.log(this.data.appHeight)


/**
* 学员库接口
*  
*/
    wx.request({
      url: 'http://jiajiao.gcshop.cc/api/student/student',
      data: {},
      success(res) {
        console.log('学员库', res.data.data[0])
        that.setData({
          temp: res.data.data
        })
      }
    })








  },

  // 筛选导航栏事件
  menuClick: function (e) {
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

  // 区域列表事件
  rowClick: function (e) {
    // 限制第一个 '不限' 不能点击
    if (e.currentTarget.dataset.hi != 0) {
      // 获取wxml  data-hi="{{ index }}" 传过来的索引
      var rowNum = e.currentTarget.dataset.hi;
      // 同筛选导航栏事件，因第一个为不限不可点击， 所以减一
      var rowSrc = "rowShow[" + (rowNum - 1) + "].isShows";
      // 隐藏所有的三级菜单
      for (var m = 0; m < this.data.rowShow.length; m++) {
        var rowSrcs = "rowShow[" + m + "].isShows";
        this.setData({
          [rowSrcs]: true
        });
      };
      // 同上
      this.setData({
        rigShow: false,
        [rowSrc]: !this.data.rowShow[e.currentTarget.dataset.hi].isShows
      });
    };
  },
});