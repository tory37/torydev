<template>
  <div class="sidebar" :class="{ open: isOpen }">
    <div class="header">
      <div class="title">Menu</div>
      <IconButton
        @clicked="closeSidebar()"
        :iconClass="'fas fa-angle-double-left'"
        :size="30"
        :color="'blue'"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import IconButton from '@/components/IconButton.vue';

export default {
  components: { IconButton },
  computed: {
    ...mapState('sidebar', ['isOpen'])
  },
  methods: {
    ...mapActions('sidebar', ['closeSidebar'])
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: -100px;
  width: 100px;
  height: 100%;
  background-color: blue;

  -webkit-transition: left $sidebar-open-speed; /* For Safari 3.1 to 6.0 */
  transition: left $sidebar-open-speed;

  display: flex;
  flex-direction: column;

  &.open {
    left: 0;
  }

  @media screen and (min-width: $ss-md-min) {
    position: relative;
    left: 0;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    background-color: lightskyblue;
    padding-left: 10px;
    color: white;

    @media screen and (min-width: $ss-md-min) {
      padding-left: 0;
      justify-content: center;
    }

    .title {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .icon-button {
    &:hover {
      background-color: darken(lightskyblue, 20%) !important;
    }

    @media screen and (min-width: $ss-md-min) {
      display: none;
    }
  }
}
</style>
