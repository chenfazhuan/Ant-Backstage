<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        特殊账号管理
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">特殊账号管理</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">

      <div>
        <!-- Main content -->
        <section>
          <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class="box-header with-border">
                  <div action="" class="form-inline">
                    <div class="form-group">
                      <label for="na">
                        关键字：
                      </label>
                      <input type="text" v-model="keyword" class="form-control" placeholder="关键字" id="na"
                             :value="keyword">
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary" @click="search(page,keyword)">
                        搜索
                      </button>
                      <span style="margin-left: 10px">全部记录 <a style="color: red">{{items}}</a>条</span>
                    </div>
                  </div>

                </div>
                <!-- /.box-header -->
                <div class="box-body">
                  <table class="table table-bordered">
                    <thead>
                    <tr>
                      <!-- <th style="width: 10px">ID</th> -->
                      <th>编号</th>
                      <th>电话</th>
                      <th>所在地区</th>
                      <th>注册时间</th>
                      <th>状态</th>
                      <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(value,key) in msg">
                      <td>
                        <div>{{value.id}}</div>
                      </td>
                      <td>
                        <div>{{value.phone}}</div>
                      </td>
                      <td>
                        <div>{{value.dealerArea}}</div>
                      </td>
                      <td>
                        <div>{{value.time}}</div>
                      </td>
                      <td>
                        <div v-if="value.pStatus==0" class="label label-danger">异常</div>
                        <div v-else="value.pStatus==1" class="label label-success">正常</div>
                      </td>
                      <td>
                        <button type="button" class="btn btn-info btn-xs" @click="Adduser(value.phone)">
                          编辑
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix">

                  <div class="row">
                    <div class="col-xs-3"></div>
                    <div class="col-xs-6" style="text-align: center">
                      <paginate
                        :page-count="lastPage"
                        :page-range="3"
                        :margin-pages="2"
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
            </div>
          </div>
        </section>
      </div>

    </section>
    <!-- /.content -->
  </div>
</template>
<script>
  import {getRecommend} from 'api/recommend'
  import paginate from 'vuejs-paginate'

  export default {
    components: {paginate},
    data() {
      return {
        lastPage: 0,//最后一页
        msg: '',//详细信息
        page: '',//当前页数
        slider: '',//详细页数
        previousPage: '',//上一页
        nextPage: '',//下一页
        keyword: '',//关键字
        items: ''//全部条数
      }
    },
    created() {
      this.pageload(this.page, this.keyword)//页面载入加载数据
    },
    methods: {
      search(page, keyword) {
        this.pageload(page, keyword)
      },
      pages(v) {//v:传入的页数,更改页面
        this.pageload(v)
      },
      pageload(page, keyword) {
        getRecommend('SpecialAccount', page, keyword).then((data) => {//服务器http请求
          this.msg = data.data//详细信息
          this.slider = parseInt(data.paginator.slider)//总页数
          this.page = data.paginator.page//当前页数
          this.previousPage = data.paginator.previousPage//上一页
          this.nextPage = data.paginator.nextPage//下一页
          this.lastPage = data.paginator.lastPage//最后一页
          this.items = data.paginator.items//全部条数
        })
      },
      Adduser (phone) {
        this.$router.push({name: 'AddSpecialAccount', query: {phone:phone}})//添加用户跳转
      }
    }
  }
</script>
