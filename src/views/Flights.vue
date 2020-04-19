<template>
  <el-container>
    <el-header>
      <Title />
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="9" :offset="1">
          <el-input v-model="origin" placeholder="From"></el-input>
        </el-col>
        <el-col :span="9" :offset="1">
          <el-input v-model="destination" placeholder="To"></el-input>
        </el-col>
        <el-col :span="1" :offset="1">
          <el-button type="primary" icon="el-icon-search" @click="getJson"
            >Search</el-button
          >
        </el-col>
      </el-row>
      <div class="results"></div>
      <div v-for="(item, key, index) in json" :key="index">
        <div v-for="(value, index) in item" :key="index">
          <el-row>
            <Card :flightData="value" :origin="origin" :destination="key" />
          </el-row>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import Title from "@/components/flights/Title.vue";
import Card from "@/components/flights/Card.vue";
export default {
  components: {
    Title,
    Card
  },
  data() {
    return {
      origin: "",
      destination: "",
      json: {
        // "1": {
        //   price: 107,
        //   airline: "NK",
        //   flight_number: 641,
        //   departure_at: "2020-06-10T17:30:00Z",
        //   return_at: "2020-06-27T10:42:00Z",
        //   expires_at: "2020-04-20T04:31:48Z"
        // }
      }
    };
  },
  mounted() {
    this.destination = this.$route.query.destination;
  },
  methods: {
    getJson() {
      this.$axiosUtil
        .get("api/v1/prices/cheap", {
          origin: this.origin,
          destination: this.destination,
          token: "ee5e3a59b78d121e99fd83e4420d6ccd",
          page: "1",
          currency: "USD"
        })
        .then(response => {
          console.log(response.data.data);
          this.json = response.data.data;
        });
    }
  }
};
</script>
<style scoped>
.results {
  margin-top: 20px;
}
.el-row {
  margin-top: 2px;
  border-radius: 4px;
}
</style>
