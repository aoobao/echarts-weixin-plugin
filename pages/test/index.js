// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: getLineOption()
  },
  changeOption() {
    let option = getLineOption()
    this.setData({
      option: option
    })
  },
  createChart(e) {
    // chart实例创建后会触发事件
    let chart = e.detail
    setTimeout(() => {
      // 模拟2秒后高亮指定的折线
      chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0
      })
    }, 2000);
  }
})

function getLineOption() {
  let arr = [0, 0, 0, 0, 0, 0, 0].map(t => {
    return ~~(Math.random() * 2000)
  })
  let re = [0, 0, 0, 0, 0, 0, 0].map(t => {
    return ~~(Math.random() * 2000)
  })
  let option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: arr,
      type: 'line'
    }, {
      data: re,
      type: 'bar'
    }]
  }
  return option
}