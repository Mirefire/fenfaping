<template>
  <div class="login-main">
        <div class="login-contaer">
        <div class="inputmodel">
             <div class="row-input input-number">
             <input type="text" placeholder="请输入手机号">
             </div>
              <div class="row-input input-ms">
                <div class="ms-item" > 
               <input type="text" placeholder="验证码">
              </div> 
                <div class="ms-item" style="font-size:14px;"> 
                  点击获取验证码
               </div>
             </div>
             <div class="input-ms" style="margin-top:30px;">
             <div class="ms-item " style="font-size:12px;text-align: center;"> 
              已有账户登录
              </div> 
                <div class="ms-item" style="font-size:12px;text-align: center;" @click="question"> 
                  注册遇到问题
               </div>
             </div>
              <div class="row-input">
               <div class="weui-btn weui-btn-suncss">注册</div>
             </div>
               <div class="input-ms">
                   <div class="ms-item" style="font-size:12px;text-align: center;color:#9E9E9E;"> 
                       点击注册表示同意分发平台<a href="">《用户协议》</a>
                   </div>
               </div>
             <div class="row-input">
               <div class="closee">
                 <img src="/static/images/android/drawable-mdpi/close.png" alt="">
               </div>
             </div>
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
  methods: {
     question:function(){
         this.$router.push({path:'/question'});
     }
  }
}
</script>
<style scoped>
 .login-main{
     width: 100%;
     background: #fff;
     height: 100%;
     overflow: hidden;
     position: fixed;
 }
 .login-contaer{
     width: 60%;
     /* border: 1px solid #000; */
     margin: 0 auto;
 }

 .inputmodel{
     margin-top: 50px;
 }
 .row-input{
     width: 100%;
     height: 50px;
 }
 .row-input input{
     /* height: 50px; */
     border: 0 ;
     line-height:30px;
     outline: none;
     border-bottom: 1px solid #f1f1f1;
    
 }
 .input-number input{
    width: 100%;
    
 }
 .input-ms {
    display: -webkit-flex; 
    display: flex;	
    /* for uc */
    display: -webkit-box; 
    display: -ms-flexbox; /* TWEENER - IE 10 */
    width: 100%;
 }
 .input-ms input{
     width: 100%;
 }
 .ms-item{
     -ms-flex: 1; /* IE 10 */
    -webkit-flex: 1; 
    flex: 1; 
    /* for uc */
    -webkit-box-flex: 1; 
    -moz-box-flex: 1; 
    -ms-flex: 1;
     width: 100%;
     line-height: 35px;
 }
 .regiter{
     font-size: 14px;
     line-height: 20px;
 }
 .weui-btn-suncss{
     background: #0084C7;
     color: #fff;
     height: 40px;
     line-height: 40px;
      font-size: 16px;
      border-radius: 20px;
 }

 .closee{
     width: 100%;
     position: fixed;
     bottom: 20px;
     left: 50%;
 }
</style>
