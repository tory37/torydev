<template>
  <div class="sidebar"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('sidebar', ['isOpen'])
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  .mobile-button {
    @media screen and (min-width: $ss-lg-min) {
      display: none;
    }
  }
}
</style>
