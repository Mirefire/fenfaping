<template>
  <div class="banks">
      <div class="banks-my">
         <div class="banks-number">1854986XXxX444</div> 
         <div class="banks-change">更换</div>
         <div class="banks-detele">删除</div> 
      </div>
       <div class="banks-list">
         <div class="banks-name">支付宝账号添加</div> 
         <div class="banks-icon" @click="add_banks">
             <img src="/static/images/android/drawable-hdpi/add_alipay.png" alt="">
        </div> 
      </div>
  </div>
</template>
<script>
export default {
  data () {
      return {
          
      }
  },
  methods:{
      add_banks:function(){
          this.$router.push({path:'/addbanks'});
      }
  }
}
</script>
<style scoped>
  .banks{
      background: #fff;
      height: 100%;
      width: 100%;
      position: fixed;
      overflow-x:hidden; 
  }
  .banks-list{
      width: 100%;
      height: 80px;
      background: #000;
      color: #fff;
      line-height: 80px;
      position: relative;
      margin-top: 10px;

  }
  .banks-my{
       width: 100%;
      height: 80px;
      background: #000;
      color: #fff;
      line-height: 80px;
      position: relative;
      margin-top: 10px;
  }
  .banks-number{
    position: absolute;
    left: 0;
    height: 100%;
    width: 60%;
    background: #0066B3 ;
   padding-left:10px; 
  }
  .banks-change {
      height: 100%;
      width: 20%;
      background: #5DA729 ;
      right: 20%;
      position: absolute;
       text-align: center;
  }
  .banks-detele{
      text-align: center;
      height: 100%;
      width: 20%;
      background: #E60012 ;
      right: 0;
      position: absolute;
  }
  .banks-name{
      position: absolute;
      left: 10px;
  }
  .banks-icon{
      position: absolute;
      right: 15px;
  }
  .banks-icon img{
      height: 30px;
      width: 30px;
      vertical-align: middle;
  }
</style>
