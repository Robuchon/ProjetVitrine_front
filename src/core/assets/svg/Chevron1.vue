<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 36 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7.16129L3.47059 4.90323L14.6471 5.22581L17.2941 2L32 7.16129L17.2941 12L14.6471 9.09677L3.47059 9.41935L2 7.16129Z"
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
      default: 36,
    },
    height: {
      type: Number,
      default: 36,
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
