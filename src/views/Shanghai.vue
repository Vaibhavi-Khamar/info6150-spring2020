<template>
  <div class="Shanghai">
    <ShanghaiImage />
    <ShanghaiDetail />
  </div>
</template>
<script>
// @ is an alias to /src

import ShanghaiImage from "@/components/city/ShanghaiImage.vue";
import ShanghaiDetail from "@/components/city/ShanghaiDetail.vue";
// import Carousel from "@/components/home/Carousel.vue";
// import CardContainer from "@/components/home/CardContainer.vue";

export default {
  components: {
    ShanghaiImage,
    ShanghaiDetail
  }
};
</script>
