<template>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          角色管理
          <small></small>
        </h1>
        <ol class="breadcrumb">
          <li>
            <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
          </li>
          <li class="active">角色管理</li>
        </ol>
      </section>
      <section class="content">
        <div class="row">
          <div class="col-md-7">
            <form id="splitPage" class="form-condensed" action="">
              <div class="box box-primary">
                <div class="box-header">
                  <div class="box-body table-responsive">
                    <div class="form-group">
                      <div class="col-xs-4">
                        <input type="text" name="keyWord" value="" v-model="sea" class="form-control" placeholder="请输入关键字">
                      </div>
                      <div class="col-xs-2">
                        <button type="button" class="btn btn-primary" @click="ajaxForm('content','splitPage')">搜索</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box-body table-responsive  no-padding">
                    <el-table
                      border
                      :data="tableData"
                    >
                      <!--增加序列-->
                      <el-table-column

                        prop="id"
                        label="id"
                        width="65">
                      </el-table-column>
                      <!--标题-->
                      <el-table-column
                        prop="name"
                        min-width="95"
                        label="名称">
                      </el-table-column>
                      <el-table-column
                        prop="describe"
                        label="描述"
                        min-width="125"
                        align="center">
                      </el-table-column>
                      <el-table-column
                        prop="dates"
                        label="创建时间"
                        min-width="125"
                        align="center">
                      </el-table-column>
                      <el-table-column
                        prop="checked"
                        label="操作"
                        min-width="125"
                        align="center">
                        <template scope="scope">
                          <button class="btn btn-info" style="padding: 1px 6px;"
                                  @click="senduser(scope.row.name,scope.row.describe,scope.row.dates,scope.row.checkeds)">
                            查看
                          </button>
                          &nbsp
                          <button class="btn btn-danger"  style="padding: 1px 6px;"
                                  @click="">
                            删除
                          </button>
                        </template>
                      </el-table-column>
                    </el-table>
                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix">
                  <div class="row">
                    <div class="col-xs-3"></div>
                    <div class="col-xs-6" style="text-align: center">
                      <paginate
                        :page-count="lastpage"
                        :page-range="2"
                        :margin-pages="1"
                        :click-handler="pages"
                        :prev-text="'上一页'"
                        :next-text="'下一页'"
                        :container-class="'pagination'"
                        :page-class="'page-item'">
                      </paginate>
                    </div>
                  </div>

                </div>
              </div>
              <!-- /.box -->
            </form>

          </div>
          <!-- /.col -->
          <div class="col-md-5">
            <div class="box box-primary">
              <div class="box-header with-border">
                  <div class="btn-group">
                    <div class="btn-group">
                      <button type="button" class="btn btn-default"  ><li class="fa fa-plus">&nbsp;新増角色</li></button>
                      <button type="button" class="btn btn-default" ><li @click="upDates(1)" class="fa fa-edit">&nbsp;编辑当前角色</li></button>
                    </div>
                  </div>
              </div>
              <div class="box-body">
                <div>
                  <el-form label-width="100px" class="demo-dynamic">
                     <el-form-item label="名称" >
                       <el-input :disabled='dee'v-model=" Updataform.name" ></el-input>
                     </el-form-item>
                    <el-form-item label="系统" >
                      <el-select :disabled="dee" placeholder="请选择活动区域" v-model="Updataform.value"  size="100px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="说明" >
                      <el-input type="textarea" :disabled="dee" v-model="Updataform.describe"></el-input>
                    </el-form-item>
                  </el-form>
                </div>
                <el-tree
                  :data="data2"
                  show-checkbox
                :default-checked-keys='defaultChecked'
                  node-key="id"
                  ref="tree"
                  highlight-current
                  :props="defaultProps">
                </el-tree>
                <div class="box-footer" v-if="!dee">
                  <div class="text-center">
                    <button type="button" class="btn btn-default" data-btn-type="cancel">
                      <i class="fa fa-reply" >&nbsp;取消</i>
                    </button>
                    <button type="submit" class="btn btn-primary">
                      <i class="fa fa-save">&nbsp;保存</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </section>
    </div>
</template>
<script>
  import paginate from 'vuejs-paginate'
    import {getModuleManagement} from 'api/recommend'
  export default {
     components:{paginate},
    data() {
      return {
        //搜索关键字
        sea: '',
        items: 2,//全部条数
        lastpage:1,//最后一页
        page: "1",//当前页数
        slider: '',//详细页数
        previousPage: '',//上一页
        nextPage: '',//下一页
        dee:true,  //是否可编辑
        data2: [
          {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 15,
              label: '三级 1-1-1'

            }, {
              id: 123,
              label: '三级 1-1-2'
            }]
          }]
        },
          {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        },
          {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        },
          {
            id: 4,
            label: '一级 3',
            children: [{
              id: 9,
              label: '二级 3-1'
            }, {
              id:10,
              label: '二级 3-2'
            }]
          },
          {
            id: 5,
            label: '一级 3',
            children: [{
              id: 11,
              label: '二级 3-1'
            }, {
              id: 12,
              label: '二级 3-2'
            }]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        //下拉框
        options: [{
          value: '1',
          label: '加盟商'
        }],

        //列表的数据
        tableData:[
          {
            id:1,
            name:"boss 后台管理afd1",
            describe:"负责boss后台业务操作",
            dates:"2017-06-12 10:08",
            checkeds:[1]
          },{
            id:2,
            name:"boss 后台管理dsaf2",
            describe:"负责boss后台业务操作",
            dates:"2017-06-12 10:08",
            checkeds:[2]
          },{
            id:3,
            name:"boss 后台管理asdf3",
            describe:"负责boss后台业务操作",
            dates:"2017-06-12 10:08",
            checkeds:[3]
          },{
            id:4,
            name:"boss 后台管理asdf4",
            describe:"负责boss后台业务操作",
            dates:"2017-06-12 10:08",
            checkeds:[4]
          },
        ],
        defaultChecked:[],//默认选中的节点
        //修改编辑数剧
        Updataform:{
          name:'',
          value: '1',//下拉当前选中的值
          describe:'',
          checkeds:''//默认选中的节点
        }
      };
    },
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys(keys) {
        this.$refs.tree.setCheckedKeys(keys);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      upDates(e){ //可编辑
        this.dee=false;
      },
      senduser(name,describe,dates,checkeds){
        this.dee=true;
        this.Updataform.name=name;
        this.Updataform.describe=describe;
        this.Updataform.dates=dates;
        this.Updataform.checkeds=checkeds;
        this.resetChecked();
        this.setCheckedKeys(checkeds)
      },
      pages(currentPage) {
        console.log('dianwo wo ')
      },
      ajaxForm(){
        console.log('查关键字'+this.sea)
      }
    }
  };
</script>
