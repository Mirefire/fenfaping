<template>
  <div class="page">
      <div class="page__bd">
        <div class="rw_header">
           <div class="rw_header_title">倒计时：还有2000个微信扫码任务继续完成 有意者速领！</div>
             <div class="weui-flex rw_header_bottom">
            <div class="weui-flex__item" style="text-align: left;">6小时前发布</div>
            <div class="weui-flex__item" style="text-align: right;">酬劳：20/人</div>
         </div>
           </div>
             <div class="rw_main">
               <div class="rw-image">
                   <img src="/static/images/img/baner1.jpg" alt="">
               </div>
               <div class="rw-comtent">
                   <div class="rw-comtent-header">截止10.18日晚急需线下扫码2000名活跃性用户，限地点南京，限小学生家长或者小学生，一个用户20元酬劳，按人头，限小学生家长或者小学生</div>
                   <div class="rw-comtent-main">
                        <div class="weui-form-preview">
                        <div class="weui-form-preview__bd">
                            <div class="weui-form-preview__item">
                                <span class="weui-form-preview__value">任务量：2000</span>
                            </div>
                            <div class="weui-form-preview__item">
                               
                                <span class="weui-form-preview__value">当前剩余：1158</span>
                            </div>
                            <div class="weui-form-preview__item">
                                <span class="weui-form-preview__value">任务截止时间：2017-01-12</span>
                            </div>
                        </div>
                      
                    </div>
                   </div>
               </div>
             </div>
      </div>
      <div class="rw-footer"  @click="rw">领取任务</div>
  </div>
</template>
<script >
export default {
    data(){
        return{}
    },
    methods:{
        rw:function(){
           this.$router.push({path:'/rw'});
        }
    }
};
</script>
<style scoped>
.rw_header {
  background: #fff;
  padding: 10px;
}
.rw_header .rw_header_title {
  line-height: 30px;
  font-size: 18px;
  font-weight: 600;
}
.rw_header_bottom {
  width: 100%;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
}
.rw-image {
  width: 100%;
}
.rw-image img {
  height: 150px;
  width: 100%;
}
.rw-comtent{
    font-size: 18px;
    padding: 10px;
    background: #fff;
}
.rw-footer{
    position: fixed;
    height: 50px;
    color: #fff;
    bottom: 0;
    line-height: 50px;
    text-align: center;
    background: #0084C8;
    width: 100%;
    display: inline;
    font-size: 18px;
}
</style>
