<template>
  <el-card shadow="hover">
    <div slot="header">
      <h1>Order Number : {{ orderData.no }}</h1>
    </div>
    <el-row>
      <el-col :span="12">
        <b>Flight Number: </b>
      </el-col>
      <el-col :span="12">
        <span>
          {{ orderData.data.airline }}{{ orderData.data.flight_number }}</span
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <b>From: </b>
      </el-col>
      <el-col :span="12">
        <span>{{ orderData.data.origin }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <b>To: </b>
      </el-col>
      <el-col :span="8">
        <span>{{ orderData.data.destination }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <b>
          Departure time:
        </b>
      </el-col>
      <el-col :span="12">
        <el-date-picker
          v-model="orderData.data.departure_at"
          type="datetime"
          :readonly="true"
        >
        </el-date-picker>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <b>
          Return time:
        </b>
      </el-col>
      <el-col :span="12">
        <el-date-picker
          v-model="orderData.data.return_at"
          type="datetime"
          :readonly="true"
        >
        </el-date-picker>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="12">
        <b>Price: </b>
      </el-col>
      <el-col :span="12">
        <span>${{ orderData.data.price }}</span>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
export default {
  props: ["orderData"]
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-card >>> .el-card__header {
  background-color: #00a896 !important;
  color: white;
  text-align: center;
}
</style>
