<!-- lin-vue -->
<template>
 <div class="certification">
    <div class="certification-items itemsf">
       <div class="lefts" @click="pickf">发布认证</div>
        <div class="rights">已认证</div>
    </div>
    <div class="certification-items itemsx">
         <div class="lefts" @click="pickx">分销认证</div>
        <div class="rights" >认证</div>
    </div>
    <div class="certification-items itemsz">
         <div class="lefts">身份认证</div>
        <div class="rights" @click="pickz">认证</div>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  //组件
  components: {},

  //方法
  methods: {
      pickz:function(){
        this.$router.push({path:'/addz'})
      },
      pickx:function(){
          this.$router.push({path:'/addx'})
      },
      pickf:function(){
           this.$router.push({path:'/addf'})
      }
  },
  //准备创建组件
  beforeCreate() {},
  //组件创建完毕
  created() {},
  //组件的模板准备挂载到DOM
  beforeMount() {},
  //挂载完毕
  mounted() {},
  //准备更新了
  beforeUpdate() {},
  //更新完成
  updated() {},
  //准备销毁
  beforeDestroy() {},
  //销毁完成
  destroyed() {}
};
</script>

<style scoped>
  .certification-items{
      height: 90px;
      width: 100%;
      color: #fff;
      position: relative;
      line-height: 90px;
  }
  .certification-items .lefts{
      position: absolute;
      left: 10px;
  }
   .certification-items .rights{
      position: absolute;
      right: 10px;
  }
  .itemsf{
      background: #0084C8;
  }
  .itemsx{
      background:#5DA729; 
  }
  .itemsz{
      background:#FE3C3C;
  }
</style>