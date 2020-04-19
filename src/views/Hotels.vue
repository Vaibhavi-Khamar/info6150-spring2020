<template>
  <div class="Hotels">
    <hotels />
  </div>
</template>
<script>
// @ is an alias to /src
import hotels from "@/components/hotel/hotels.vue";

// import Carousel from "@/components/home/Carousel.vue";
// import CardContainer from "@/components/home/CardContainer.vue";

export default {
  components: {
    hotels
  }
};
</script>
