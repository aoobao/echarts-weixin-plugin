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
  }
})

function getLineOption() {
  let arr = [0, 0, 0, 0, 0, 0, 0].map(t => {
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
      type: 'line',
      smooth: true
    }]
  }
  return option
}