<template>
  <div class="all">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24"
        ><div class="grid-content ">
          <h1>Visit London, England</h1>
        </div></el-col
      >
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title3">
          <b>TSt. Paul's Cathedral, London, United Kingdom </b><br />
          <img
            class="cmp-image "
            src="https://images.unsplash.com/photo-1534787146155-0104a27a2da5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          /></div
      ></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content ">
          <h2>
            London is expensive and not as much a convenience culture as
            America.
          </h2>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"
        ><div class="grid-content describe">
          England is full of pageantry and tradition, and nowhere else is that
          on display so vividly than in London. Yet the capital of the United
          Kingdom is hardly living in the past, continually courting innovation
          and growth in its art, architecture, restaurants, and hotels. From the
          burgeoning East End to the well-established City Centre, T+L’s London
          travel guide proves the world-class destination continues to evolve.
        </div></el-col
      >
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title4">
          <b>Best Time To Visit</b>
          <ul class="ta-article-text2">
            <li>
              Spring starts early in the U.K., and it’s optimal in otherwise
              temperamental weather.
            </li>
            <li>
              Mild winters and traditional Christmas markets make November and
              December popular, too.
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
          <el-button type="primary" round @click="toFlights('LHR')"
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
