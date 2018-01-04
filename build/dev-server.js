require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

var axios = require('axios')//
var qs = require('querystring')//

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

// var apiRouters=express.Router()//

app.post('/getDiscList', (req, res) => {
  req.on('data', (buf) => {
    var obj = qs.parse(buf.toString());
    var url = obj.url
    if (url == 'http://dev.com/car/robot/query') {
      axios.get(url, {
        header: {
          referer: 'http://dev.com/car/home',
          host: 'dev.com'
        },
        params: {keyWord: obj.keyWord, "currentPage": obj.currentPage}
      }).then((resopnse) => {
        res.json(resopnse.data)
      })
    }
    else if (url = 'http://dev.com/car/api/v1/pay/querySpecial/list') {
      axios.get(url, {
        header: {
          referer: 'http://dev.com/car/home',
          host: 'dev.com'
        },
        params: {keywords: obj.keyWord, "currentPage": obj.currentPage}
      }).then((resopnse) => {
        res.json(resopnse.data)
      })
    }
  })
})

app.post('/getRobot2', (req, res) => {
  req.on('data', (buf) => {
    var obj = qs.parse(buf.toString());
    var url = obj.url

    axios.get(url, {
      header: {
        referer: 'http://dev.com/car/home',
        host: 'dev.com'
      },
      params: {
        'queryId': obj.queryId,
        'vinCode': obj.vinCode,
        'partnerId': obj.partnerId,
        'partnerName': obj.partnerName,
        'phone': obj.phone,
        'startTime': obj.startTime,
        'endTime': obj.endTime,
        'currentPage': obj.currentPage
      }
    }).then((resopnse) => {
      res.json(resopnse.data)
    })

  })
})

app.post('/getAddSpecialAccount', (req, res) => {
  req.on('data', (buf) => {
    var obj = qs.parse(buf.toString());
    var url = obj.url
    axios({
      method: 'post',
      url: url + '?phone=' + obj.phone,
      data: {}
    }).then((resopnse) => {
      res.json(resopnse.data)
    })
  })
})

app.post('/getModuleManagement', (req, res) => {
  req.on('data', (buf) => {
    var obj = qs.parse(buf.toString());
    var url = obj.url
    axios.post(url, {
      'system': 1,
      header: {
        referer: 'http://dev.com/car/home',
        host: 'dev.com'
      }
    }).then((resopnse) => {
      res.json(resopnse.data)
    })
  })
})

app.post('/getInformationManagement', (req, res) => {
  req.on('data', (buf) => {
    var obj = qs.parse(buf.toString());
    var url = obj.url
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    axios.post(url,
      qs.stringify(
        {
          conType: obj.conType,
          currentPage: obj.currentPage,
          token: obj.token,
          name: obj.names,
          price: obj.price,
          phone: obj.phone,
          city: obj.city,
          operator: obj.operator,
          status: obj.status
        })
    ).then((resopnse) => {
      res.json(resopnse.data)
    }).catch(function (error) {
    });
  })
})

app.post('/getQueryDetails', (req, res) => {
  req.on('data', (buf) => {
    var obj = qs.parse(buf.toString());
    var url = obj.url
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    axios.post(url,
      qs.stringify(
        {
          conType: obj.conType,
          currentPage: obj.currentPage,
          vin: obj.token,
          beginTime: obj.beginTime,
          endTime: obj.endTime,
          carDealerName: obj.carDealerName,
          phone: obj.phone,
          payStatus: obj.payStatus,
          queryStatus: obj.queryStatus
        })
    ).then((resopnse) => {
      res.json(resopnse.data)
      console.log(resopnse.data)
    }).catch(function (error) {
      "use strict";
      console.log(error)
    });
  })
})

app.post('/getOrderList', (req, res) => {
  req.on('data', (buf) => {
    var obj = qs.parse(buf.toString());
    var url = obj.url
    axios.get(url, {
      'system': 1,
      header: {
        referer: 'http://dev.com/car/home',
        host: 'dev.com'
      },
      params: {
        'keywords': obj.keywords,
        'phone': obj.phone,
        'brand': obj.brand,
        'startTime': obj.startTime,
        'endTime': obj.endTime,
        'currentPage': obj.currentPage
      }
    }).then((resopnse) => {
      res.json(resopnse.data)
    })
  })
})

app.post('/getOderLIstHandle', (req, res) => {
  req.on('data', (buf) => {
    var obj = qs.parse(buf.toString());
    var url = obj.url;
    axios({
      method: 'post',
      url: url + "?token=" + obj.token,
      data: {}
    }).then((resopnse) => {
      res.json(resopnse.data)
    })
  })
})


var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
