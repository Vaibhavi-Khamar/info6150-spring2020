<template>
  <div @click="makeOrder">
    <el-container>
      <el-aside>
        <el-row>
          <el-col :span="12">
            Airline:
          </el-col>
          <el-col :span="12">
            {{ flightData.airline }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            Flight Number:
          </el-col>
          <el-col :span="12">
            {{ flightData.flight_number }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            Price:
          </el-col>
          <el-col :span="12">
            {{ flightData.price }}
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <el-row>
            <el-col :span="11" :offset="1">
              <span>{{ origin }}</span>
            </el-col>
            <el-col :span="1">
              <i class="el-icon-right" />
            </el-col>
            <el-col :span="11">
              <span>{{ destination }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11" :offset="1">
              <b> Departure at:</b>
            </el-col>
            <el-col :span="11" :offset="1">
              <span>{{
                new Date(flightData.departure_at).toLocaleString()
              }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11" :offset="1">
              <b> Return at:</b>
            </el-col>
            <el-col :span="11" :offset="1">
              <span>{{ new Date(flightData.return_at).toLocaleString() }}</span>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  props: ["flightData", "origin", "destination"],
  methods: {
    makeOrder() {
      this.$cookies.set("price", this.flightData.price);
      this.$cookies.set("airline", this.flightData.airline);
      this.$cookies.set("flight_number", this.flightData.flight_number);
      this.$cookies.set("departure_at", this.flightData.departure_at);
      this.$cookies.set("return_at", this.flightData.return_at);
      this.$cookies.set("origin", this.origin);
      this.$cookies.set("destination", this.destination);
      this.$router.push("/order");
    }
  }
};
</script>
<style scoped>
.el-aside {
  background-color: #d3dce6;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.el-main {
  background-color: white;
}
.el-row {
  text-align: center;
}
</style>
