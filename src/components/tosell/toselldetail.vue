<!-- lin-vue -->
<template>
 <div>
   <div class="tosell-main" id="mained">
       <div class="tosell-tab" v-for="(item,index) in items">
       <div class="tosell-list" @click="showbtn(index)">
         <div class="tosell-list-left">
           <img :src="item.image" alt="">
         </div>
         <div class="tosell-list-right">
                <div class="tosell-title">{{item.title}}</div>
                <div class="tosell-number">任务领取：{{item.number}}</div>
                <div class="tosell-price-date">
                    <span class="tosell-price">任务报酬：{{item.price}}</span>
                     <span class="tosell-time">截止时间：{{item.datetiem}}</span>
                </div>
         </div>
       </div>

       <div class="tosell-ul" id="toselld">
             <ul>
                 <li v-for="it in item.person">
                     <div class="username items">用户名：{{it.username}}</div>
                      <div class="timedate items">购买时间：{{it.buydate}}</div>
                 </li>
             </ul>
       </div>
        <div style="clear: both;"></div>
   </div>
  
</div>
 <div class="tosell-bottom">
   <div class="imgs">
    <img src="/static/images/icon/service.png" alt="">
   </div>
   <div class="itemt">
     全部提取
   </div>
   <div class="trush">
      删除商品
   </div>
 </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      t: 1,
      items: [
        {
          image: "/static/images/img/baner1.jpg",
          title: "微信软文新闻策划",
          number: "50/100",
          price: "￥2000",
          datetiem: "2017.10.17",
          person: [
            { username: "张三", buydate: "2017.10.10" },
            { username: "张三", buydate: "2017.10.10" }
          ]
        },
        {
          image: "/static/images/img/baner1.jpg",
          title: "微信软文新闻策划",
          number: "50/100",
          price: "￥2000",
          datetiem: "2017.10.17",
          person: [
            { username: "张三", buydate: "2017.10.10" },
            { username: "张三", buydate: "2017.10.10" }
          ]
        },
        {
          image: "/static/images/img/baner1.jpg",
          title: "微信软文新闻策划",
          number: "50/100",
          price: "￥2000",
          datetiem: "2017.10.17",
          person: [
            { username: "张三", buydate: "2017.10.10" },
            { username: "张三", buydate: "2017.10.10" }
          ]
        }
      ]
    };
  },

  //组件
  components: {},

  //方法
  methods: {
    showbtn: function(a) {
      var besi = this.items;
      var lit = document.getElementById("mained");
      var divd = lit.childNodes;
      var list = "";
      for (let i = 0; i < besi.length; i++) {
        if (a == i) {
          list = divd[a].childNodes[2];
          if (list.style.display == "none") {
            list.style.display = "block";
          } else {
            list.style.display = "none";
          }
        } else {
          list = divd[i].childNodes[2];
          list.style.display = "none";
        }
      }
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
.tosell-ul {
  margin: 1px 0;
  display: none;
  position: relative;
  animation: myfirst 5s;
  -moz-animation: myfirst 5s; /* Firefox */
  -webkit-animation: myfirst 5s; /* Safari and Chrome */
  -o-animation: myfirst 5s; /* Opera */
  animation-timing-function:linear;
}
  @keyframes myfirst {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes myfirst {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes myfirst {
   from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes myfirst {
   from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
.tosell-ul ul li {
  height: 60px;
  width: 100%;
  background: #0084c8;
  color: #fff;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 60px;
  display: -webkit-flex;
  display: flex;
  /* for uc */
  display: -webkit-box;
  display: -ms-flexbox; /* TWEENER - IE 10 */
}
.items {
  -ms-flex: 1; /* IE 10 */
  -webkit-flex: 1;
  flex: 1;
  /* for uc */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
}
.username {
  text-align: left;
  padding-left: 10px;
}
.timedate {
  text-align: right;
  padding-right: 10px;
}
.tosell-bottom {
  height: 50px;
  position: fixed;
  bottom: 0;
  line-height: 50px;
  color: #fff;
  width: 100%;
  font-size: 16px;
}
.tosell-bottom .imgs {
  float: left;
  width: 20%;
  text-align: center;
}
.tosell-bottom .imgs img {
  vertical-align: middle;
}
.tosell-bottom .itemt {
  float: left;
  width: 55%;
  background: #0084c8;
  text-align: center;
}
.trush {
  float: left;
  width: 25%;
  background: #e60012;
  text-align: center;
}
</style>