<template>
  <div id="detail">
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
    <div class="detail-main page__bd">
          <div class="share-list">
              <div class="weui-flex">
               <div class="weui-flex__item ">                  
                    <span class="title">微信软文新闻策划</span>
                    <span class="price">￥520</span>          
                   </div>
               
              </div>
          </div>
          <div class="detail-title">详情</div>
          <div class="datail-content">
              <div class="detail-content-title">[业务需求]</div>
              <div class="No-title">一：功能需求</div>
              <div class="No-main">
                   对天津市国有企业的数据，进行数据还原与数据采集，并且进行国有企业数据进行数据迁移。

              </div>
          </div>
    </div>
  <div class="footer-bottom">
   <div class="footer-bottom-call">
       <img src="/static/images/icon/service.png"/>
   </div>
   <div class="footer-bottom-my">我要分销</div>
   <div class="footer-bottom-buy">立即购买</div>
  </div>
      </div>
  </div>
  
</template>
<script>
    export default {
       
        name: 'detail',
        data() {
            return {};
        },
    mounted: function() {
    var mySwiper = new Swiper("#swiper1", {
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
    }
</script>
<style scoped>
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
.share-list{
    padding: 10px;
    height: 70px;
    line-height: 70px;
    background: #fff;
}
.share-list .weui-flex__item{
    padding: 5px 0;
    height: 70px;
}
.share-list .weui-flex__item span{
    display: block;
    height: 32px;
    width: 100%;
    line-height: 32px;
    padding-left: 10px;
}
.share-list .weui-flex__item .title{
    font-size: 18px;
    font-weight: 600;
}
.share-list .weui-flex__item .price{
    font-size: 16px;
    color: #0088C8;
}
.detail-title{
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
}
.datail-content{
    background: #fff;
    font-size: 18px;
    padding: 10px;
}
.footer-bottom{
    height: 50px;
    position: fixed;
    bottom: 0;
    line-height: 50px;
    width: 100%;
    font-size: 18px;
}
.footer-bottom-call{
    float: left;
    width: 20%;
    text-align: center;
     vertical-align: center;
    line-height: 50px;
    background: #fff;
}
.footer-bottom-call img{
    height: 37px;
    width: 37px;
    margin-top: 5px;
}
.footer-bottom-my{
    float: left;
    width: 30%;
    text-align: center;
    line-height: 50px;
    background: #5DA729;
    color: #fff;
}
.footer-bottom-buy{
    float: left;
    width: 50%;
    text-align: center;
    line-height: 50px;
    background: #0084C8 ;
    color: #fff;
}
</style>
