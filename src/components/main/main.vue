<template>
  <div class="page">
  <div class="swiper-container" id="swiper1">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/static/images/img/baner1.jpg"/>
            </div>
            <div class="swiper-slide"><img src="/static/images/img/banner2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="/static/images/img/baner3.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> --> 
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
      <div class="border-seach">
     <div class="seach-input" v-show="showing"  >
       <input type="text" v-focus="focusimg" @blur="bluerd()" class="input-s"/><i class="weui-icon-search"></i>
     </div>
     <div class="btn-seach" v-show="showing1">
     <div class="seache-s" v-on:click="changge"> <i class="weui-icon-search"></i></div>
     </div>
    </div>
   <div class="weui-flex" style="height:60px;background:#fff;line-heigh：60px;margin: 10px 0;padding:10px 0;">
            
            <div class="weui-flex__item line-si linksd">
             
              <div class="ping" v-bind:class="{ative:mg}" @click="ping">平台推荐</div>
          
            </div>
            
              
            <div class="weui-flex__item line-si linksd"> 
                  
              <div class="new"  v-bind:class="{ative:mw}" @click="newd">最新发布</div>
              </router-link>
              </div>
              
                
            <div class="weui-flex__item line-si linksd">
              
              <div class="ging" v-bind:class="{ative:mi}" @click="ging">发布管理</div>
              
            </div>
            
           
            <div class="weui-flex__item line-si linksd">  
                  
              <div class="rw" v-bind:class="{ative:mr}" @click="rw">任务管理</div>
              
            </div>
         
        </div>
      <div class="panel_main">
         <div class="radue-lie">
           <div class="quan">
            <img src="/static/images/android/drawable-mdpi/issue.png" alt="">
           </div>
         </div>
          <transition name="component-fade" mode="out-in">
            <component v-bind:is="view"></component>
          </transition>
      </div>
  </div>
</template>
<script>
import mainlb from '@/components/main/mainlb'
import mainlc from '@/components/main/mainlc'
import mainlz from '@/components/main/mainlz'
import mainle from '@/components/main/mainle'
export default {
  data(){
   return {
     view:'v-a',
     showing:false,
     showing1:true,
     focusimg:false,
     mg:true,
     mw:false,
     mi:false,
     mr:false
    };
  },
  components:{
    'v-a':mainlc,
    'v-b':mainlb,
    'v-c':mainle,
    'v-d':mainlz
  },
  directives: {
    focus: {
      update: function (el, {value}) {
        if (value) {
          el.focus()
        }
      }
    }
  },
  created () {
   
  },
   methods: {
     ping:function(){
      this.mg = true;
      this.mw = false;
       this.mi = false;
      this.mr = false;
      this.view = 'v-a';
     },
     newd:function(){
       this.mg = false;
      this.mw = true;
      this.mr = false;
      this.mi = false;
      this.view = 'v-b';
     },
     ging:function(){
       this.mg = false;
      this.mw = false;
      this.mi = true;
      this.mr = false;
      this.view = 'v-c';
     },
     rw:function(){
        this.mg = false;
      this.mw = false;
       this.mi = false;
      this.mr = true;
      this.view = 'v-d';
     },
    changge: function() {
     this.showing = true;
      this.showing1 = false;
      this.focusimg = true;
    },
    bluerd:function () {
       this.showing = false;
      this.showing1 = true;
      this.focusimg = false;
    }
  },
  
  // created: function() {
    
   
  //    this.$http.get('/static/data.json').then(data=> {
  //           //求助的部分
  //           // this.$set('message', response.data);
  //           // console.log(data.body);
  //    });
  
  // },
 mounted:function(){
   var swiper1 = new Swiper("#swiper1", {
      // 轮播图的方向，也可以是vertical方向
      direction: "horizontal",

      //播放速度
      loop: true,

      // 自动播放时间
      autoplay: true,

      // 播放的速度
      speed: 2000,

      // 如果需要分页器，即下面的小圆点
      pagination: ".swiper-pagination",

      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev", // 这样，即使我们滑动之后， 定时器也不会被清除
      autoplayDisableOnInteraction: false

      // 如果需要滚动条
      // scrollbar: ".swiper-scrollbar"
    });
 }
};
</script>
<style scoped>

#main{
  background-color:#F5F5F5; 
}
#swiper1 {
  position: relative;
  left: 0;
  right: 0;
  background: #fff;
}
.weui-flex,.panel_main{
  background: #fff;
}

.border-seach {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 100%;
  /* background-color: #0000; */
  z-index: 9999;
}
.seach-input {
  height: 100%;
  width: 85%;
  float: right;
}
.seach-input i {
  position: absolute;
  line-height: 40px;
  right: 17%;
  font-size: 18px;
}
.btn-seach {
  float: right;
  width: 15%;
}
.seach-input .input-s {
  width: 80%;
  /* float: right; */
  height: 100%;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  border: none;
  background-color: #000;
  opacity: 0.6;
  outline: none;
  padding-left: 10px;
  color: #fff;
}
.seache-s {
  height: 40px;
  width: 40px;
  background-color: #000;
  margin: 0 auto;
  opacity: 0.6;
  text-align: center;
  line-height: 40px;
  border-radius: 100%;
}
.seache-s i {

  font-size: 20px;
}

.swiper-container {
  width: 100%;
  height: 150px;
}
.swiper-slide {
  width: 100%;
  height: 150px;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.weui-flex .line-si {
  height: 60px;
  line-height: 60px;
  
  font-size: 16px;
  text-align: center;
}
.ping,
.new,
.ging {
  width: 100%;
  height: 60px;
  text-align: center;
  border-right: 1px solid #ccc;
}
.name_tink, .number_tink,.price_tink,.time_tink{
  color: #999999;
}
.seach-input {
  -webkit-animation-name: fadeIn; /*动画名称*/
  -webkit-animation-duration: 2s; /*动画持续时间*/
  -webkit-animation-iteration-count: 1; /*动画次数*/
  -webkit-animation-delay: 0s; /*延迟时间*/
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}
.ative{
  height: 100%;
  width: 100%;
  color: rgb(11, 113, 145);
  border-bottom: 1px solid rgb(11, 113, 145);
}
.radue-lie{
  position: fixed;
  right: 10px;
  bottom: 140px;
}
.quan{
  /* width: 50px;
  height: 50px;
  background:rgba(27,27,31,1);
  opacity:0.66;
  border-radius: 50%; */
}
</style>