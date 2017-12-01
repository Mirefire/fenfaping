<template>
  <div class="page">
     <div class="rw-page">
      <div class="rw-page-title">任务标题:</div>
      <div class="rw-page-main">
          倒计时：还有2000个微信扫码任务继续完成 有意者速领！
      </div>
       <div class="rw-page-title">任务标题:</div>
        <div class="rw-page-main">
         截止10.18日晚急需线下扫码2000名活跃性用户，限地点南京，限小学生家长或者小学生，一个用户20元酬劳，按人头付
      </div>
      <div class="rw-page-rw">
           <div class="weui-form-preview">
          
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">任务量:2000</label>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">当前剩余：1158</label>
                   
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">任务截止时间：2017.10.17</label>
                   
                </div>
            </div>
            
        </div>
      </div>
    <div class="rw-input-mian">
        <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">领取量：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number"  placeholder="请输入领取量"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">结算量：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number"  placeholder="请输入结算量"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">完成时间：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" id="showDatePicker"  placeholder="请输入完成时间"/>
                </div>
            </div>
            <div class="weui-flex rw-weito">
            <div class="weui-flex__item">
                委托方：晓红
            </div>
            <div class="weui-flex__item">
                受托方：
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text"  placeholder="请输入姓名"/>
                </div>
                </div>
           </div>
           <div class="weui-flex rw-weito">
            <div class="weui-flex__item">
                
            </div>
            <div class="weui-flex__item">
                受托方联系方式：
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text"  placeholder="请输入电话"/>
                </div>
                </div>
           </div>

             <div class="weui-flex">
            <div class="weui-flex__item xieyi">
               任务领取协议
            </div>
            </div>
              <div class="weui-flex">
            <div class="weui-flex__item btn">
               <div class="butn-sure" id='showIOSDialog2'>确定</div>
            </div>
            </div>
      </div>
     </div>
      <div id="dialogs">
       <div class="js_dialog" id="iosDialog2" style="display: none;">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui_dialog_title">系统提示</div>

                <div class="weui-dialog__bd">系统正在审核您申请的任务申请单请等待系统回复。</div>

                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">确定</a>
                </div>
            </div>
        </div>
         </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted:function(){
       var iosDialog2 = $('#iosDialog2');
         $('#showIOSDialog2').on('click', function(){
            iosDialog2.fadeIn(200);
        });
       $('#dialogs').on('click', '.weui-dialog__btn', function(){
            $(this).parents('.js_dialog').fadeOut(200);
        });
       $('#showDatePicker').on('click', function () {
        weui.datePicker({
            start: 1990,
            end: new Date().getFullYear(),
            onChange: function (result) {
                document.getElementById('showDatePicker').value = result[0]+'-'+result[1]+'-'+result[2];
                console.log(result);
            },
            onConfirm: function (result) {
                console.log(result);
            }
        });
    });
  }
};

</script>
<style scoped>
 .rw-page{
     font-size: 16px;
       background: #fff;
      margin: 10px;
      border-radius: 10px;
      padding: 15px;
 }
 .rw-page-title{
     height: 40px;
     line-height: 40px;
     width: 100%;
 }

 .rw-page-main{
     margin: 10px 0;
     padding: 0 10px;
     line-height: 30px;
 }

 .rw-input-mian{
   /* font-size: 16px; */
 }
 .rw-weito{
     margin: 10px 0;
     padding-left:10px; 
 }
 .xieyi{
     height: 30px;
     line-height: 30px;
     text-align: center;
     color: #0084FF;
 }
 .btn{
     height: 40px;
     width: 100%;
     line-height: 40px;
     text-align: center;
     margin-top: 10px;
 }
 .butn-sure{
     width: 120px;
     height: 40px;
     color: #fff;
     background: #333333;
     margin: 0 auto;
     /* text-align: center; */
 }
 .weui-dialog{
     border-radius:  10px;
 }
 .weui-dialog__ft,.weui_dialog_title{
     height: 50px;
     line-height: 50px;
     background: #E5E5E5;
     font-size: 18px;
 }
 .weui-dialog__bd{
     padding: 20px;
     line-height: 30px;
     color: #000;
 }
</style>

