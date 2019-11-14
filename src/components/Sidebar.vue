<template>
  <div class="sidebar" :class="{ open: isOpen }" v-click-outside="close"></div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ClickOutside from 'vue-click-outside';

export default {
  computed: {
    ...mapState('sidebar', ['isOpen'])
  },
  methods: {
    ...mapActions('sidebar', ['closeSidebar']),
    close() {
      console.log('Clicked outside: ');
      if (this.isOpen) {
        this.closeSidebar();
      }
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  position: absolute;
  top: 0;
  left: -100px;
  width: 100px;
  height: 100%;
  background-color: blue;

  -webkit-transition: left $sidebar-open-speed; /* For Safari 3.1 to 6.0 */
  transition: left $sidebar-open-speed;

  &.open {
    left: 0;
  }
}
</style>
