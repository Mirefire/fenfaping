<!-- lin-vue -->
<template>
 <div class="order-main-list">
   <div class="order-mian-margn">
      <div class="order-tabs">
          <div class="order-items">
            <div class="image">
                <img src="/static/images/img/baner1.jpg" alt="">
            </div>
            <div class="text-name">
                <div class="tetx-name-top">
                    <span class="top-size">微信软文新闻策划</span>
                     <span class="top-price">￥520</span>
                </div>
                   <div class="tetx-name-center">
                    
                </div>
                   <div class="tetx-name-bottom">
                       <span class="bottom-buy">购买金额:￥2000</span>
                    <span class="bottom-time">购买时间:2017.10.18</span>
                </div>
            </div>
        </div>
      </div>
       <div class="order-tabs">
          <div class="order-items">
            <div class="image">
                <img src="/static/images/img/baner1.jpg" alt="">
            </div>
            <div class="text-name">
                <div class="tetx-name-top">
                    <span class="top-size">微信软文新闻策划</span>
                     <span class="top-price">￥520</span>
                </div>
                   <div class="tetx-name-center"></div>
                   <div class="tetx-name-bottom">
                       <span class="bottom-buy">购买金额:￥2000</span>
                    <span class="bottom-time">购买时间:2017.10.18</span>
                </div>
            </div>
        </div>
      </div>
      <div class="order-tabs">
          <div class="order-items">
            <div class="image">
                <img src="/static/images/img/baner1.jpg" alt="">
            </div>
            <div class="text-name">
                <div class="tetx-name-top">
                    <span class="top-size">微信软文新闻策划</span>
                     <span class="top-price">￥520</span>
                </div>
                   <div class="tetx-name-center"></div>
                   <div class="tetx-name-bottom">
                       <span class="bottom-buy">购买金额:￥2000</span>
                    <span class="bottom-time">购买时间:2017.10.18</span>
                </div>
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

  //组件
  components: {},

  //方法
  methods: {},
  //准备创建组件
  beforeCreate() {},
  //组件创建完毕
  created() {},
  //组件的模板准备挂载到DOM
  beforeMount() {},
  //挂载完毕
  mounted() {},
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
.order-main-list {
  width: 100%;
}
/* .order-mian-margn {
  width: 90%;
  margin: 0 auto;
} */
.order-tabs{
    float: left;
    width: 50%;
}
.order-items{
margin: 6px 5px;
}
.image{
    width: 100%;
    height: 150px;
}
.image img{
  width: 100%;
  height: 100%;
}
.text-name{
    overflow: hidden;
    background: #fff;
    padding-bottom: 10px; 
}
.tetx-name-top span{
    line-height: 30px;
    display: block;
    width: 100%;

}
.top-size{
  font-size: 18px;
   padding-left: 10px;
}
.top-price{
    font-size: 16px;
    padding-left: 15px;
}
.tetx-name-bottom span{
    padding-left: 10px;
   display: block;
   width: 100%;
   line-height: 30px;
   font-size: 14px;
   color: #999999;
}
.tetx-name-center{
    height: 1px;
    background: #BFBFBF;
    width: 100%;
}
</style>