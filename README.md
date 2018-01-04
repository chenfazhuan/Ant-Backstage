基于vue2 + vuex + adminLTE2的后台项目

开发环境 Chrome 56 nodejs 6.10.0

# 安装依赖
npm install

# 开启本地服务器
npm run dev

# 发布环境
npm run build打包




项目布局

.
├── build                                       // webpack配置文件<br>
├── config                                      // 项目打包路径<br>
├── dist                                        // 打包完成的文件，放在服务器即可正常访问<br>
├── src                                         // 源码目录<br>
│   ├── api                                     // api组件<br>
│   │   ├── recommend.js                        // 后台数据请求入口<br>
│   ├── assets                                  // 依赖第三方js,css,图片文件<br>
│   ├── components                              // 组件<br>
│   │   ├── basic_settings                      // 基础管理模块<br>
│   │   │   ├── QueryProcessing.vue             // 查询处理列表页面<br>
│   │   │   ├── IQ_processing.vue               // 保险查询处理列表<br>
│   │   │   ├── Feedback.vue                    // 意见反馈列表<br>
│   │   │   ├── Robot2.vue                      // 机器人列表2<br>
│   │   │   ├── FullList.vue                    // 全部的单<br>
│   │   │   ├── Collaborator.vue                // 合作者每日查询<br>
│   │   │   ├── CollaboratorsList.vue           // 合作者列表<br>
│   │   │   ├── GCustomer.vue                   // G客户查询<br>
│   │   │   ├── AutoPolling.vue                 // 自动查询<br>
│   │   │   ├── FullList.vue                    // 账目查询<br>
│   │   │   └── Collaborator.vue                // 合作者每日查询<br>
│   │   ├── platform_management                 // 平台管理模块<br>
│   │   ├── user_management                     // 用户管理模块<br>
│   │   └── .....<br>
│   ├── router
│   │   └──index.js                             // 路由配置入口<br>
│   ├── vuex<br>
│   │   └──store.js                             // 状态管理入口<br>
│   ├── static                                  // 第三方插件<br>
├── index.html                                  // 入口html文件<br>
├── package.json                                // 依赖安装包<br>
.<br>
