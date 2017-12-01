<template>
  <div class="login-main">
        <div class="login-contaer">
        <div class="logo">
            <img src="/static/images/android/drawable-mdpi/logo.png" alt="">
        </div>
        <div class="inputmodel">
             <div class="row-input input-number">
             <input type="text" placeholder="请输入手机号">
             </div>
              <div class="row-input input-ms">
                <div class="ms-item"> 
               <input type="text" placeholder="验证码">
              </div> 
                <div class="ms-item"> 
                  点击获取验证码
               </div>
             </div>
           <div class="row-input ">
              <div class="regiter"  @click="register">用户注册</div> 
             </div>
              <div class="row-input">
               <div class="weui-btn weui-btn-suncss">登录</div>
             </div>
              <div class="row-input">
               <div class="weui-btn weui-btn_primary">微信登录</div>
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
  methods:{
      register:function(){
          this.$router.push({path:'/register'});
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
 .logo{
     width: 100%;
     text-align: center;
     margin-top: 30px;
 }
 .logo img{
    
 }
 .inputmodel{
     margin-top: 20px;
 }
 .row-input{
     width: 100%;
     height: 40px;
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
    height: 50px;
    line-height: 50px;
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
     font-size: 14px;
     width: 100%;
     height: 50px;
     height: 50px;
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
      margin-top: 10px;
 }
 .weui-btn_primary{
     height: 40px;
     line-height: 40px;
     font-size: 16px;
     border-radius: 20px;
      margin-top: 10px;
 }
 .closee{
     width: 100%;
     position: fixed;
     bottom: 20px;
     left: 50%;
 }
</style>
