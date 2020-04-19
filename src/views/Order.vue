<template>
  <el-container>
    <el-main>
      <el-row>
        <Title />
      </el-row>
      <el-row>
        <Detail />
        <Info />
      </el-row>
      <el-row>
        <p></p>
      </el-row>
      <el-row>
        <el-col :offset="1">
          <el-button type="primary" icon="el-icon-check" @click="confirm"
            >Confirm</el-button
          >
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import Title from "@/components/order/Title.vue";
import Detail from "@/components/order/Detail.vue";
import Info from "@/components/order/Info.vue";
import { v1 as uuidv1 } from "uuid";

export default {
  mounted() {
    this.orderData.price = this.$cookies.get("price");
    this.orderData.airline = this.$cookies.get("airline");
    this.orderData.flight_number = this.$cookies.get("flight_number");
    this.orderData.departure_at = this.$cookies.get("departure_at");
    this.orderData.return_at = this.$cookies.get("return_at");
    this.orderData.origin = this.$cookies.get("origin");
    this.orderData.destination = this.$cookies.get("destination");
  },
  data() {
    return {
      orderData: {}
    };
  },
  components: {
    Title,
    Detail,
    Info
  },
  methods: {
    confirm() {
      if (!this.$store.getters.isLoggedIn) {
        this.$message({
          message: "Sign in First!",
          type: "warning"
        });
        this.$router.push("/sign-in");
      } else {
        var no = this.generateOrderNo();
        console.log(this.$store.getters.getId);
        this.$axiosUtil
          .post("back/order", {
            no: no,
            userId: this.$store.getters.getId,
            data: this.orderData
          })
          .then(
            () => {
              this.$message({
                message: "Order " + no + " confirmed!",
                type: "success"
              });
              this.$router.push("/orders");
            },
            rej => {
              if (rej.response.status == 400) {
                this.$message.error("ERROR!");
              }
            }
          );
      }
    },
    generateOrderNo() {
      return uuidv1();
    }
  }
};
</script>
