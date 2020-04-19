<template>
  <div class="Mumbai">
    <MumbaiImage />
    <MumbaiDetail />
  </div>
</template>
<script>
// @ is an alias to /src

import MumbaiImage from "@/components/city/MumbaiImage.vue";
import MumbaiDetail from "@/components/city/MumbaiDetail.vue";
// import Carousel from "@/components/home/Carousel.vue";
// import CardContainer from "@/components/home/CardContainer.vue";

export default {
  components: {
    MumbaiImage,
    MumbaiDetail
  }
};
</script>
