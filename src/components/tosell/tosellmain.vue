<!-- lin-vue -->
<template>
 <div>
<div class="tosellmain">
<div class="tosellmain-header">
    <div class="tosell-tab">
        <div class="tosell-tab-item" v-bind:class="{active_order:soell}" @click="sell">我出售的</div>
        <div class="tosell-tab-item" v-bind:class="{active_order:buyed}" @click="buyeds">已成交</div>
    </div>
</div>
<div class="tosell-content">
    <component v-bind:is="view"></component>
</div>
</div>
 </div>
</template>

<script>
import Tosell from '@/components/tosell/tosell'
import Transact from '@/components/tosell/transact'
export default {
  data() {
    return {
        view:'v-a',
        soell:true,
        buyed:false
    };
  },

  //组件
  components: {
      'v-a':Tosell,
      'v-b':Transact
  },

  //方法
  methods: {
     sell:function(){
         this.soell=true
         this.buyed =false
         this.view ='v-a'
     },
     buyeds:function(){
         this.soell=false
         this.buyed =true
         this.view ='v-b'
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
.tosellmain-header {
  width: 100%;
  height: 60px;
  background: #fff;
  line-height: 60px;
}
.tosell-tab {
  width: 100%;
  height: 100%;
  text-align: center;
  display: -webkit-flex;
  display: flex;
  /* for uc */
  display: -webkit-box;
  display: -ms-flexbox; /* TWEENER - IE 10 */
}
.tosell-tab-item{
    -ms-flex: 1; /* IE 10 */
    -webkit-flex: 1; 
    flex: 1; 
    /* for uc */
    -webkit-box-flex: 1; 
    -moz-box-flex: 1; 
    -ms-flex: 1;
}
</style>