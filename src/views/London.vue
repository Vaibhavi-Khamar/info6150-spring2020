<template>
  <div class="London">
    <LondonImage />
    <LondonDetail />
  </div>
</template>
<script>
// @ is an alias to /src

import LondonImage from "@/components/city/LondonImage.vue";
import LondonDetail from "@/components/city/LondonDetail.vue";
// import Carousel from "@/components/home/Carousel.vue";
// import CardContainer from "@/components/home/CardContainer.vue";

export default {
  components: {
    LondonImage,
    LondonDetail
  }
};
</script>
