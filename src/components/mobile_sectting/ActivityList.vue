<template>
  <div class="content-wrapper">
    <section class="content-header">
      <h1>
        活动列表
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">活动列表</li>
      </ol>
    </section>
    <section class="content container-fluid">
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
                    <img :src="scope.row.pic" v-show="!edit_pic" style="width: 100%; padding: 5px 0">
                    <el-button icon='upload' @click="dialogVisible=true" v-show="edit_pic" type="primary">
                      上传图片
                    </el-button>
                  </template>
                </el-table-column>

                <el-table-column
                  prop="web"
                  align="center"
                  label="地址">
                  <template scope="scope">
                    <el-input v-show="edit_address" v-model="scope.row.web"></el-input>
                    <span v-show="!edit_address">{{scope.row.web}}</span>
                  </template>
                </el-table-column>

                <el-table-column
                  prop="time"
                  align="center"
                  label="时间">
                  <template scope="scope">
                    <span>{{edit_time}}</span>
                    <el-date-picker
                      type="daterange"
                      v-model="scope.row.time"
                      @change="choosetime"
                      placeholder="修改日期范围">
                    </el-date-picker>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="状态"
                  width="150">
                  <template scope="scope">
                    <el-select v-show="edit_state" v-model="scope.row.state" placeholder="请选择">
                      <el-option label="显示" value='1'></el-option>
                      <el-option label="隐藏" value='0'></el-option>
                    </el-select>
                    <span v-show="!edit_state&&scope.row.state==0" class="label label-danger">隐藏</span>
                    <span v-show="!edit_state&&scope.row.state==1" class="label label-success">显示</span>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  width="200px"
                  label="编辑">
                  <template scope="scope">
                    <div style="margin-top:5px;display:flex;justify-content: space-between">

                      <el-button :type="edit_title?'success':'primary'" @click='edit_title=!edit_title' size="small"
                                 icon="edit">
                        {{edit_title ? '完成' : '标题'}}
                      </el-button>
                      <el-button :type="edit_pic?'success':'primary'" @click='edit_pic=!edit_pic' size="small"
                                 icon="edit">
                        {{edit_pic ? '完成' : '图片'}}
                      </el-button>

                    </div>

                    <div style="margin-top: 5px;margin-bottom: 5px;display: flex;justify-content: space-between">

                      <el-button :type="edit_address?'success':'primary'" @click='edit_address=!edit_address'
                                 size="small"
                                 icon="edit">
                        {{edit_address ? '完成' : '地址'}}
                      </el-button>
                      <el-button :type="edit_state?'success':'primary'" @click='edit_state=!edit_state' size="small"
                                 icon="edit">
                        {{edit_state ? '完成' : '状态'}}
                      </el-button>

                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--上传图片-->
    <el-dialog v-model="dialogVisible">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :auto-upload="false"
        list-type="picture">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
    <!--增加-->
    <el-dialog v-model="dialogVisible1">
      <el-form :model="ruleForm_add" :rules="rules" ref="ruleForm_add" label-width="100px">
        <el-form-item label="标题" prop="name">
          <el-input v-model="ruleForm_add.name"></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="pic">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="ruleForm_add.address"></el-input>
        </el-form-item>
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="ruleForm_add.time"
            type="daterange"
            placeholder="选择日期范围">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm_add: {//增加用户填写时候过滤
          name: '',
          pic: '',
          address: '',
          time: ''
        },
        rules: {//过滤提示
          name: [
            {required: true, message: '请输入标题', trigger: 'blur'}
          ],
          pic: [
            {required: true, message: '请输入价格'}
          ],
          address: [
            {required: true, message: '请输入网页地址'}
          ],
          time: [
            {required: true, message: '请输入时间'}
          ]
        },
        dialogVisible1: false,
        dialogVisible: false,
        state: 0,
        edit_pic: 0,
        edit_title: 0,
        edit_state: 0,
        edit_address: 0,
        edit_time: '2017-09-01 - 2017-10-28',
        msg: [{
          web: 'www.baidu.com',
          time: '2017-09-01 - 2017-10-28',
          title: ' 国庆献礼，多重福利等你来',
          pic: 'http://mayinvwang.com/Public/Admin/ueditor/php/upload//20170825/15036468891892.png',
          state: '1'
        },
        ]
      }
    },
    methods: {
      choosetime(e) {
        this.edit_time = e
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
