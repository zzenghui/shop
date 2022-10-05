<template>
  <div>
    <!-- 已经注册为全局组件 -->
    <typeNav/>
    <listContainer/>
    <todayRe/>
    <storeRank/>
    <like/>
    <floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    
    <brand/>
  </div>
</template>

<script>
import listContainer from './ListContainer'
import todayRe from './recommend'
import storeRank from './rank'
import like from './like'
import floor from './floor'
import brand from './brand'
import { mapState } from 'vuex'
export default {
  name:'homeApp',
  components:{
    listContainer,
    todayRe,
    storeRank,
    like,
    floor,
    brand
  },
  mounted() {
    this.$store.dispatch('getFloorList')
    
  },
  computed:{
    ...mapState(
      {
        floorList:state=>state.home.floorList
      }
    )
  }
  
}
</script>

<style scoped lang='less'>
 
</style>