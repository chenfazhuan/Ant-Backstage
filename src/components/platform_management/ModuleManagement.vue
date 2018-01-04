<template>
  <div class="content-wrapper">
    <section class="content-header">
      <h1>
        模块管理
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">模块管理</li>
      </ol>
    </section>
    <!-- Main content -->
    <section class="content">

      <div class="row">
        <div class="col-md-3">

          <!-- Profile Image -->
          <div class="box box-primary">
            <div class="box-body box-profile">
              <div id="tree" class="treeview">
                <ul class="list-group">
                  <template v-for="(value,key,index) in aside">
                    <li class="list-group-item node-tree node-selected" @click="isbgc(index,value)"  :class="{ active:index==isBgc}">
                      <span v-if="value.title.active !=true"   @click="fillBackIconStop(value)"      class="icon expand-icon glyphicon glyphicon-unchecked"></span>
                      <span v-else="value.title.active !=true" @click="fillBackIconUnchecked(value)" class="icon expand-icon glyphicon glyphicon-stop"></span>
                      <span class="icon node-icon " :class=value.title.logo></span>
                      {{value.title.name}}
                    </li>
                    <li  v-if="!(value.title.active)"  v-for='(v,k) in value.list.name' @click="isIsbac(v,k)" class="list-group-item node-tree" :class="{ active:v==isIsBgc}">
                      <span class="indent"></span>
                      <span class="icon glyphicon"></span>
                      <span class="icon node-icon fa fa-circle-o" ></span>{{v}}
                    </li>
                  </template>
                </ul>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-9">
          <div class="box box-primary">
            <div class="box-header with-border">
              <div class="btn-group">
                <button type="button" class="btn btn-default" @click="addRoot()" ><li class="fa fa-plus">&nbsp;新增根菜单</li></button>
                <button type="button" class="btn btn-default" data-btn-type="add"><li class="fa fa-plus">&nbsp;新增下级菜单</li></button>
                <button type="button" class="btn btn-default" data-btn-type="edit"><li class="fa fa-edit">&nbsp;编辑当前菜单</li></button>
                <button type="button" class="btn btn-default" data-btn-type="delete"><li class="fa fa-remove">&nbsp;删除当前菜单</li></button>
              </div>
              <!-- /.box-tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <form class="form-horizontal" id="function-form">
                <input type="hidden" name="parentId"/>
                <div class="form-group">
                  <label for="parentName" class="col-sm-2 control-label">上级</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control"  v-bind:disabled="isDiAsbled" id="parentName" :value="asideX.parentName" name="parentName" placeholder="上级">
                  </div>
                </div>

                <div class="form-group">
                  <label for="name" class="col-sm-2 control-label">名称</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="name" v-bind:readonly="isReadOnly" :value="asideX.name" name="name" placeholder="名称">
                  </div>
                </div>
                <div class="form-group">
                  <label for="code" class="col-sm-2 control-label">编码</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="code" v-bind:readonly="isReadOnly" :value="asideX.code" name="code" placeholder="编码">
                  </div>
                </div>
                <div class="form-group">
                  <label for="url" class="col-sm-2 control-label">URL</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="url" v-bind:readonly="isReadOnly" :value="asideX.url" name="url" placeholder="URL">
                  </div>
                </div>
                <div class="form-group">
                  <label for="levelCode" class="col-sm-2 control-label">层级编码</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="levelCode" v-bind:readonly="isReadOnly" :value="asideX.levelCode" name="levelCode" placeholder="层级编码">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">菜单类型</label>
                  <div class="col-sm-9">
                    <label class="control-label">
                        <input type="radio" name="functype" class="square-green"  v-model="asideX.functype"	value="0"> 目录
                    </label> &nbsp;&nbsp;&nbsp;
                    <label class="control-label">
                       <input type="radio" name="functype" class="square-green" v-model="asideX.functype" value="1"> 菜单
                  </label> &nbsp;&nbsp;&nbsp;
                    <label class="control-label">
                      <input type="radio" name="functype" class="square-green"  v-model="asideX.functype" value="2"> 按钮
                  </label>
                    {{asideX.functype}}
                  </div>
                </div>
                <div class="form-group">
                  <label for="icon" class="col-sm-2 control-label">图标</label>
                  <div class="col-sm-7">
                    <i data-bv-icon-for="icon" id="icon_i" class="form-control-feedback" :class="asideX.icon" style="right:15px"></i>
                    <input type="text" class="form-control" id="icon"  v-bind:readonly="isReadOnly" :value="asideX.icon"  name="icon" placeholder="图标">
                  </div>
                  <div class="col-sm-2" >
                    <router-link to="/ModuleManagement/icon">
                      <button type="button" id="selectIcon" @click="pd"   v-bind:disabled="isDiAsbled" data-toggle="modal" data-target="#modal-default" class="btn btn-primary " data-btn-type="selectIcon">
                        <i class="fa fa-hand-pointer-o"  >&nbsp;选择图标</i>
                      </button>
                    </router-link>
                  </div>
                </div>
                <div class="form-group">
                  <label  class="col-sm-2 control-label">是否可用</label>
                  <div class="col-sm-9">
                    <label class="control-label"> <input type="radio" name="deleted" class="square-green" checked="checked"
                                                         value="0"> 启用
                    </label> &nbsp;&nbsp;&nbsp;
                    <label class="control-label"> <input type="radio"  name="deleted" class="square-green"	value="1"> 禁用
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <label for="remark" class="col-sm-2 control-label">说明</label>
                  <div class="col-sm-9">
                    <textarea class="form-control" id="remark"  v-bind:readonly="isReadOnly":value="asideX.remark" name="remark" placeholder="说明"></textarea>
                  </div>
                </div>
                <div class="box-footer" style="display:block">
                  <div class="text-center">
                    <button type="button" class="btn btn-default" data-btn-type="cancel">
                      <i class="fa fa-reply" >&nbsp;取消</i>
                    </button>
                    <button type="submit" class="btn btn-primary">
                      <i class="fa fa-save">&nbsp;保存</i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /. box -->
        </div>
      </div>
      <!-- /.row -->

    </section>


    <!-- 模态框（Modal） -->
    <router-view></router-view>
  </div>
</template>


<script>
  import $ from 'jquery'
  import {getModuleManagement} from 'api/recommend'
  export default {
    data() {
      return {
        aside: {
          home: {title: {name: '主页', url: '/home', logo: 'fa fa-television',active:true},list:{}},
          robot: {title: {name: '机器人列表', url: '/RobotList', logo: 'fa fa-car',active:true},list:{}},
          carManage: {
            title: {name: '用户管理', logo: 'fa fa-user',active:true},
            list: {name: ['特殊账号管理', '一般账号管理'], url: ['/SpecialAccount', '/GeneralAccount']}
          },
          platform: {
            title: {name: '平台管理', logo: 'fa fa-balance-scale',active:true},
            list: {name: ['模块管理', '角色管理', '用户管理'], url: ['/ModuleManagement', '/RoleManagement', '/UserManagement']}
          },
          basicManagement: {
            title: {name: '基本管理', logo: 'fa fa-mouse-pointer',active:true},
            list: {
              name: ['查询处理列表', '保险查询处理列表', '意见反馈列表', '机器人列表', '全部的单', '合作者每日查询', '合作者列表', 'G客户查询', '自动查询', '账目查询', '订单列表-test', '全部成功的单', '全部失败的单', '全部驳回的单', '全部无记录的单', '奔驰字典', '查询记录'],
              url: ['/QueryProcessing', '/IQ_processing', '/Feedback', '/Robot2', '/FullList', '/Collaborator', '/CollaboratorsList', '/GCustomer', '/AutoPolling', '/AccountInquiry', '/OrderList', '/SuccessfulOrder', '/FailureOrder', '/RejectionOrder', '/NonrecordOrder', '/Dictionaries', '/QueryRecord']
            }
          },
          mobileSectting: {
            title: {name: '手机端设置', logo: 'fa fa-mobile',active:true},
            list: {
              name: ['版本列表', '内容配置', '品牌列表', '保险公司列表', '优惠券', '推送'],
              url: ['/VersionList', '/ContentConfiguration', '/BrandList', '/CompanyInsurance', '/Coupon', '/Push']
            }
          }
        },
        isBgc: 'dd',//菜单父上的色彩
        isff:"",
        isIsBgc: 'dd',//菜单子的色 彩
        iszz:"",
        isReadOnly:true,   //只读
        isDiAsbled:true,   //禁止编写
        asideX:{         //页面上input的数据
          parentName:'',    //上一级
          name:'',          //名称
          code:'',          //编码
          url:'',           //URL
          levelCode:'',     //层级编码
          functype:'',      //菜单类型
          icon:'',          //图标
          deleted:'',       //是否可用
          remark:""         //说明
        },

      }

    },
    methods: {
      pd() {
        $('body').css({'overflow-y':'hidden'})
      },
      fillBackIconUnchecked(value){
     ///   console.log(value.list.length)
           value.title.active=false;
      },
      fillBackIconStop(value){ //关闭

        value.title.active=true;

      },
      isbgc(a,value){//父菜单点击事件
        console.log(a,value);
        this.isIsBgc='ss';
        this.isBgc=a;
        this.isff=true;
        this.iszz="";
       // value.
        let _shuju=this.asideX;
        _shuju.icon= value.title.logo;
        _shuju.parentName= "系统菜单";
        _shuju.name= value.title.name;
        _shuju.code="暂时没数据";
        _shuju.url=value.title.url;
        _shuju.levelCode=a+1;
        //
        _shuju.functype=a;
        _shuju.deleted=a;
        _shuju. remark=a;



      },
      isIsbac(a){ //子菜单点击事件
        this.isBgc='ss';
        this.isIsBgc=a
      },
      addRoot(){
        if(this.isff||this.iszz){

        }else{
          alert("在系统菜单建立文件夹")
        }
      }
    },
    computed:{ //计算属性
      activeBullFalse(){
        this.aside.mobileSectting.title.active=false;
      },
      activeBullTrue(){
        this.aside.mobileSectting.title.active=true;
      },


    },
    filters:{
      capitalize(value){
        if(value=='1') return true;
        if(value=='2') return true;
        if(value=='3') return true;
      }
    },
    created(){
      //this.pageload()
    }
  }

</script>

<style scoped>
  li{
   list-style: none;
  }
  .treeview span.icon {
    width: 12px;
    margin-right: 5px;
  }
  .treeview .list-group-item {
    cursor: pointer;
  }
  .node-tree:not(.node-disabled):hover {
    background-color: #F5F5F5;
  }
  .active{
    color:#FFFFFF!important;background-color:#428bca !important;
  }
</style>
