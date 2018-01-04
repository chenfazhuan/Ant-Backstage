<template>
    <div>
        <div>{{id}}</div>
    </div>
</template>
<script>
    export default {
        data() {
          return{
            id:''
          }
        },
      created: function() {
       this.id = this.$route.query.id;
      }
    }
</script>
