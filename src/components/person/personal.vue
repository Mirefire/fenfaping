<template>
  <div class="personal-main">
<div class="personal-max">
    <div class="personal-image">
      <div class="image-logo">
          <img src="" alt="">
      </div>
      <div class="image-mod">修改头像</div>
    </div>
     <div class="personal-name">
        <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">用户名</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入用户名"/>
                </div>
            </div>
       </div>
     <div class="personal-btn">
         <div class="weui-btn btn-new-true">保存</div>
     </div>
     </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.personal-main {
  position: fixed;
  background: #fff;
  height: 100%;
  width: 100%;
}
.personal-max {
  width: 80%;
  margin: 0 auto;
}
.personal-image {
  text-align: center;
}
.image-logo {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: #ccc;
  margin: 0 auto;
  margin-top: 60px;
}
.image-mod {
  font-size: 16px;
  line-height: 40px;
  width: 100%;
}
.personal-name {
  margin-top: 50px;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
}
.personal-btn {
  width: 100%;
  margin-top: 60px;
}
.btn-new-true {
  height: 50px;
  line-height: 50px;
  background: #000000;
  color: #fff;
  border-radius: 10px;
}
</style>
