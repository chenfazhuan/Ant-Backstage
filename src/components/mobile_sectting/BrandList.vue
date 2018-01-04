<template>
  <div class="content-wrapper">
    <section class="content-header">
      <h1>
        机器人列表
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">机器人列表</li>
      </ol>
    </section>
    <section class="content container-fluid table-responsive">

      <!--主要内容-->
      <el-table
        ref="singleTable"
        highlight-current-row
        @current-change="handleCurrentChange"
        border
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">

        <!--多选按钮-->
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>

        <!--增加序列-->
        <el-table-column
          type="index"
          label="序列"
          width="50">
        </el-table-column>

        <!--标题-->
        <el-table-column
          sortable
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="number"
          label="查询次数">
        </el-table-column>
        <el-table-column
          label="操作"
          width="150">
          <template scope="scope">
            <button @click=""  class="btn btn-info" @click.stop="setCurrent(tableData[1])">查看</button>
            <button  class="btn btn-info" @click.stop="setCurrent()">编辑</button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>

</template>

<script>
  export default {
    methods: {
      tableRowClassName(row, index) {
        if (index % 2 != 0) {
          return 'info-row';
        }
        return '';
      },

      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    },
    data() {
      return {
        currentRow: null,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市',
          number:1
        }, {
          date: '2016-05-04',
          name: '王小虎1',
          address: '上海市',
          number:2
        }, {
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市',
          number:3
        }, {
          date: '2016-05-03',
          name: '王小虎3',
          address: '上海市',
          number:4
        }]
      }
    },

  }
</script>

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
