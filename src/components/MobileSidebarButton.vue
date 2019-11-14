<template>
  <div class="mobile-sidebar-button">
    <IconButton
      @clicked="openSidebar()"
      :iconClass="'fas fa-bars'"
      :size="30"
      :color="'blue'"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import IconButton from '@/components/IconButton';

export default {
  components: {
    IconButton
  },
  computed: mapState('sidebar', ['isOpen']),
  methods: mapActions('sidebar', ['openSidebar'])
};
</script>

<style scoped lang="scss">
.mobile-sidebar-button {
  width: 30px;
  height: 30px;
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
