
import Vue from 'vue'
import store from './vuex/store'
import VueRouter from 'vue-router'
import VueLazyLoad from 'vue-lazyload'

import App from './App'
import routes from './router'

import 'element-ui/lib/theme-default/index.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './assets/css/skins/_all-skins.min.css'
import './assets/css/AdminLTE.min.css'
import './assets/js/adminlte.min.js'

import 'font-awesome/css/font-awesome.min.css'







// import {DatePicker,Transfer,TableColumn,Table,Form,FormItem,Button,ButtonGroup,Input,Radio,RadioButton,RadioGroup,DropdownMenu,Dropdown,DropdownItem,Select,Tree,Option,Tabs,TabPane,Rate,Dialog,Upload,Tag,Row,Col} from 'element-ui'//ui组件
import ElementUI from 'element-ui'//ui组件
Vue.use(ElementUI)


// Vue.use(DatePicker)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Option)
// Vue.use(Tree)
Vue.use(VueRouter)
// Vue.use(Transfer)
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Button)
// Vue.use(ButtonGroup)
// Vue.use(Input)
// Vue.use(Radio)
// Vue.use(RadioButton)
// Vue.use(RadioGroup)
// Vue.use(DropdownMenu)
// Vue.use(Dropdown)
// Vue.use(DropdownItem)
// Vue.use(Select)
// Vue.use(Option)
// Vue.use(Tabs)
// Vue.use(TabPane)
// Vue.use(Rate)
// Vue.use(Dialog)
// Vue.use(Upload)
// Vue.use(Tag)




Vue.use(VueLazyLoad,{
  loading:require('@/assets/img/user2-160x160.jpg')
})
const router = new VueRouter({
  history: false,
  // hashbang: true,
  routes
});

// 全局导航钩子
router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {
    store.state.user=sessionStorage.userName
    if(!isEmptyObject(store.state.user)) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})


function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
//判断object是否为空

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  router,
  store,
  render:h=>h(App)
})

