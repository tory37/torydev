<template>
  <div class="home-content">
    <h1>Welcome to My Site!</h1>
    <p>
      I am a front end web developer with 4+ years of experience. I've worked
      mostly with AngularJS and have recent experience in React and Vue. This
      app is built with Vue! If you are a recruiter or a passerby, everything
      you need can be found
      <span class="mobile-text">
        in the menu at the top left. <i class="fas fa-arrow-left"></i>
      </span>
      <span class="desktop-text">
        in the menu to the left. <i class="fas fa-arrow-left"></i>
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, /*Prop,*/ Vue } from 'vue-property-decorator';

@Component
export default class HomeContent extends Vue {
  //@Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-content {
  .mobile-text {
    @media screen and (min-width: $ss-sm-max) {
      display: none;
    }

    i {
      transform: rotate(45deg);
    }
  }

  .desktop-text {
    display: none;

    @media screen and (min-width: $ss-md-min) {
      display: inherit;
    }
  }
}
</style>
