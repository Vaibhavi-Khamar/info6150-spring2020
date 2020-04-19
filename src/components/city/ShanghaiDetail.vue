<template>
  <div class="all">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24"
        ><div class="grid-content ">
          <h1>A TOUR TO SHANGHAI</h1>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content ">
          <h2>
            China’s booming financial capital, international metropolis, and the
            new New York.
          </h2>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"
        ><div class="grid-content describe">
          With a population of more than 24 million, Shanghai is China’s largest
          and most developed metropolis on the mainland. It first began its rise
          to international prominence in the early 20th century, and it has
          remained one of the world's most important and powerful cities ever
          since. The city is situated on the estuary of the famed Yangtze River,
          and serves as the most influential economic, financial, international
          trade, cultural, science and technology center in eastern China.
        </div></el-col
      >
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title3">
          <b>Skyline Shanghai，China </b><br />
          <img
            class="cmp-image "
            src="https://images.unsplash.com/photo-1543625246-5445e487b301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          /></div
      ></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title4">
          <b>When to Go to Shanghai</b>
          <ul class="ta-article-text2">
            <li>
              Spring and fall are the best seasons, not hot or humid, cold or
              wet.
            </li>
            <li>
              March to May is the best season to explore nature, as the spring
              flowers are in full bloom and weather is pleasant for sightseeing.
            </li>
            <li>
              January and February are the coldest months with daily highs of
              around 43°F (6°C). July and August are the hottest, and rainiest
              months, with daily highs of around 86°F (30°C).
            </li>
          </ul>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title5">
          <el-button type="primary" round @click="toFlights('SHA')"
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
  text-align: center;
  font-weight: bold;
  line-height: 1.15;
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
