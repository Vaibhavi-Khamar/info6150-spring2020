<template>
  <div class="all">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24"
        ><div class="grid-content ">
          <h1>GUIDE TO SYDNEY</h1>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content ">
          <h2>
            Seek out some sunshine and good times in Australia's Harbour City.
          </h2>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"
        ><div class="grid-content describe">
          Sydney is the first stop on many Australian itineraries, and for good
          reason. It's an inviting blend of the exhilarating and easygoing. You
          can find excitement in the city, but drive just a few kilometres and
          you'll hit the golden sand of famous beaches like Bondi and Manly.
          Plus, with endless nature at its doorstep, Sydney is the starting
          point for day trips serving up fresh air, unique flavours and locals
          who know a thing or two about living life to the fullest.
        </div></el-col
      >
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title3">
          <b>Bondi Icebergs Pool, Sydney, NSW </b><br />
          <img
            class="cmp-image "
            src="https://www.australia.com/content/australia/en_us/places/sydney-and-surrounds/guide-to-sydney/_jcr_content/mainParsys/imagewithcaption/LargeImageTile/largeImageSrc.adapt.740.medium.jpg"
          /></div
      ></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title4">
          <b>Useful Tips</b>
          <ul class="ta-article-text2">
            <li>
              Decide when to visit and what to pack with this info on seasonal
              weather in Sydney.
            </li>
            <li>
              Find all of the city’s transport options with this guide on
              getting around.
            </li>
            <li>
              Visit a local visitor information centre for more detailed info on
              the area.
            </li>
          </ul>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title5">
          <el-button type="primary" round @click="toFlights('SYD')"
            >Go Search Flights <i class="el-icon-arrow-right"></i
          ></el-button></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    toFlights(code) {
      console.log(code);
      this.$router.push("/flights?destination=" + code);
    }
  }
};
</script>

<style scoped>
.all {
  background-color: #ffffff;
}

h1 {
  /* font-size: 1.5rem; */
  display: block;
  color: #00535e;
  text-align: center !important;
  font-weight: bold;
}
h2 {
  font-size: 1.2rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #00a896;
}
.title3 {
  font-size: 1.2rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #00a896;
}
.title4 {
  font-size: 1.2rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #00a896;
}
.title5 {
  font-size: 1.2rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: right;
  color: #00a896;
}
.describe {
  text-indent: 2rem;
  font-size: 1rem;
  line-height: 2;
  color: #555;
  font-family: TABanjo, Helvetica, Arial, sans-serif, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
}
.ta-article-text1 {
  font-size: 1.125rem;
  line-height: 2;
  text-align: left;
  color: #00a896;
}
.ta-article-text2 {
  font-size: 1.125rem;
  line-height: 2;
  color: #000000;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #ffffff;
}
.row-bg {
  padding: 10px 0;
  background-color: #ffffff;
}
</style>
