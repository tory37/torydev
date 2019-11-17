<template>
  <div class="home">
    <HomeBanner />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/HomeBanner.vue';

export default {
  name: 'home',
  components: {
    HomeBanner
  }
};
</script>

<style scoped lang="scss">
.profile-pic {
  width: 80%;
  //height: 30vh;

  @media screen and (min-width: $ss-sm-min) {
    width: 50%;
  }
}
</style>
