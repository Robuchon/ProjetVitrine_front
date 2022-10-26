<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1L7 7"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M1 1L7 7"
        :stroke="color1"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 14,
    },
    height: {
      type: Number,
      default: 14,
    },
    color2: {
      type: String,
      default: "#000000",
    },
    color1: {
      type: String,
      default: "#FFFFFF",
    },
  },
};
</script>
