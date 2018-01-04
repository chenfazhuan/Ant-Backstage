<template>
  <div>
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane active" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">Recent Activity</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:;">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                  <p>Will be 23 on April 24th</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading">Tasks Progress</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:;">
                <h4 class="control-sidebar-subheading">
                  Custom Template Design
                  <span class="pull-right-container">
                    <span class="label label-danger pull-right">70%</span>
                  </span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

        </div>
        <!-- /.tab-pane -->
        <!-- Stats tab content -->
        <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
        <!-- /.tab-pane -->
        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h4 class="control-sidebar-heading">皮肤颜色</h4>

            <div class="form-group">
              <ul class="list-unstyled clearfix">
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-blue"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div><span
                      style="display:block; width: 20%; float: left; height: 7px; background: #367fa9;"></span><span
                      class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin">Blue</p></li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-black"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span
                      style="display:block; width: 20%; float: left; height: 7px; background: #fefefe;"></span><span
                      style="display:block; width: 80%; float: left; height: 7px; background: #fefefe;"></span></div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #222;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin">Black</p></li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-purple"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div><span style="display:block; width: 20%; float: left; height: 7px;"
                               class="bg-purple-active"></span><span class="bg-purple"
                                                                     style="display:block; width: 80%; float: left; height: 7px;"></span>
                    </div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin">Purple</p></li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-green"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div><span style="display:block; width: 20%; float: left; height: 7px;"
                               class="bg-green-active"></span><span class="bg-green"
                                                                    style="display:block; width: 80%; float: left; height: 7px;"></span>
                    </div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin">Green</p></li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-red"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div><span style="display:block; width: 20%; float: left; height: 7px;"
                               class="bg-red-active"></span><span class="bg-red"
                                                                  style="display:block; width: 80%; float: left; height: 7px;"></span>
                    </div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin">Red</p></li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-yellow"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div><span style="display:block; width: 20%; float: left; height: 7px;"
                               class="bg-yellow-active"></span><span class="bg-yellow"
                                                                     style="display:block; width: 80%; float: left; height: 7px;"></span>
                    </div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin">Yellow</p></li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-blue-light"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div><span
                      style="display:block; width: 20%; float: left; height: 7px; background: #367fa9;"></span><span
                      class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin" style="font-size: 12px">Blue Light</p>
                </li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-black-light"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span
                      style="display:block; width: 20%; float: left; height: 7px; background: #fefefe;"></span><span
                      style="display:block; width: 80%; float: left; height: 7px; background: #fefefe;"></span></div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin" style="font-size: 12px">Black Light</p>
                </li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-purple-light"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div><span style="display:block; width: 20%; float: left; height: 7px;"
                               class="bg-purple-active"></span><span class="bg-purple"
                                                                     style="display:block; width: 80%; float: left; height: 7px;"></span>
                    </div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin" style="font-size: 12px">Purple Light</p>
                </li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-green-light"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div><span style="display:block; width: 20%; float: left; height: 7px;"
                               class="bg-green-active"></span><span class="bg-green"
                                                                    style="display:block; width: 80%; float: left; height: 7px;"></span>
                    </div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin" style="font-size: 12px">Green Light</p>
                </li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-red-light"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div><span style="display:block; width: 20%; float: left; height: 7px;"
                               class="bg-red-active"></span><span class="bg-red"
                                                                  style="display:block; width: 80%; float: left; height: 7px;"></span>
                    </div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin" style="font-size: 12px">Red Light</p>
                </li>
                <li style="float:left; width: 33.33333%; padding: 5px;">
                  <a
                    data-skin="skin-yellow-light"
                    style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                    class="clearfix full-opacity-hover">
                    <div><span style="display:block; width: 20%; float: left; height: 7px;"
                               class="bg-yellow-active"></span><span class="bg-yellow"
                                                                     style="display:block; width: 80%; float: left; height: 7px;"></span>
                    </div>
                    <div><span
                      style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span><span
                      style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div>
                  </a>
                  <p class="text-center no-margin" style="font-size: 12px;">Yellow Light</p>
                </li>
              </ul>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
  </div>
</template>
<script>
  export default {
    methods: {
      chooseskin() {
        let vm = []
        $('.list-unstyled').on('click', 'li', function () {
          let skin = $(this).children('a').attr('data-skin')
          vm.push(skin)
          for (let i = 0; i < vm.length - 1; i++) {
            $('body').removeClass(vm[i])
            if($('body').hasClass('skin-blue')&&vm[vm.length - 1]!='skin-blue'){
              $('body').removeClass('skin-blue')
            }
          }
          $('body').addClass(vm[vm.length - 1])
        })
      }
    },
    mounted() {
      this.chooseskin();
    }
  }
</script>
