<!-- lin-vue -->
<template>
 <div class="Commission">
    <div class="Commission-header">
        <div class="header-title">
         未领取佣金
        </div>
        <div class="header-center">
          ￥ <span> 588.5</span>
        </div>
        <div class="header-bottom-btn">
           <div class="weui-btn btn-moeny" id="trush">全部提现</div> 
        </div>
    </div>
    <div class="center-header">
        <div class="center-header-tab">
            <div class="center-tab-items" v-bind:class="{sion_active:nexts}" @click="picks">商品收益</div>
            <div class="center-tab-items" v-bind:class="{sion_active:agien}" @click="links">任务收益</div>
        </div>
    </div>
    <div class="content-main">
       <component :is="componens"></component>
    </div>
    
     <div class="js_dialog" id="iosDialog2" style="display: none;">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__bd">
                   <div class="nuber">
                   <span>-</span>    <input type="text"> <span>+</span>
                   </div>
                   <div class="message">
                       请输入要提现的金额，系统将在审核完成后打入您的支付宝账户
                   </div>
                </div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">确定</a>
                </div>
            </div>
        </div>
   
 </div>
 
</template>

<script>
import Earnings from '@/components/mission/earnings'
import Merchandise from '@/components/mission/merchandise'
export default {
  data() {
    return {
        nexts:true,
        agien:false,
        componens:'v-a'
    };
  },

  //组件
  components: {
      'v-a':Earnings,
      'v-b':Merchandise
  },

  //方法
  methods: {
      picks:function(){
         this.nexts = true
         this.agien =false 
         this.componens='v-a'
      },
      links:function(){
          this.nexts = false
         this.agien =true
         this.componens='v-b'
      },
    
  },
  //准备创建组件
  beforeCreate() {},
  //组件创建完毕
  created() {},
  //组件的模板准备挂载到DOM
  beforeMount() {},
  //挂载完毕
  mounted() {
      var $iosDialog2 = $('#iosDialog2');
       $('#trush').on('click', function(){
            $iosDialog2.fadeIn(200);
        });
        $('.weui-dialog__btn').on('click', function(){
            $(this).parents('.js_dialog').fadeOut(200);
        });
  },
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
.Commission-header {
  height: 200px;
  background: #1b1b1f;
  color: #ffffff;
  width: 100%;
  overflow: hidden;
}
.header-title {
  height: 30px;
  width: 100%;
  text-align: center;
  line-height: 30px;
  margin-top: 30px;
  color: #9B9B9B;
}
.header-center {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  
}
.header-center span{
    font-size: 34px;
}
.header-bottom-btn {
  width: 100%;
   height: 40px;
  line-height:40px;
  text-align: center;
}
.btn-moeny {
  height: 40px;
  line-height:40px;
  background: #fff;
  color: #1b1b1f;
  width: 30%;
}
.center-header{
    height: 50px;
    width: 100%;
    background: #fff;
    line-height: 50px;
}
.center-header-tab{
     width: 100%;
    height: 100%;
    text-align: center;
    display: -webkit-flex;
    display: flex;
    /* for uc */
    display: -webkit-box;
    display: -ms-flexbox; /* TWEENER - IE 10 */
}
.center-tab-items{
     -ms-flex: 1; /* IE 10 */
    -webkit-flex: 1; 
    flex: 1; 
    /* for uc */
    -webkit-box-flex: 1; 
    -moz-box-flex: 1; 
    -ms-flex: 1;
}
.sion_active{
    height: 100%;
    border-bottom: 2px solid #1b1b1f;
}
.nuber{
line-height: 40px;
}
.nuber input{
    line-height: 40px;
    border: 0 ;
    border-bottom: 1px solid #ABACAC;
    outline: none;
}
.message{
    line-height: 25px;
    margin-top: 6px;
}
</style>