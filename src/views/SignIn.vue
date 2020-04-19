<template>
  <div
    class="container"
    :style="{
      backgroundImage: 'url(' + this.bgImg + ')',
      height: containerHeight + 'px'
    }"
  >
    <el-form class="login-container" :model="userdata">
      <el-tabs value="first" stretch>
        <!-- Sign up -->
        <el-tab-pane label="Sign up" name="first">
          <el-form-item label="Username">
            <el-input v-model="userdata.username"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="userdata.email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="userdata.password"></el-input>
          </el-form-item>
          <el-form-item
            style="display:flex;justify-content:center;align-items:center;height:'10vw'"
          >
            <el-button type="primary" @click="signUp()"
              >Create Account</el-button
            >
          </el-form-item>
        </el-tab-pane>
        <!-- Sign in -->
        <el-tab-pane
          label="Sign in"
          name="second"
          :style="{ height: containerHeight }"
        >
          <el-form-item label="Username">
            <el-input v-model="userdata.username"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="userdata.password"></el-input>
          </el-form-item>
          <el-form-item style="display:flex;justify-content:center">
            <el-button type="primary" @click="signIn()">Sign in</el-button>
          </el-form-item></el-tab-pane
        >
      </el-tabs>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgImg: require("@/assets/login_bg_blur.png"),
      containerHeight: "",
      userdata: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    setSize: function() {
      // calculate height
      this.screenWidth = window.innerWidth;
      this.containerHeight = (9 / 16) * this.screenWidth;
    },
    signUp: function() {
      this.$axiosUtil
        .post("back/user/signUp", {
          username: this.userdata.username,
          email: this.userdata.email,
          password: this.userdata.password
        })
        .then(
          () => {
            this.$message({
              message: "Sign up Success!",
              type: "success"
            });
          },
          rej => {
            if (rej.response.status == 403) {
              this.$message.error("Username already exists!");
            }
          }
        );
    },
    signIn: function() {
      this.$axiosUtil
        .post("back/user/signIn", {
          username: this.userdata.username,
          password: this.userdata.password
        })
        .then(
          res => {
            this.$message({
              message: "Sign in Success!",
              type: "success"
            });
            this.$store
              .dispatch("SignIn", {
                id: res.data.id,
                username: this.userdata.username
              })
              .then(() => {
                this.$router.push("/");
              });
          },
          rej => {
            if (rej.response.status == 400) {
              this.$message.error("ERROR!");
            } else if (rej.response.status == 403) {
              this.$message.error("User not found!");
            }
          }
        );
    }
  },
  mounted() {
    // first time load
    this.setSize();
    // window size change
    window.onresize = () => {
      this.setSize();
    };
  }
};
</script>
<style scoped>
.container {
  background-position: center;
  background-size: cover;
  display: flex;
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 9% auto;
  width: 50%;
  padding: 5%;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #f0f3bd;
}
</style>
