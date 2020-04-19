<template>
  <div class="Paris">
    <ParisImage />
    <ParisDetail />
  </div>
</template>
<script>
// @ is an alias to /src

import ParisImage from "@/components/city/ParisImage.vue";
import ParisDetail from "@/components/city/ParisDetail.vue";
// import Carousel from "@/components/home/Carousel.vue";
// import CardContainer from "@/components/home/CardContainer.vue";

export default {
  components: {
    ParisImage,
    ParisDetail
  }
};
</script>
