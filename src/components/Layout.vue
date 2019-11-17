<template>
  <div class="layout">
    <div class="navbar-container">
      <Navbar />
      <MobileNav />
    </div>
    <div class="content-container">
      <slot />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import MobileNav from '@/components/MobileNav';

export default {
  components: { Navbar, MobileNav }
};
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  position: relative;

  .navbar-container {
    height: $navbar-height;
  }

  .content-container {
    height: calc(100vh - #{$navbar-height});
    overflow-y: scroll;
  }
}
</style>
