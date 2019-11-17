<template>
  <div class="navbar">
    <div class="navigation">
      <div class="title entry">
        <router-link :to="{ name: 'home' }">toryh.dev</router-link>
      </div>
      <div class="nav entry not-mobile" :class="navIsSelectedClass('home')">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </div>
      <div class="nav entry not-mobile" :class="navIsSelectedClass('resume')">
        <router-link :to="{ name: 'resume' }">Resume</router-link>
      </div>
      <div
        class="nav entry not-mobile"
        :class="navIsSelectedClass('portfolio')"
      >
        <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
      </div>
    </div>
    <div class="links">
      <div class="entry not-mobile">
        <a href="https://github.com/tory37" target="_blank" rel="noopener">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="entry not-mobile">
        <a
          href="https://www.linkedin.com/in/toryhebert/"
          target="_blank"
          rel="noopener"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <div class="entry not-mobile">
        <a href="https://twitter.com/torayquaza" target="_blank" rel="noopener">
          <i class="fab fa-twitter"></i>
        </a>
      </div>

      <div class="entry mobile">
        <a @click="openSidebar()">
          <i class="fas fa-bars"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { isOnRoute } from '@/services/RouteHelper';

export default {
  methods: {
    ...mapActions('sidebar', ['openSidebar']),
    navIsSelectedClass(nameToCheck) {
      return isOnRoute(this.$route, nameToCheck) ? 'selected' : '';
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  height: 100%;
  width: 100%;
  background-color: $color-gray-dark;
  color: white;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .entry {
    box-sizing: border-box;
    padding: 5px;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: $color-gray;

      a {
        text-decoration: underline;
      }
    }

    &.mobile {
      @media screen and (min-width: $ss-sm-min) {
        display: none;
      }
    }

    &.not-mobile {
      display: none;

      @media screen and (min-width: $ss-sm-min) {
        display: inherit;
      }
    }
  }

  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    .title {
      padding-right: 10px;
      padding-left: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        font-weight: 600;
      }

      a {
        color: white;
        text-decoration: none;
      }
    }

    .nav {
      margin-right: 5px;
      font-size: 14px;

      &.selected {
        text-decoration: underline;
        font-weight: 600;
      }

      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  .links {
    height: 100%;
    display: flex;
    align-items: center;

    .entry {
      width: $navbar-height;

      a {
        width: 100%;
        text-align: center;
        color: white;
      }
    }
  }
}
</style>
