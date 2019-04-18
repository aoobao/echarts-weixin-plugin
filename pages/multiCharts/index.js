Page({
  data: {
    optList: []
  },

  onReady() {
    this.updateChart()
  },
  clickHandle() {
    this.updateChart()
  },
  updateChart() {
    let list = []
    for (let i = 0; i < 10; i++) {
      let opt = getLineOption('标题' + (i + 1))
      list.push(opt)
    }
    this.setData({
      optList: list
    })
  },
  clearHandle() {
    this.setData({
      optList: []
    })
  }
});

function getLineOption(title) {
  let arr = [0, 0, 0, 0, 0, 0, 0].map(t => {
    return ~~(Math.random() * 2000)
  })
  let option = {
    title: {
      text: title
    },
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