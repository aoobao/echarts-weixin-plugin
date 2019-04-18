# 微信小程序二次封装组件
本项目为[echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin)的二次封装

主要目的是为了简化调用实现echarts大部分功能.(用户只需要传入option配置项即可实现原项目的大部分功能)

## 引入组件
目录下`ec-canvas`为原项目组件,`base-canvas`为二次封装组件,将两个文件夹拷贝到自己项目中,参考`pages/test`.下面简单说明要点.

## 创建图表
首先，在 `pages/test` 目录下新建以下几个文件：`index.js`、 `index.json`、 `index.wxml`、 `index.wxss`。并且在 `app.json` 的 `pages` 中增加 `'pages/test/index'`。

`index.json` 配置如下：

```json
{
  "usingComponents": {
    "base-canvas": "../../base-canvas/base-canvas"
  }
}
```

`index.wxss` 配置如下:
```xml
.chart-container{
  width: 100vw;
  height: 500rpx;
  margin-bottom: 30rpx;
}
base-canvas{
  width: 100%;
  height: 100%;
}
```

这一配置的作用是，允许我们在 `pages/test/index.wxml` 中使用 `<base-canvas>` 组件。注意路径的相对位置要写对，如果目录结构和本例相同，就应该像上面这样配置。

`index.wxml` 中，我们创建了一个 `<base-canvas>` 组件，内容如下：

```xml
<view class="chart-container">
 <base-canvas option="{{ option }}"></base-canvas> 
</view>
```
> 注意事项:此处的 `.chart-container`，和`base-canvas` 必须要设置基础高度,具体请参考index.wxss.
> 当option发生改变的时候,请将option整个替换.

其中 `option` 是ECharts官方的配置项,这对于所有 ECharts 图表都是通用的，用户只需要修改上面 `option` 的内容，即可改变图表。`option` 的使用方法参见 [ECharts 配置项文档](http://echarts.baidu.com/option.html)。对于不熟悉 ECharts 的用户，可以参见 [5 分钟上手 ECharts](http://echarts.baidu.com/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts) 教程



