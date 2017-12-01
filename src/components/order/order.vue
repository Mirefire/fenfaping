<template>
  <div class="order-main">
    <div class="order-header">
        <div class="order-tab">
            <div class="oder-tab-item" v-bind:class="{active_order:buys}" @click="buy">我购买的</div>
            <div class="oder-tab-item" v-bind:class="{active_order:makes}" @click="make">已成交</div>
            <div class="oder-tab-item" v-bind:class="{active_order:records}"  @click="record">购买记录</div>
        </div>
    </div>
   <div class="order-content">
        <component v-bind:is="view"></component>
   </div>
  </div>
</template>
<script>
import Buy from '@/components/order/buy'
import Make from '@/components/order/make'
import Record from '@/components/order/record'
export default {
    data () {
        return {
        view:'v-a',
        buys:true,
        makes:false,
        records:false
        }
    },
    components: {
        'v-a':Buy,
        'v-b':Make,
        'v-c':Record
    },
    methods:{
    buy:function(){
     this.view = "v-a"
     this.buys=true
      this.makes=false
      this.records=false
    },
    make:function() {
        this.view='v-b'
        this.makes=true
          this.buys=false
          this.records=false
    },
    record:function(){
        this.view='v-c'
        this.records=true
         this.makes=false
           this.buys=false
    }
    }
};
</script>
<style scoped>
.order-header {
  height: 60px;
  background: #fff;
  line-height: 60px;
}
.order-tab {
  height: 100%;
  text-align: center;
  display: -webkit-flex;
  display: flex;
  /* for uc */
  display: -webkit-box;
  display: -ms-flexbox; /* TWEENER - IE 10 */
}
.oder-tab-item{
    -ms-flex: 1; /* IE 10 */
    -webkit-flex: 1; 
    flex: 1; 
    /* for uc */
    -webkit-box-flex: 1; 
    -moz-box-flex: 1; 
    -ms-flex: 1;
}
.order-content{
width: 100%;
}

</style>
