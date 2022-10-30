<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        :fill="color1"
        x="13.19"
        y="3.09"
        width="4.2"
        height="7.86"
        rx="0.57"
        transform="translate(4.51 -9.1) rotate(27.86)"
      />
      <rect
        :fill="color1"
        x="20.86"
        y="5.19"
        width="2.69"
        height="10.97"
        rx="0.39"
        transform="translate(1.85 22.55) rotate(-62.14)"
      />
      <path
        :fill="color1"
        d="M.54,15.71H11v5.62l-5.34-.19A22.52,22.52,0,0,1,2.6,18.93,15.35,15.35,0,0,1,.54,16.87Z"
        transform="translate(-0.54 -2.77)"
      />
      <path
        :fill="color1"
        d="M12.25,15.71v5.62c1.18-.3,3,2.93,1.07,3.86L8,28.64V31h6.3A4.25,4.25,0,0,1,18,29.46,3.74,3.74,0,0,1,21.08,31h6.06V28.64l-5.85-3.75a1.79,1.79,0,0,1,.17-2.06c.33-.36,3.06-3.58,5.68-3.94l4.32-.07V15.71"
        transform="translate(-0.54 -2.77)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
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
