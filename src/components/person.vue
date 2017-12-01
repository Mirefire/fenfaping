<template>
  <div id="person">
    <div class="person-top">
      <div class="person-img" @click="person">
        <img src="/static/images/img/baner1.jpg" alt="">
      </div>
      <div class="person-name">
       <div class="loginbtn" @click="login">未登录</div> 
        </div>
    </div>
    <div class="person-main">
     
      <a class="weui-cell weui-cell_access" href="javascript:;" @click="order">
               <div class="weui-cell__hd person-img-s">
                 <img src="/static/images/android/drawable-mdpi/user_order.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <p>订单管理</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;" @click="tosell">
                <div class="weui-cell__hd person-img-s">
                 <img src="/static/images/android/drawable-mdpi/user_market.png" alt="">
                 </div>
                <div class="weui-cell__bd">
                    <p>销售管理</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;" >
                <div class="weui-cell__hd person-img-s">
                  <img src="/static/images/android/drawable-mdpi/user_sys.png" alt="">
                 </div>
                <div class="weui-cell__bd">
                    <p>系统信息</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;" @click="Certification">
                <div class="weui-cell__hd person-img-s">
                 <img src="/static/images/android/drawable-mdpi/user_aut.png" alt="">
                 </div>
                <div class="weui-cell__bd">
                    <p>我的认证</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;" @click="banks">
                <div class="weui-cell__hd person-img-s">
                  <img src="/static/images/android/drawable-mdpi/alipay.png" alt="">
                 </div>
                <div class="weui-cell__bd">
                    <p>我的支付宝</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;" @click="commiss">
                <div class="weui-cell__hd person-img-s" style="width:20px;">
                  <img src="/static/images/android/drawable-mdpi/mon.png" alt="">
                 </div>
                <div class="weui-cell__bd">
                    <p>我的佣金</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
             <a class="weui-cell weui-cell_access" href="javascript:;" @click="seting">
                 <div class="weui-cell__hd person-img-s">
                 <img src="/static/images/android/drawable-mdpi/user_set.png" alt="">
                 </div>
                <div class="weui-cell__bd">
                    <p>设置</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
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
    login:function(){
      this.$router.push({path:"/login"})
    },
    person:function(){
      this.$router.push({path:"/personal"})
    },
    seting:function(){
      this.$router.push({path:"/seting"})
    },
    banks:function(){
      this.$router.push({path:"/mybanks"})
    },
    order:function() {
      this.$router.push({path:"/order"})
    },
    tosell:function(){
      this.$router.push({path:"/tosellmain"})
    },
    commiss:function(){
      this.$router.push({path:"/commission"})
    },
    Certification:function(){
       this.$router.push({path:"/certification"})
    }
  }
};
</script>
<style scoped>
.person-top {
  height: 120px;
  width: 100%;
  background: #1f1b1b;
  padding-top: 10px;
}
.person-img {
  height: 70px;
  width: 70px;
  /* background: #fff; */
  border-radius: 50%;
  margin: 0 auto;
  border: none;
}
.person-img img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-position: center;
}
.person-name {
  color: #fff;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.loginbtn{
  height: 100%;
}
.person-main{
 background: #fff;
}
.weui-cell_access{
  height: 50px;
}
.person-img-s{
    margin-right: 15px;
    text-align: center;
}
.person-img-s img{
  /* height: 35px;
  width: 30px; */
   vertical-align:middle;
}
person-img-t img{
  /* /* height: 25px; */
  width: 30px; 
  vertical-align:middle;
}
</style>