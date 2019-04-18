const app = getApp();

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () {},
      fail: function () {}
    }
  },
  data: {
    charts: [{
      id: 'test',
      name: 'demo'
    }, {
      id: 'bar',
      name: '原生调用'
    }],
    chartsWithoutImg: [{
      id: 'multiCharts',
      name: '一个页面中多个图表'
    }]
  },

  onReady() {},

  open: function (e) {
    wx.navigateTo({
      url: '../' + e.target.dataset.chart.id + '/index'
    });
  }
});