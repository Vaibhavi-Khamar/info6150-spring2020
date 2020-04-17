<template>
  <div class="all">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24"
        ><div class="grid-content ">
          <h1>PARIS TRAVEL GUIDE</h1>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content ">
          <h2>
            Poets, artists, playwrights, writers, journalists, and more have all
            written about their love of this city.
          </h2>
        </div></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"
        ><div class="grid-content describe">
          As Hemingway said, “If you are lucky enough to have lived in Paris as
          a young man, then wherever you go for the rest of your life, it stays
          with you, for Paris is a moveable feast.” Paris is gigantic, with
          thousands of years of history. It would take a lifetime to visit all
          of Paris. It can be overwhelming for most people. I’ve spent years
          visiting, running tours, and even living here and this travel guide to
          Paris will help you plan the perfect trip to this beautiful city by
          giving you on and off the beaten path things, costs, money saving
          tips, and everything in between!
        </div></el-col
      >
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title3">
          <b>Eiffel Tower, Paris, France </b><br />
          <img
            class="cmp-image "
            src="https://images.unsplash.com/photo-1544144610-fe28b99434d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          /></div
      ></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title4">
          <b>When to Go to Paris</b>
          <ul class="ta-article-text2">
            <li>
              The best time to visit is May, early June, September, or October,
              when there are fewer crowds and the weather is still sunny and
              warm.
            </li>
            <li>
              Summer is the most popular (and most expensive) season to visit,
              when the weather is warm and dry.
            </li>
            <li>
              Winter can be dark and chilly, but while the weather may not be
              perfect, Paris is particularly beautiful in the winter.
            </li>
          </ul>
        </div></el-col
      >
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16"
        ><div class="grid-content title5">
          <el-button type="primary" round @click="toFlights('CDG')"
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
