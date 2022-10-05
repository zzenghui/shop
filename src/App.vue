<template>
 <div>
  <Header/>
  <router-view></router-view>
  <!-- home 或 search 时显示 -->
  <Footer v-show="$route.meta.show"/>
 </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch("categoryList");
    this.$store.dispatch('userInfo')
  },
  
}
</script>

<style>

</style>
