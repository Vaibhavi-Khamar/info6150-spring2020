<template>
  <el-col :span="7" :offset="1">
    <h2><i class="el-icon-info" />Important Flight Information</h2>
    <ul v-for="(item, index) in info" :key="index">
      <li>{{ item }}</li>
    </ul>
  </el-col>
</template>
<script>
export default {
  data() {
    return {
      info: [
        "Departure flight departs sometime between 4:00pm and 11:59pm.",
        "Exact flight details, including airline, will be available in your itinerary after booking.",
        "Your trip may include a change of aircraft or airline.",
        "Tickets are non-refundable, non transferable and can’t be canceled or changed. Name changes are not allowed.",
        "Additional fees for checked baggage or other services may apply.",
        "Seats may not be available until after check-in."
      ]
    };
  },
  components: {}
};
</script>
