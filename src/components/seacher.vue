<template>
   <div class="page">
       <div class="seacher-main">
            <div class="mian-image">
              <div class="images">
                  <img src="/static/images/img/baner3.jpg" />
                  </div>  
               <div class="bottom-w">
                 <span> 微信软文新闻策划</span>  
                 <span> ￥520</span>  
                </div>
            </div>
            <div class="mian-image">
              <div class="images">
                  <img src="/static/images/img/baner3.jpg" />
                  </div>  
               <div class="bottom-w">
                 <span> 微信软文新闻策划</span>  
                 <span> ￥520</span>  
                </div>
            </div>
              <div class="mian-image">
              <div class="images">
                  <img src="/static/images/img/baner3.jpg" />
                  </div>  
               <div class="bottom-w">
                 <span> 微信软文新闻策划</span>  
                 <span> ￥520</span>  
                </div>
            </div>
       </div>
   </div>
</template>
<script>

export default {
  name:'seacher',
   data() {
    return {};
  },
}
</script>

<style scoped>
  
   .seacher-main{    
       width: 100%;      
   }
   .mian-image{
       float: left;
       width: 50%;
       margin-bottom: 10px;
       background: #fff;
   }
    .mian-image .images{
        padding:5px 10px;
    }
   .mian-image .images img{
     height: 120px;
     width: 100%;
   }
   .bottom-w{
       width: 100%;
       padding: 0 10px;
       font-size: 16px;
   }
   .bottom-w span{
       display: block;
       width: 100%;
       line-height: 30px;
   }
</style>
