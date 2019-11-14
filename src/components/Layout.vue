<template>
  <div class="layout">
    <Sidebar />
    <div class="right-col">
      <div class="top-bar">
        <MobileSidebarButton />
        <TwitterFeed />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import MobileSidebarButton from '@/components/MobileSidebarButton.vue';
import TwitterFeed from '@/components/TwitterFeed.vue';

export default {
  components: { Sidebar, MobileSidebarButton, TwitterFeed }
};
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  .right-col {
    flex: 1;
    display: flex;
    flex-direction: column;

    .top-bar {
      height: 20px;

      display: flex;
      flex-direction: row;
    }
  }
}
</style>
