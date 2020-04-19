<template>
  <div class="Chengdu">
    <ChengduImage />
    <ChengduDetail />
  </div>
</template>
<script>
// @ is an alias to /src

import ChengduImage from "@/components/city/ChengduImage.vue";
import ChengduDetail from "@/components/city/ChengduDetail.vue";
// import Carousel from "@/components/home/Carousel.vue";
// import CardContainer from "@/components/home/CardContainer.vue";

export default {
  components: {
    ChengduImage,
    ChengduDetail
  }
};
</script>
