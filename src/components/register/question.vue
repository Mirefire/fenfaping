<template>
  <div class="login-main">
        <div class="login-contaer">
        <div class="inputmodel">
             <div class="row-input">
               <div class="question-title">
                 <h3>登录问题排查</h3>  
               </div>
             </div>
              <div class="question-model">
                <ul>
                    <li>
                        <div class="index0">1.</div>
                        <div class="question">检查手机号是否正确</div>
                    </li>
                     <li>
                        <div class="index0">2.</div>
                        <div class="question">检查密码是否符合规格</div>
                    </li>
                     <li>
                        <div class="index0">4.</div>
                        <div class="question">检查手机号是否正确</div>
                    </li>
                     <li>
                        <div class="index0">5.</div>
                        <div class="question">检查手机号是否正确</div>
                    </li>
                </ul>
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
     width: 80%;
     /* border: 1px solid #000; */
     margin: 0 auto;
 }

 .inputmodel{
     margin-top: 50px;
 }
 .question-title{
     width: 100%;
     text-align: center;
     border-bottom: 1px solid #f1f1f1;
    height: 50px;
     /* font-weight: 550; */
 }
 .question-model{
     margin: 20px;
 }
 .question-model ul li{
    color: #666666;
     height: 25px;
     line-height: 25px;
     font-size: 16px;
 }
 .question-model ul li .index0{
     float: left;
 }
  .question-model ul li .question{
     float: left;
     margin-left: 10px;
 }
 .row-input{
     width: 100%;
     height: 50px;
 }

 .input-ms {
    display: -webkit-flex; 
    display: flex;	
    /* for uc */
    display: -webkit-box; 
    display: -ms-flexbox; /* TWEENER - IE 10 */
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
 
 .closee{
     width: 100%;
     position: fixed;
     bottom: 20px;
     left: 50%;
 }
</style>
