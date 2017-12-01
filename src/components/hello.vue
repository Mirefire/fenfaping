<template>
<div id="hello">
  <div class="main">
    <router-view></router-view>
  </div>
   <div class="weui-tabbar">
         <router-link to="/Hello/index" class="weui-tabbar__item " v-bind:class="csss">
         <div class="div-imhgs" @click="Mtop(1)">
         <span class="imgae-top" v-show="show" ></span>
          <span class="imgae-top-a"  v-show="showing"></span>
         <!-- <span style="display: inline-block;position: relative;">
            <img src="/static/images/icon/commodity.png" alt="" class="weui-tabbar__icon">
            <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
            </span> -->
           <p class="weui-tabbar__label">商品</p>
           </div>
            </router-link>
        <router-link to="/Hello/main" class="weui-tabbar__item" v-bind:class="csss1">
        <div class="div-imhgs" @click="Mtop(2)">
         <span class="image-center"  v-show="show1"></span>
         <span class="image-center-a"  v-show="showimg1"></span>
             <p class="weui-tabbar__label">任务</p>
             </div>
         </router-link>
       <router-link to="/Hello/person" class="weui-tabbar__item" v-bind:class="csss2">
       <div class="div-imhgs" @click="Mtop(3)">
         <span class="image-right"  v-show="show2"></span>
         <span class="image-right-a"  v-show="showimg2"></span>
            <p class="weui-tabbar__label">我的</p>
            </div>
            </router-link>
        </div>
</div>
 
</template>

<script>

export default {
 
  name: "hello",
  data() {
    return {
      show: false,
      showing: true,
      show1: true,
      showimg1: false,
      show2: true,
      showimg2: false,
      csss:'weui-bar__item_on',
      csss1:'',
      csss2:''
    };
  },
 created:function(){
     let index0 = sessionStorage.getItem('index0');
     if (index0=='f') {
         this.show = false;
        this.showing = true;
          this.show1 = true;
        this.showimg1 = false;
          this.show2 = true;
        this.showimg2 = false;
         this.csss ='weui-bar__item_on';
         this.csss1 ='';
          this.csss2 ='';
     }else if (index0=='g') {
         this.show = true;
        this.showing = false;
         this.show1 = false;
        this.showimg1 = true;
          this.show2 = true;
        this.showimg2 = false;
        this.csss1 ='weui-bar__item_on';
         this.csss ='';
          this.csss2 ='';
     }else if (index0=='d') {
       this.show = true;
        this.showing = false;
          this.show1 = true;
        this.showimg1 = false;
         this.show2 = false;
        this.showimg2 = true;
         this.csss1 ='';
         this.csss ='';
        this.csss2 ='weui-bar__item_on';
     }
 },
  methods: {
    Mtop: function(e) {
      if (e == 1) {
        this.show = false;
        this.showing = true;
          this.show1 = true;
        this.showimg1 = false;
          this.show2 = true;
        this.showimg2 = false;
         this.csss ='weui-bar__item_on';
         this.csss1 ='';
          this.csss2 ='';
          sessionStorage.setItem('index0','f');
          sessionStorage.removeItem('mian');
          
      } else if (e == 2) {
         this.show = true;
        this.showing = false;
         this.show1 = false;
        this.showimg1 = true;
          this.show2 = true;
        this.showimg2 = false;
        this.csss1 ='weui-bar__item_on';
         this.csss ='';
          this.csss2 ='';
          sessionStorage.setItem('index0','g');
           
          sessionStorage.removeItem('ky');
      } else {
       this.show = true;
        this.showing = false;
          this.show1 = true;
        this.showimg1 = false;
         this.show2 = false;
        this.showimg2 = true;
         this.csss1 ='';
         this.csss ='';
        this.csss2 ='weui-bar__item_on';
        sessionStorage.setItem('index0','d');
         sessionStorage.removeItem('mian');
          sessionStorage.removeItem('ky');
      }
    }
  },
  mounted: function() {
    
  },
  destroyed () {
     sessionStorage.removeItem('index0');
     sessionStorage.removeItem('mian');
     sessionStorage.removeItem('ky');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
.weui-tabbar{
  position: fixed;
  bottom: 0;
  }
.main{
 margin-bottom: 53px;
 height: 100%;
 overflow: hidden;
}
.div-imhgs {
  height: 100%;
  width: 100%;
}
.imgae-top {
  height: 34px;
  width: 34px;
  display: inline-block;
  position: relative;
  background: url("/static/images/icon/commodity.png") no-repeat;
  background-position: center;
  background-size: 34px 34px;
}
.image-center {
  height: 34px;
  width: 34px;
  display: inline-block;
  position: relative;
  background: url("/static/images/icon/task.png") no-repeat;
  background-position: center;
  background-size: 34px 34px;
}
.image-right {
  height: 34px;
  width: 34px;
  display: inline-block;
  position: relative;
  background: url("/static/images/icon/user.png") no-repeat;
  background-position: center;
  background-size: 34px 34px;
}
.imgae-top-a {
  height: 34px;
  width: 34px;
  display: inline-block;
  position: relative;
  background: url("/static/images/icon/commodity_sel.png") no-repeat;
  background-position: center;
  background-size: 34px 34px;
}
.image-center-a {
  height: 34px;
  width: 34px;
  display: inline-block;
  position: relative;
  background: url("/static/images/icon/task_sel.png") no-repeat;
  background-position: center;
  background-size: 34px 34px;
}
.image-right-a {
  height: 34px;
  width: 34px;
  display: inline-block;
  position: relative;
  background: url("/static/images/icon/user_sel.png") no-repeat;
  background-position: center;
  background-size: 34px 34px;
}
a{
  text-decoration: none;
}

</style>
