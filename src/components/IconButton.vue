<template>
  <button class="icon-button" :style="style" @click="onClick">
    <i :class="iconClass"></i>
  </button>
</template>

<script>
export default {
  props: ['iconClass', 'payload', 'size', 'color'],
  computed: {
    style() {
      let formatted = `width: ${this.size}px; height: ${this.size}px`;
      console.log(formatted);
      return formatted;
    }
  },
  methods: {
    onClick() {
      this.$emit('clicked', this.payload);
    }
  }
};
</script>

<style scoped lang="scss">
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  background: none;
}
</style>
