<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary" icon="el-icon-check" @click="case1"
      >Case 1</el-button
    >
    <el-button type="primary" icon="el-icon-check" @click="case2"
      >Case 2</el-button
    >
  </div>
</template>
<script>
export default {
  methods: {
    case1() {
      this.$cookies.set("price", "300");
      this.$cookies.set("airline", "AA");
      this.$cookies.set("flight_number", "123");
      this.$cookies.set("departure_at", "2020-04-17T07:28:00Z");
      this.$cookies.set("return_at", "2020-04-22T08:30:00Z");
      this.$cookies.set("origin", "BOS");
      this.$cookies.set("destination", "LAX");
    },
    case2() {
      this.$cookies.set("price", "500");
      this.$cookies.set("airline", "AA");
      this.$cookies.set("flight_number", "321");
      this.$cookies.set("departure_at", "2020-04-17T07:28:00Z");
      this.$cookies.set("return_at", "2020-04-22T08:30:00Z");
      this.$cookies.set("origin", "LAX");
      this.$cookies.set("destination", "BOS");
    }
  }
};
</script>
