<template>
  <el-carousel
    :height="carouselHeight + 'px'"
    direction="vertical"
    arrow="always"
  >
    <el-carousel-item
      v-for="(item, index) in items"
      :key="index"
      :name="item.caption"
    >
      <div
        :style="{ backgroundImage: 'url(' + item.imgSrc + ')' }"
        class="carouselBg"
      >
        <h1>{{ item.caption }}</h1>
        <!-- <p>{{ item.text }}</p> -->
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      carouselHeight: "",
      items: []
    };
  },
  methods: {
    setSize: function() {
      // calculate height
      this.screenWidth = window.innerWidth;
      this.carouselHeight = (1 / 3) * this.screenWidth;
    },
    loadJson() {
      this.items = require("@/static/city/Chengdu");
    }
  },
  mounted() {
    // first time load
    this.setSize();
    this.loadJson();
    // window size change
    window.onresize = () => {
      this.setSize();
    };
  }
};
</script>
<style scoped>
.carouselBg {
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: center center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
}
</style>
