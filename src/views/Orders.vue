<template>
  <el-container>
    <el-header>
      <Title />
    </el-header>

    <el-main v-for="(item, index) in json" :key="index">
      <el-row>
        <el-col :span="22" :offset="1">
          <Card :orderData="item" />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import Title from "@/components/orders/Title.vue";
import Card from "@/components/orders/Card.vue";
export default {
  components: {
    Title,
    Card
  },
  data() {
    return {
      json: {}
    };
  },
  mounted() {
    this.getJson();
  },
  methods: {
    getJson() {
      this.$axiosUtil
        .get("back/order", {
          userId: this.$store.getters.getId
        })
        .then(response => {
          this.json = response.data;
        });
    }
  }
};
</script>
