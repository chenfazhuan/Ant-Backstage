<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        banner图设置
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">banner图设置</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
      <section>
        <div class="row">
          <div class="col-xs-12">
            <div class="box box-primary">
              <div class="box-header">
                <el-button icon="edit" @click="dialogVisible1=true">
                  增加
                </el-button>
              </div>
              <div class="box-body table-responsive">
                <el-table
                  highlight-current-row
                  border
                  :data="msg"
                  style="width: 100%">
                  <el-table-column
                    type="index"
                    label="序列"
                    width="60">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    align="center"
                    label="名称">
                  </el-table-column>
                  <el-table-column min-width="100px" label="标题" align="center">
                    <template scope="scope">
                      <el-input v-show="edit_title" size="small" v-model="scope.row.title"></el-input>
                      <span v-show="!edit_title">{{ scope.row.title }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="图片"
                    align="center"
                    width="200px">
                    <template scope="scope">
                      <img :src="scope.row.pic" v-show="!edit" style="width: 100%; padding: 5px 0">
                      <input v-show="edit" v-model="scope.row.pic">
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="web"
                    align="center"
                    min-width="150px"
                    label="页面地址">
                    <template scope="scope">
                      <input v-show="edit_web" v-model="scope.row.web">
                      <span v-show="!edit_web">{{scope.row.web}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    width="150px"
                    label="放置位置">
                    <template scope="scope">
                      <el-select v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    width="260px"
                    label="编辑">
                    <template scope="scope">
                      <el-button :type="edit_title?'success':'primary'" @click='edit_title=!edit_title' size="small"
                                 icon="edit">
                        {{edit_title ? '完成' : '标题'}}
                      </el-button>
                      <el-button :type="edit?'success':'primary'" @click='edit=!edit' size="small" icon="edit">
                        {{edit ? '完成' : '图片'}}
                      </el-button>
                      <el-button :type="edit_web?'success':'primary'" @click='edit_web=!edit_web' size="small"
                                 icon="edit">
                        {{edit_web ? '完成' : '地址'}}
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div style="margin-top: 25px">
                  <keep-alive>
                    <Tinymce :height='200' v-model="content"></Tinymce>
                  </keep-alive>


                </div>
                <!--<div class='editor-content' v-html='content'></div>-->
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <el-dialog v-model="dialogVisible1">
      <div>
        <h4>增加banner信息</h4>
        <div class="box-body">
          <div class="col-md-12">
            <el-form ref="ruleForm_add" label-width="100px">
              <el-form-item label="名称" prop="name">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="标题" prop="price">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="图片" prop="phone">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="网址" prop="city">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="放置位置" prop="city">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary">确 定</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>


    </el-dialog>

  </div>

</template>

<script>
  import Tinymce from '@/components/Tinymce'


  export default {
    components: {Tinymce},
    data() {
      return {
        dialogVisible1: false,
        edit: 0,
        edit_title: 0,
        edit_web: 0,
        content: '',
        msg: [{
          name: 'banner1',
          title: '优选推荐',
          pic: 'http://mayinvwang.com/Public/Admin/ueditor/php/upload//20170825/15036468891892.png',
          web: 'https://api.mayinvwang.com/webview/activity/newsActivity3/index.html'
        },
        ],
        options: [{
          value: '选项1',
          label: '充值页面'
        }, {
          value: '选项2',
          label: '车商页面'
        }, {
          value: '选项3',
          label: '车商日'
        }, {
          value: '选项4',
          label: '发布车辆'
        }, {
          value: '选项5',
          label: 'webview'
        }, {
          value: '选项6',
          label: '邀请活动'
        }],
        value: '',
      }
    }
  }
</script>
<style>

</style>

