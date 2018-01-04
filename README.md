基于vue2 + vuex + adminLTE2的后台项目

开发环境 Chrome 56 nodejs 6.10.0

# 安装依赖
npm install

# 开启本地服务器
npm run dev

# 发布环境
 1.npm run build打包
 2.新建prod.server.js文件
 3.写入服务器http请求
 4.node prod.server.js运行程序




项目布局

.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 打包完成的文件，放在服务器即可正常访问
├── src                                         // 源码目录
│   ├── api                                     // api组件
│   │   ├── recommend.js                        // 后台数据请求入口
│   ├── assets                                  // 依赖第三方js,css,图片文件
│   ├── components                              // 组件
│   │   ├── basic_settings                      // 基础管理模块
│   │   │   ├── QueryProcessing.vue             // 查询处理列表页面
│   │   │   ├── IQ_processing.vue               // 保险查询处理列表
│   │   │   ├── Feedback.vue                    // 意见反馈列表
│   │   │   ├── Robot2.vue                      // 机器人列表2
│   │   │   ├── FullList.vue                    // 全部的单
│   │   │   ├── Collaborator.vue                // 合作者每日查询
│   │   │   ├── CollaboratorsList.vue           // 合作者列表
│   │   │   ├── GCustomer.vue                   // G客户查询
│   │   │   ├── AutoPolling.vue                 // 自动查询
│   │   │   ├── FullList.vue                    // 账目查询
│   │   │   └── Collaborator.vue                // 合作者每日查询
│   │   ├── platform_management                 // 平台管理模块
│   │   ├── user_management                     // 用户管理模块
│   │   └── .....
│   ├── router
│   │   └──index.js                             // 路由配置入口
│   ├── vuex
│   │   └──store.js                             // 状态管理入口
│   ├── static                                  // 第三方插件
├── index.html                                  // 入口html文件
├── package.json                                // 依赖安装包
.
