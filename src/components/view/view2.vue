<template>
  <div class="content">
    <div class="row">
      <div class="alert alert-success alert-dismissible">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <h4>提示信息:</h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXXXXXX
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua"><i class="ion ion-ios-gear-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">XXXXXX</span>
            <span class="info-box-number">XXXX<small>XXXX</small></span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-red"><i class="fa fa-google-plus"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">XXXXX</span>
            <span class="info-box-number">XXXXX</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->

      <!-- fix for small devices only -->
      <div class="clearfix visible-sm-block"></div>

      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-green"><i class="ion ion-ios-cart-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">XXXXX</span>
            <span class="info-box-number">XXXXX</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-yellow"><i class="ion ion-ios-people-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">XXXXXX</span>
            <span class="info-box-number">XXXXXX</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
    </div>
    <div class="row">
      <div id="myChart" class="col-sm-6 col-xs-12" style="height: 500px"></div>
      <div id="Chart" class="col-sm-6 col-xs-12"
           style="display: flex;flex-direction: column;height: 500px"></div>
    </div>
    <!--<div class="row">-->
    <!--<div id="wavy" class="col-sm-6 col-xs-12" style="display: flex;flex-direction: column;height: 500px"></div>-->
    <!--<div id="map" class="col-sm-6 col-xs-12" style="height: 500px"></div>-->
    <!--</div>-->
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box bg-yellow">
          <span class="info-box-icon"><i class="ion ion-ios-pricetag-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">XXXXX</span>
            <span class="info-box-number">XXXXX</span>

            <div class="progress">
              <div class="progress-bar" style="width: 50%"></div>
            </div>
            <span class="progress-description">
                  XXXXX
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box bg-green">
          <span class="info-box-icon"><i class="ion ion-ios-heart-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">XXXXX</span>
            <span class="info-box-number">XXXXX</span>

            <div class="progress">
              <div class="progress-bar" style="width: 20%"></div>
            </div>
            <span class="progress-description">
                  XXXXX
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box bg-red">
          <span class="info-box-icon"><i class="ion ion-ios-cloud-download-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">XXXXX</span>
            <span class="info-box-number">XXXXX</span>

            <div class="progress">
              <div class="progress-bar" style="width: 70%"></div>
            </div>
            <span class="progress-description">
                  XXXXX
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box bg-aqua">
          <span class="info-box-icon"><i class="ion-ios-chatbubble-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">XXXXX</span>
            <span class="info-box-number">XXXXX</span>

            <div class="progress">
              <div class="progress-bar" style="width: 40%"></div>
            </div>
            <span class="progress-description">
                  XXXXX
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  let echarts = require('echarts/lib/echarts');
  require('echarts/map/js/china.js')
  require('echarts/lib/chart/bar');//圆柱形
  require('echarts/lib/chart/pie');//饼状
  require('echarts/lib/chart/line');//饼状
//  require('echarts/lib/chart/map');//地图
  require('echarts/lib/component/tooltip');// 引入提示框和标题组件
  require('echarts/lib/component/title');
  require('echarts/lib/component/toolbox');
  require('echarts/lib/component/legend');
  require('echarts/lib/component/markLine');

//  require('../../../src/assets/js/echarts-liquidfill.min')
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        myChart: '',
        Char: '',
        map: '',
        wavy: ''
      }
    },
    mounted() {
      this.drawLine();
      window.addEventListener('resize', () => {
        this.myChart.resize();
        this.Char.resize();
      })

      this.myChart.on('click', function (params) {
        console.log(params)
      });

      this.Char.on('click', function (params) {
        console.log(params)
      });
    },
    methods: {
      drawLine() {

        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(document.getElementById('myChart'))
        this.Char = echarts.init(document.getElementById('Chart'))
//        this.map = echarts.init(document.getElementById('map'))
//        this.wavy = echarts.init(document.getElementById('wavy'))

        // 饼图
        this.Char.setOption({
          title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
        //柱状
        this.myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            data: ['蒸发量', '降水量', '平均温度']
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '水量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml'
              }
            },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [
            {
              name: '蒸发量',
              type: 'bar',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name: '降水量',
              type: 'bar',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name: '平均温度',
              type: 'line',
              yAxisIndex: 1,
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        });


        //波浪饼图
//        this.wavy.setOption({
//      title: {
//        text: 'xxx'
//      },
//      series: [{
//        type: 'liquidFill',
//        data: [0.6]
//      }]
//    })
      },
    }
  }
</script>
