<template>
  <div class="hello content-wrapper" style="height: 100%">
    <div class="content-header">
      <el-row>
        <el-col :span="24">

        </el-col>
      </el-row>
    </div>
    <div class="content container-fluid table-responsive">

      <el-row>
        <el-col :span="8">
          <div class="grid-content ">
            <div class="grid-content " style="text-align: left;margin-bottom: 20px">
              <div>
                <el-button type="primary" plain @click='clicKistext(1)'>文字品牌</el-button>
                <el-button type="primary" plain @click='clicKistext(0)'>图文品牌</el-button>
              </div>
            </div>
            <el-input
              placeholder="输入品牌搜索"
              v-model="filterText">
            </el-input>

            <el-tree
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              default-expand-all
              @node-click="handleNodeClick"
              :filter-node-method="filterNode"
              ref="tree2">
            </el-tree>
          </div>
        </el-col>
        <el-col :span="16">

          <div class="grid-content ">
            <div style="padding: 0 20px">
              <h4 style="margin-bottom: 28px"><span style="color: #67C23A">{{lickbarndID.name}}</span>机器人列表(<span
                style="color: #EB9E05">{{way}}</span>):</h4>
              <el-table
                :data="tableData"
                border
              >
                <el-table-column
                  type="index"
                  label="优先级"
                  align="center"
                  width="150">
                </el-table-column>

                <el-table-column
                  prop="robotName"
                  label="机器人列表">
                </el-table-column>
                <el-table-column
                  width="200"
                  align="center"
                  label="状态">
                  <template scope="scope">
                    <el-tag type="success" v-if="scope.row.status==1">启用</el-tag>
                    <el-tag type="danger" v-if="scope.row.status==0">禁用</el-tag>
                    <el-tag type="danger" v-if="scope.row.change==0" style="display: none">0</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="400"
                  align="center">
                  <template scope="scope">
                    <el-button type="info" @click="operation(scope)" size="small" style="margin-right: 20px">切换状态
                    </el-button>
                    <el-button-group>
                      <el-button @click="movedown(scope)" type="text"
                                 style="padding: 10px;margin-right: 10px;color: #878D99"><i
                        class="el-icon-arrow-down"></i></el-button>
                      <el-button @click="moveup(scope)" type="text"
                                 style="padding: 10px;margin-right: 10px;color: #878D99"><i
                        class="el-icon-arrow-up"></i></el-button>
                    </el-button-group>
                  </template>
                </el-table-column>

              </el-table>
              <el-button v-if="this.tableData.length" style="float: right;margin-top: 20px" type="primary" @click="onsubmit">提交
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {GetRobotDispath} from 'api/recommend';
  import {PostRobotDispath} from 'api/recommend';
  //  import 'element-ui/lib/theme-chalk/display.css';
  export default {
    name: 'HelloWorld',
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    data() {
      return {
        way: '文字',
        //品牌列表的数据
        filterText: '',//模糊查询
        data2: [
          {
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '崔健',
              children: [{
                id: 9,
                label: '佳俊'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }], //品牌列表的数据
        defaultProps: { //props 的值
          children: 'childs',
          label: 'name'
        },
        lickbarndID: "", //点击品牌时的数据
        istext: 1,
        //机器人列表的数据
        tableData: [
//          {
//            robotName: '华夏机器人',
//            status: 1,
//            change: 1
//          },
//          {
//            robotName: '查博士机器人',
//            status: 1,
//            change: 1
//
//          },
//          {
//            robotName: '蚂蚁女王机器人',
//            status: 0,
//            change: 1
//          }
        ],
      };
    },
    methods: {
      onsubmit() {
        let level = ''
        for (let i = 0; i < this.tableData.length; i++) {
          level += `${this.tableData[i].id}:${this.tableData[i].status},`
        }
        let i = level.lastIndexOf(',')
        level = level.slice(0, i)
        var data = 'num=' + 1 + '&brandId=' + this.lickbarndID.id + '&level='+level
//        console.log(data)
        PostRobotDispath(data).then((res)=>{
          if(res.responseCode==200){
            this.$notify({
              title: '成功',
              message: '提交成功',
              type: 'success'
            });
          }
          else{
            this.$notify.error({
              title: '失败',
              message: '提交失败'
            });
          }
        })
      },
      moveup(data) {
        let i = data.$index
        if (1 <= i) {
          let t = {};
          t = this.tableData[i]
          this.tableData[i] = this.tableData[i - 1]
          this.tableData[i - 1] = t
          this.tableData[i].change++
        } else {
          return
        }
      },
      movedown(data) {
        let i = data.$index

        if (i < this.tableData.length - 1) {
          let t = {};
          t = this.tableData[i]
          this.tableData[i] = this.tableData[i + 1]
          this.tableData[i + 1] = t
          this.tableData[i].change++
        } else {
          return
        }
      },
      operation(state) {
        this.tableData[state.$index].status = this.tableData[state.$index].status == 1 ? 0 : 1
      },
      //机器人列表的方法
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      //品牌列表的方法
      filterNode(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1;
      },
      handleNodeClick(data) { //选中的品牌列表返回一组json 包括id
        if (!data.childs) {
          this.lickbarndID = data;
          GetRobotDispath(this.lickbarndID.id).then((res) => {
//            console.log(res)
            this.tableData = res.data
          })
          this.filterText = ''
        } else {
          return
        }

      },
      clicKistext(e) {
        this.filterText = ''
        this.way = ''
        this.tableData=[]
        this.lickbarndID = ''
        if (e == 0) {
          this.istext = 0;//图文
          this.way = '图文'
          axios.post('http://api.mayinvwang.com/webView/newBrand', 'is_text=0').then(
            (res) => {
//              console.log(res)
              if (res.data.status == '1') {
                this.data2 = []
                this.data2 = res.data.list
              } else {
                this.data2 = []
              }

            }
          )
        } else {
          this.istext = 1;
          this.way = '文字'
//          console.log(this.istext);
          axios.post('http://api.mayinvwang.com/webView/newBrand', 'is_text=1').then(
            (res) => {
//              console.log(res);
              if (res.data.status == '1') {
                this.data2 = []
                this.data2 = res.data.list
              } else {
                this.data2 = []
              }
            }
          )
        }
      }

    },
    mounted() {
      let params = new URLSearchParams();
      params.append('is_text', '1');
      axios.post('http://api.mayinvwang.com/webView/newBrand', params).then(
        (res) => {
//          console.log(res)
          if (res.data.status == '1') {
            this.data2 = res.data.list
          } else {
            this.data2 = []
          }
        }
      )
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    height: 100%;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
