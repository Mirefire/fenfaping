<template>
  <div id="indexc">   
        <div class="index-list" >
            <div class="index-flex">
              <router-link to="/datail" class="link">
              <div class="manin">
              <img src="/static/images/img/banner2.jpg"/>
              <div class="bottom-wirte">
                 <div class="bottom-title">微信软文新闻策划</div>
                  <div class="bottom-price">￥520</div>
             </div>
             </div>
              </router-link>
            </div>
            
            <div class=" index-flex">
              <div class="manin">
              <img src="/static/images/img/baner3.jpg"/>
              <div class="bottom-wirte">
                <div class="bottom-title">微信软文新闻策划</div>
                  <div class="bottom-price">￥520</div>
             </div>
             </div>
            </div>

            <div class="index-flex">
              <div class="manin">
              <img src="/static/images/img/baner3.jpg"/>
              <div class="bottom-wirte">
                <div class="bottom-title">微信软文新闻策划</div>
                  <div class="bottom-price">￥520</div>
             </div>
             </div>
            </div>
         </div>
  </div>
</template>
<script>
export default {
  name: "indexc",
  data(){
   return {
   
    };
  },
  
  methods: {
   
  },
  mounted: function() {
   
  }
};
 
</script>
<style scoped>
.index-list{
  /* padding: 5px 0; */
  width: 100%;
}

.index-flex{
 margin-bottom:10px ;
  width: 50%;
  float: left;
  background: #fff;
}
.bottom-wirte{
  background: #fff;
  font-size: 16px;
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

.panel_main{
  overflow: hidden;
  
}
</style>
