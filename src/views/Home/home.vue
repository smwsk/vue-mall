<template>
  <div class="home">
    <div>
      <bannel/>
      <goodPanel/>
      <goodHot/>
      <goodList />
    </div>
  </div>
</template>

<script>
import Bannel from '@/views/Bannel/bannel'
import GoodPanel from '@/views/Good/goodPanel'
import GoodHot from '@/views/Good/goodHot'
import GoodList from '@/views/Good/goodList'
export default {
  components: {
    GoodPanel,
    GoodHot,
    GoodList,
    Bannel
  },
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    },
    device () {
      return this.$store.state.app.device
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .home{
    background: #ededed;
    overflow: hidden;
    width: 100%;
  }

</style>
