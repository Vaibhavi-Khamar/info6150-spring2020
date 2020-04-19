<template>
  <div>
    <el-container>
      <el-main>
        <el-row>
          <h1>Your Profile</h1>
        </el-row>
        <el-row class="list">
          <p>NAME</p>
        </el-row>
        <el-row>
          <el-input :disabled="flag" v-model="json.name"></el-input>
        </el-row>
        <el-row class="list">
          <p>USERNAME</p>
        </el-row>
        <el-row>
          <el-input :disabled="true" v-model="json.username"></el-input>
        </el-row>
        <el-row class="list">
          <p>EMAIL</p>
        </el-row>
        <el-row>
          <el-input :disabled="flag" v-model="json.email"></el-input>
        </el-row>
        <el-row class="list">
          <p>CURRENT CITY</p>
        </el-row>
        <el-row>
          <el-input :disabled="flag" v-model="json.city"></el-input>
        </el-row>
        <el-row class="list">
          <p>ABOUT YOU</p>
        </el-row>
        <el-row>
          <el-input :disabled="flag" v-model="json.about"></el-input>
        </el-row>
        <!-- USERID: <el-input :disabled="flag" v-model="json.userid"></el-input> -->

        <el-row class="wow">
          <el-button type="primary" v-show="flag" @click="editProfile"
            >Edit Profile</el-button
          >
          <el-button type="success" v-show="!flag" @click="update"
            >Update</el-button
          >
          <el-button type="warning" v-show="!flag" @click="getJson"
            >Cancel</el-button
          >
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: true,
      json: {},
      flag: true
    };
  },
  mounted() {
    this.getJson();
    //this.profile();
  },

  methods: {
    editProfile() {
      this.flag = !this.flag;
    },
    update(){
      if(this.newUser){
        this.createProfile();
        this.newUser = false;
      }else(
        this.updateProfile()
      )
    },
    updateProfile() {
      this.flag = !this.flag;
      this.$axiosUtil
        .put("back/profile/", {
          name: this.json.name,
          email: this.json.email,
          city: this.json.city,
          about: this.json.about,
          username: this.json.username

          // userid: 6,
          // username:"zoe",
          // email: "email",
          // city:"city",
          // about:"about"
        })
        .then( ()=> {
          this.getJson()
        });
      // this.refresh()
    },
    createProfile() {
      this.flag = !this.flag;
      this.$axiosUtil
        .post("back/profile/", {
          name: this.json.name,
          email: this.json.email,
          city: this.json.city,
          about: this.json.about,
          username: this.json.username,
          userid: this.$store.getters.getId
        })
        .then( ()=> {
          this.getJson()
        });
      // this.refresh()
    },
    getJson() {
      this.flag = true;
      this.$axiosUtil
        .get("back/profile/", {
          userid: this.$store.getters.getId
        })
        .then(
          res => {
            this.json = res.data;
            this.newUser = false;
          },
          rej => {
            console.log(rej)
            this.json = {};
            this.newUser = true;
            this.json.username = this.$store.getters.getUsername;
          }
        );
    },
    refresh(){
      this.$router.push("/profile");
    }
  }
};
</script>
<style scoped>
.el-row {
  margin-bottom: 10px;
  text-align: center;
}
h1 {
  color: #00a896;
  font-size: 300%;
  margin: 10px;
}

.list {
  text-align: left;
}
.wow {
  padding: 25px;
}
.el-card {
  background-color: white !important;
  color: #00a896;
  text-align: center;
}
.el-main {
  /* border-radius: 15px; */
  /* background-clip: padding-box;
  margin: 3% auto; */
  width: 50%;
  color: #00a896;
  padding: 10%;
  background: rgba(230, 225, 225, 0.863);
  /* border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #f0f3bd; */
}
</style>
