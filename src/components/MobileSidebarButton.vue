<template>
  <div
    class="mobile-sidebar-button"
    :class="{ collapsed: isOpen }"
    @click.prevent="openSidebar()"
  >
    <i class="fas fa-bars"></i>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState('sidebar', ['isOpen']),
  methods: mapActions('sidebar', ['openSidebar'])
};
</script>

<style scoped lang="scss">
.mobile-sidebar-button {
  width: 20px;
  height: 20px;
  background-color: darkblue;

  -webkit-transition: width $sidebar-open-speed; /* For Safari 3.1 to 6.0 */
  transition: width $sidebar-open-speed;

  &.collapsed {
    width: 0;
  }

  @media screen and (min-width: $ss-lg-min) {
    display: none;
  }
}
</style>
