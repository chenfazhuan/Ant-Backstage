<template>
  <div class="container container-table">
    <div class="row vertical-10p">
      <div class="container">
        <img src="../../assets/img/logo.png" class="center-block logo">
        <div class="text-center col-md-4 col-sm-offset-4">
          <!-- login form -->
          <div class="ui form loginForm">

            <div class="input-group" style="width: 100%">
              <span class="input-group-addon"><i class="fa fa-user"></i></span>
              <input class="form-control" name="username" placeholder="输入用户名" type="text" v-model="name">
            </div>

            <div class="input-group" style="width: 100%">
              <span class="input-group-addon"><i class="fa fa-lock"></i></span>
              <input class="form-control" name="password" placeholder="输入密码" type="password" v-model="pwd">
            </div>
            <div class="row">

              <div class="col-xs-12">
                <button v-bind:class="'btn btn-primary btn-lg'" @click="isLogin">登&nbsp;录</button>
              </div>
            </div>

          </div>

          <!-- errors -->
          <div v-if=response class="text-red"><p>{{response}}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        state: false,
        name: '',
        pwd: '',
        response: '',
      }
    },
    methods: {
      alocked: function () {
        this.state = !this.state;
      },
      isLogin: function () {
        if (this.name == '123' & this.pwd == '123') {
          this.$emit('userSignIn', this.name);
          this.$emit('userin', true);
          sessionStorage.setItem('userName', this.name)
          this.$router.push({path: '/'})
          if (this.state) {
            localStorage.setItem('userName', this.name)
            localStorage.setItem('upwd', this.pwd)
          }
          window.location.reload();
        } else {
          this.response = '请输入正确的账号密码'
          this.name = ''
          this.pwd = ''
        }
      }
    },
    created() {
      if (localStorage ['userName'] && localStorage ['upwd']) {
        this.name = localStorage ['userName']
        this.pwd = localStorage ['upwd']
      }
    }
  }
</script>
<style scoped>
  html, body, .container-table {
    height: 100%!important;
    background-color: #222d32 !important;
  }

  .container-table {
    display: table;
    color: white;
  }

  .vertical-center-row {
    display: table-cell;
    vertical-align: middle;
  }

  .vertical-20p {
    padding-top: 20%;
  }

  .vertical-10p {
    padding-top: 10%;
  }

  .logo {
    width: 15em;
    height: auto;
    padding: 3em;
  }

  .loginForm .input-group {
    padding-bottom: 1em;
    height: 4em;
  }

  .input-group input {
    height: 4em;
  }
</style>
