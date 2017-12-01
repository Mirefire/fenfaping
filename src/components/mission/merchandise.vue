<!-- lin-vue -->
<template>
 <div>
   <div class="tosell-main">
       <div class="tosell-tab" v-for="(item,index) in items">
       <div class="tosell-list" @click="showbtn(index)">
         <div class="tosell-list-left">
           <img :src="item.image" alt="">
         </div>
         <div class="tosell-list-right">
                <div class="tosell-title">{{item.title}}</div>
                <div class="tosell-price-date">
                    <span class="tosell-price">实际收益：{{item.price}}</span>
                     <span class="tosell-time">截止时间：{{item.datetiem}}</span>
                </div>
         </div>
       </div>
        <div style="clear: both;"></div>
   </div>
  
</div>
</div>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: "/static/images/img/baner1.jpg",
          title: "微信软文新闻策划",         
          price: "￥2000",
          datetiem: "2017.10.17",
         },
        {
          image: "/static/images/img/baner1.jpg",
          title: "微信软文新闻策划",        
          price: "￥2000",
          datetiem: "2017.10.17",
         },
        {
          image: "/static/images/img/baner1.jpg",
          title: "微信软文新闻策划",       
          price: "￥2000",
          datetiem: "2017.10.17", 
        }
      ]
    };
  },

  //组件
  components: {},

  //方法
  methods: {
    showbtn: function(a) {
    
    }
  },
  //准备创建组件
  beforeCreate() {},
  //组件创建完毕
  created() {
     
  },
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
.tosell-main{
    margin-top: 10px;
}
.tosell-tab {
  margin-bottom: 6px;
}
.tosell-list {
  height: 80px;
  width: 100%;
  background: #fff;
}
.tosell-list-left {
  float: left;
  width: 30%;
  text-align: center;
}
.tosell-list-left img {
  height: 70px;
  width: 70px;
  margin-top: 5px;
}
.tosell-list-right {
  float: left;
  width: 70%;
  position: relative;
}
.tosell-list-right {
}
.tosell-title,
.tosell-number {
  line-height: 25px;
}
.tosell-title {
  font-size: 16px;
  position: absolute;
  top: 5px;
}
.tosell-number {
  font-size: 14px;
  color: #999999;
  position: absolute;
  top: 30px;
}
.tosell-price-date {
  position: absolute;
  line-height: 20px;
  font-size: 12px;
  color: #999999;
  top: 56px;
}
.tosell-price {
}
.tosell-time {
  margin-left: 20px;
}
</style>