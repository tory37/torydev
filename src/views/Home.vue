<template>
  <div class="home">
    <img class="profile-pic" alt="Profile Pic" src="../assets/megadesk.jpg" />
    <HomeContent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/HomeContent.vue';

export default {
  name: 'home',
  components: {
    HomeContent
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
