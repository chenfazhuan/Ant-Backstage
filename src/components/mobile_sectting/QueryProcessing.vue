<template>
  <div class="content-wrapper" style="background: #fff">
    <h2>创建模态框（Modal）</h2>
    <!-- 按钮触发模态框 -->
    <div class="clear">
      <label for="icon" class="col-sm-2 control-label">图标</label>
      <div class="col-sm-7">
        <i data-bv-icon-for="icon" id="icon_i" class="form-control-feedback fa fa-clone" style="right:15px"></i>
        <input type="text" readonly class="form-control" id="icon" name="icon" placeholder="图标">
      </div>
      <div class="col-sm-2">
        <router-link to="/QueryProcessing/icon">
          <button type="button" id="selectIcon" class="btn btn-primary" @click="pd" data-toggle="modal" data-target="#modal-default">
            <i class="fa fa-hand-pointer-o">&nbsp;选择图标</i>
          </button>
        </router-link>
      </div>
    </div>
    <!-- 模态框（Modal） -->
    <router-view></router-view>
  </div>
</template>
<script>

  export default {
    methods: {
      pd() {
        $('body').css({'overflow-y':'hidden'})
      }

    }
  }
</script>
<style>
  .clear::after {
    content: "";
    display: block;
    clear: both
  }
</style>
