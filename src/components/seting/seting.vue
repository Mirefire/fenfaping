<template>
  <div class="seting">
         <a class="weui-cell weui-cell_access" href="javascript:;">  
                <div class="weui-cell__bd">
                    <p>我的资料</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;" @click="password">
                
                <div class="weui-cell__bd">
                    <p>密码修改</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell" href="javascript:;">
            </a>
            <div class="weui-btn seting-btn">退出登录</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
      password:function(){
          this.$router.push({path:"/password"});
      }
  }
};
</script>
<style scoped>
.seting{
    position: fixed;
    background: #fff;
    height: 100%;
    width: 100%;
    overflow: hidden;
}
 .weui-cell_access{
     line-height: 50px;
 }
 .seting-btn{
     height: 50px;
     width: 80%;
     margin: 0 auto;
     background: #000;
     color: #fff;
     border-radius: 10px;
     margin-top: 60px;
 }
</style>
