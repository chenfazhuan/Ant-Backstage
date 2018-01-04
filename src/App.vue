<template>
  <!--<div class="wrapper" v-if="">-->
  <!--<router-view></router-view>-->
  <!--</div>-->
  <div class="wrapper">
    <AntHeader v-show="user">
    </AntHeader>
    <AntAside v-show="user"></AntAside>
    <keep-alive>
      <router-view @userSignIn="userSignIn" @userin="userin">
      </router-view>
    </keep-alive>
    <!--<AntFooter></AntFooter>-->
    <AntAsideTwo v-show="user"></AntAsideTwo>
  </div>
</template>

<script>

  import AntHeader from './components/Header'
  import AntAside from './components/Aside'
  import AntAsideTwo from './components/AsideTwo.vue'

  export default {
    data() {
      return {
        user: false
      }
    },
    components: {
      AntHeader, AntAside, AntAsideTwo
    },
    watch: {
      '$route'(to, from) {
        if (this.$store.state.user && this.$route.path == '/login') {//登录成功后不能退到登录页面
          this.$router.push('/')
        }
      }
    },
    name: 'app',
//    computed: {
//      user() {
//        //因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
//        if (typeof(this.$store.state.user) != 'object'&&typeof(this.$store.state.user) != 'undefined') {
//          return true
//        }
//        else {
//          return false
//        }
//      }
//    },
    methods: {
      userSignIn(data) {
        this.$store.state.user = data
        this.$store.commit('isLogin', data);
      },
      userin(data) {
        this.user = data
      },
//      fetchdata(){
//        if (this.$route.path == '/home') {
//          history.pushState(null, null, document.URL);//禁止后退
//          window.addEventListener('popstate', function () {
//            history.pushState(null, null, document.URL);
//          });
//        }
//      }
    },
//    watch: {
//      '$route': 'fetchdata'
//    },
    created() {
      if (typeof(this.$store.state.user) != 'object' && typeof(this.$store.state.user) != 'undefined') {
        this.user = true
      }
      else {
        this.user = false
      }
    }

  }
</script>


<style>

</style>
