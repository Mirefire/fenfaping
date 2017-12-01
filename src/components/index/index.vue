<template>
    <div class="page">
    <div class="swiper-container" id="swiper">
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
       <input type="text" v-focus="focusimg"  @blur="bluerd()" class="input-s" @click="inputbtn" />
       <i v-on:click="SeacherBt" class="weui-icon-search"></i>
     </div>
     <div class="btn-seach" v-show="showing1">
     <div class="seache-s" v-on:click="changge"> <i class="weui-icon-search"></i></div>
     </div>
    </div>
    <div class="claer"></div>
    <!-- <input type="text" v-focus="true"  class="input-s"/> -->
   
    <div class="weui-flex" style="background:#fff;height:80px;line-height:80px;margin: 10px 0;">
           
            <div class="weui-flex__item line-si classify " @click="shop">        
                <div v-bind:class="{cative:ky}">商品分类</div>                
            </div>
            
            <div class="weui-flex__item line-si" >
             <div class="border-c"></div>
              </div>
              
            <div class="weui-flex__item line-si fabu " @click="shopp">
                 <div v-bind:class="{cative:ky1}"> 商品发布</div>
          </div>
         
  </div>
        <div class="claer"></div>
        <div class="panel_main page__bd">
            <!-- <router-view></router-view> -->
            <transition name="component-fade" mode="out-in">
            <component v-bind:is="view"></component>
          </transition>
        </div>
    </div>

</template>
<script>
import indexc from "@/components/index/indexc";
import indexz from "@/components/index/indexz";
export default {
  data() {
    return {
      view: "v-a",
      showing: false,
      showing1: true,
      focusimg: false,
      ky: true,
      ky1: false,
      music:[]
    };
  },
  components: {
    "v-a": indexc,
    "v-b": indexz
  },
  directives: {
    focus: {
      update: function(el, { value }) {
        if (value) {
          el.focus();
        }
      }
    }
  },
  created:function() {
     
  },
  methods: {
    
    shop: function() {
      this.ky = true;
      this.ky1 = false;
      this.view = 'v-a';
    },
    shopp: function() {
      this.ky1 = true;
      this.ky = false;
       this.view = 'v-b';
    },
    changge: function() {
      this.showing = true;
      this.showing1 = false;
      this.focusimg = true;
    },
    bluerd: function() {
      this.showing = false;
      this.showing1 = true;
      this.focusimg = false;
    },
    SeacherBt: function() {
      this.$router.push({ path: "/seacher" });
    },
    inputbtn: function() {}
  },
  mounted: function() {
    var that = this;
    var mySwiper = new Swiper("#swiper", {
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
#index {
  background: #f5f5f5;
  height: 100%;
  overflow: hidden;
}
.claer {
  clear: both;
}
#swiper {
  position: relative;
  left: 0;
  right: 0;
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
  margin: 15px 0;
  font-size: 18px;
}
.border-c {
  height: 60px;
  width: 1px;
  background-color: #ccc;
  margin-left: 48.9%;
}
.classify {
  text-align: right;
}
.fabu {
  text-align: left;
}
.manin {
  width: 95%;
  margin: 0 auto;
}
.manin img {
  width: 100%;
  height: 120px;
}
.bottom-title {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  margin: 0 10px;
}
.bottom-price {
  height: 25px;
  line-height: 25px;
  margin-left: 15px;
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
.panel_main {
  overflow: hidden;
}
.cative {
  height: 100%;
  color: rgb(11, 113, 145);
  width: 100%;
  /* margin: 0 auto; */
  /* border-bottom: 1px solid rgb(11, 113, 145); */
}
</style>
