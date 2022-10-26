<template>
  <div class="flex">
    <Chevron
      v-if="target === 'Chevron'"
      :width="width"
      :color1="color1"
      :height="height"
    ></Chevron>
    <Chevron1
      v-if="target === 'Chevron1'"
      :width="width"
      :color1="color1"
      :height="height"
    ></Chevron1>
    <Twitter
      v-if="target === 'Twitter'"
      :width="width"
      :color1="color1"
      :height="height"
    ></Twitter>
    <Linkedin
      v-if="target === 'Linkedin'"
      :width="width"
      :color1="color1"
      :height="height"
    ></Linkedin>
    <Facebook
      v-if="target === 'Facebook'"
      :width="width"
      :color1="color1"
      :height="height"></Facebook>
    <GitHub
      v-if="target === 'GitHub'"
      :width="width"
      :color1="color1"
      :height="height"></GitHub>
  </div>
</template>

<script setup>
//import SvgVue
import Chevron from "@assets/svg/Chevron.vue";
import Chevron1 from "../../assets/svg/Chevron1.vue";
import Twitter from "../../assets/svg/Twitter.vue";
import Linkedin from "../../assets/svg/Linkedin.vue";
import Facebook from "../../assets/svg/Facebook.vue";
import Instagram from "../../assets/svg/Instagram.vue";
import GitHub from "../../assets/svg/GitHub.vue";

const props = defineProps({
  target: {
    type: String,
    default: "",
  },
  color1: {
    type: String,
    default: undefined,
  },
  width: {
    type: Number,
    default: undefined,
  },
  height: {
    type: Number,
    default: undefined,
  },
});
</script>
