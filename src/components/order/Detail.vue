<template>
  <el-col :span="15" :offset="1">
    <el-card shadow="hover">
      <div slot="header">
        <span>{{ orderData.airline }}{{ orderData.flight_number }}</span>
        <el-divider></el-divider>
        <el-row class="wow">
          <el-col :span="8">
            <span>{{ orderData.origin }}</span>
          </el-col>
          <el-col :span="8">
            <i class="el-icon-right" />
          </el-col>
          <el-col :span="8">
            <span>{{ orderData.destination }}</span>
          </el-col>
        </el-row>
      </div>

      <el-row>
        <el-col :span="12">
          Departure time:
        </el-col>
        <el-col :span="12">
          Return time:
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-date-picker
            v-model="orderData.departure_at"
            type="datetime"
            :readonly="true"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="12">
          <el-date-picker
            v-model="orderData.return_at"
            type="datetime"
            :readonly="true"
          >
          </el-date-picker>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div>
        ${{ orderData.price }}
      </div>
    </el-card>
  </el-col>
</template>
<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.orderData.price = this.$cookies.get("price");
      this.orderData.airline = this.$cookies.get("airline");
      this.orderData.flight_number = this.$cookies.get("flight_number");
      this.orderData.departure_at = this.$cookies.get("departure_at");
      this.orderData.return_at = this.$cookies.get("return_at");
      this.orderData.origin = this.$cookies.get("origin");
      this.orderData.destination = this.$cookies.get("destination");
      console.log(this.orderData);
    }
  },
  data() {
    return {
      price: 0,
      orderData: {
        price: "",
        airline: "",
        flight_number: "",
        departure_at: "",
        return_at: "",
        origin: "",
        destination: ""
      }
    };
  }
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
  text-align: center;
}
.wow {
  margin-bottom: 0px;
}
.el-card >>> .el-card__header {
  background-color: #00a896 !important;
  color: white;
  text-align: center;
}
</style>
