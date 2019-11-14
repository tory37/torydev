<template>
  <div class="mobile-sidebar-button" v-if="!isOpen" @click="openSidebar()">
    <i class="fas fa-bars"></i>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState('sideBar', ['isOpen']),
  methods: mapActions('sideBar', ['openSidebar'])
};
</script>

<style scoped lang="scss">
.mobile-sidebar-button {
  width: 20px;
  height: 20px;

  @media screen and (min-width: $ss-lg-min) {
    display: none;
  }
}
</style>
