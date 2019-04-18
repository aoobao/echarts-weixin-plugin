// base-canvas/base-canvas.js
import * as echarts from '../ec-canvas/echarts';
let idIndex = 0
const BASE_ID = '__base_canvas_'


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    option: {
      type: Object,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    id: null,
    ec: null
  },
  observers: {
    option(opt) {
      if (this.chart) {
        this.chart.setOption(opt)
      }
    }
  },
  created() {
    // console.log('created')
    idIndex++
  },

  ready() {
    // console.log('ready')
    let self = this
    this.setData({
      id: BASE_ID + idIndex,
      ec: {
        onInit: initChart.bind(self)
      }
    })
  },
  detached() {
    // console.log('detached')
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getChart(){
      return this.chart || null
    }
    // 后面考虑输出 saveImage,touchStart 等
  }
})

function initChart(canvas, width, height) {
  // console.log(this, canvas, width, height)
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });

  this.chart = chart

  canvas.setChart(chart);
  if (typeof this.data.option === 'object' && this.data.option !== null) {
    chart.setOption(this.data.option)
  }

  return chart
}