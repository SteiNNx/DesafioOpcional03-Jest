<template>
  <div>
    <h1 ref="titulo" :style="{ color }">{{ titulo }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    titulo: {
      type: String,
      default() {
        return "";
      },
    },
    color: {
      type: String,
      default() {
        return "";
      },
    },
  },
  computed: {
    getStyleTitle() {
      return "";
    },
  },
};
</script>
