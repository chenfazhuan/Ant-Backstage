<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->

      <!-- search form (Optional) -->
      <div class="sidebar-form">
        <div class="input-group">
          <input id="search" name="search" type="text" data-list=".default_list" autocomplete="off" class="form-control"
                 placeholder="Search..." v-model="search" @keyup.13="sear">
          <span class="input-group-btn">
              <button @click="sear" type="submit" name="search" id="search-btn" class="btn btn-flat"><i
                class="fa fa-search"></i>
              </button>
            </span>
        </div>
      </div>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu tree default_list" data-widget="tree">

        <li :class="[key=='home'? 'active':'']" :attrurl="value.title.url" v-for="(value,key) in aside"
            v-if="!value.list">
          <router-link :to="value.title.url">
            <i :class=value.title.logo></i> <span>{{value.title.name}}</span>
          </router-link>
        </li>

        <li v-else class="treeview" :attrurl="value.list.url">
          <a><i :class=value.title.logo></i> <span>{{value.title.name}}</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
            <li v-for="(v,k) in value.list.name">
              <router-link :to=value.list.url[k]><i class="fa fa-circle-o"></i>{{v}}</router-link>
            </li>
          </ul>
        </li>

      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
  import $ from 'jquery'
  import '../../static/hideseek/jquery.hideseek.min';

  export default {
    data() {
      return {
        search: '',//搜索关键字
        //侧边栏数据
        aside: {
          home: {title: {name: '主页', url: '/home', logo: 'fa fa-television'}},
          robot: {title: {name: '机器人', logo: 'fa fa-car'},list: {name: ['机器人抛单', '机器人列表'], url: ['/RobotDispatch', '/RobotList']}},
          carManage: {
            title: {name: '用户管理', logo: 'fa fa-user'},
            list: {name: ['特殊账号管理', '一般账号管理'], url: ['/SpecialAccount', '/GeneralAccount']}
          },
          platform: {
            title: {name: '平台管理', logo: 'fa fa-balance-scale'},
            list: {name: ['模块管理', '角色管理', '用户管理'], url: ['/ModuleManagement', '/RoleManagement', '/UserManagement']}
          },
          basicManagement: {
            title: {name: '基本管理', logo: 'fa fa-mouse-pointer'},
            list: {
              name: ['查询处理列表', '保险查询处理列表', '意见反馈列表', '机器人列表', '全部的单', '合作者每日查询', '合作者列表', 'G客户查询', '自动查询', '账目查询', '订单列表-test', '全部成功的单', '全部失败的单', '全部驳回的单', '全部无记录的单', '奔驰字典', '查询记录'],
              url: ['/QueryProcessing', '/IQ_processing', '/Feedback', '/Robot2', '/FullList', '/Collaborator', '/CollaboratorsList', '/GCustomer', '/AutoPolling', '/AccountInquiry', '/OrderList', '/SuccessfulOrder', '/FailureOrder', '/RejectionOrder', '/NonrecordOrder', '/Dictionaries', '/QueryRecord']
            }
          },
          mobileSectting: {
            title: {name: '手机端设置', logo: 'fa fa-mobile'},
            list: {
              name: ['版本列表', '内容配置', '品牌列表', '保险公司列表', '优惠券', '推送','活动列表','banner图设置'],
              url: ['/VersionList', '/ContentConfiguration', '/BrandList', '/CompanyInsurance', '/Coupon', '/Push','/ActivityList','/BannerImage']
            }
          },
          carDealer:{
            title: {name: '车商管理', logo: 'fa fa-car'},
            list:{
              name:['车商信息管理','车商查询详情'],
              url:['/InformationManagement','/QueryDetails']
            }
          }
        }
      }
    },
    watch: {
      '$route': 'fetchData'//监听路由变化
    },
    methods: {
      sear() {//搜索侧边栏
        for (var key in this.aside) {
          if (!this.aside[key].list) {
            if (this.aside[key].title.name == this.search || this.isContains(String(this.aside[key].title.name), this.search)) {
              this.$router.push(this.aside[key].title.url)
            }
          } else {
            if (this.isContains(String(this.aside[key].list.name), this.search)) {
              var v;
              for (var val in this.aside[key].list.name) {
                if (this.aside[key].list.name[val] == this.search || this.isContains(String(this.aside[key].list.name[val]), this.search)) {
                  v = val;
                }
              }
              this.$router.push(this.aside[key].list.url[v])
            }
          }
        }
      },
      fetchData: function () {//判断页面地址选中状态加active
        var arr = Object.keys(this.aside);//变成数组
        for (let i = 1; i <= arr.length; i++) {
          let that = $('.sidebar-menu>li:nth-child(' + i + ')')
          let dataUrl = $(that).attr('attrurl')
          if (this.isContains(dataUrl, this.$route.path)) {
            $(that).addClass('active').siblings().removeClass('active')
            $('.treeview-menu').children('li').removeClass('active')
          }
          if (that.hasClass('active') && that.children().hasClass('treeview-menu')) {
            for (let i = 0; i < that.children('.treeview-menu').find('a').length; i++) {
              let rt='#'+this.$route.path
              if ($(that.children('.treeview-menu').find('a')[i]).attr('href') == rt) {
                $(that.children('.treeview-menu').find('a')[i]).parent().addClass('active')
                $(that.children('.treeview-menu').find('a')[i]).parent().siblings().removeClass('active')
              }
            }
          }
        }
        if(this.$route.path!='/login'){
          $('html').css('background','#fff')
        }else{
          $('html').css('background','#222d32')
        }

      },
      isContains(str, substr) {//判断是否包含字符串
        return new RegExp(substr).test(str);
      }
    },
    mounted() {
      this.fetchData()//刷新执行
      $('#search').hideseek();
    }
  }

</script>
<style>
  .treeview a {
    cursor: pointer;
  }
</style>
