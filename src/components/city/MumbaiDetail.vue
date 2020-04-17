<template>
  <div class="all">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24"
        ><div class="grid-content ">
          <h1>WELCOME TO MUMBAI</h1>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content ">
          <h2>Top after-dark activities in India’s megacity--Mumbai</h2>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"
        ><div class="grid-content describe">
          Mumbai, formerly Bombay, is big. It’s full of dreamers and
          hard-labourers, starlets and gangsters, stray dogs and exotic birds,
          artists and servants, fisherfolk and crorepatis (millionaires), and
          lots and lots of people. It has India’s most prolific film industry,
          some of Asia’s biggest slums (as well as the world’s most expensive
          home) and the largest tropical forest in an urban zone. Mumbai is
          India’s financial powerhouse, fashion epicentre and a pulse point of
          religious tension.
        </div></el-col
      >
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title3">
          <b>Phoenix Marketcity, Mumbai,India </b><br />
          <img
            class="cmp-image "
            src="https://images.unsplash.com/photo-1583990504911-89fcd98d0c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          /></div
      ></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title4">
          <b>Mumbai Speciaties</b>
          <div class="grid-content describe">
            Musty pubs have given way to fine-dining hotspots and chic cocktail
            lounges, hip neighbourhoods line up choc-o-block nightclubs for
            party lovers, and experiential tour groups have emerged to engage
            the intellectuals after hours. So at the end of another fast-paced,
            frenetic, frenzied Mumbai day, hold off on hitting the hay, and stay
            up to see how Mumbai unwinds after dark.
          </div>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title5">
          <el-button type="primary" round @click="toFlights('BOM')"
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
