<template>
  <div id="navbar">
    <el-menu
      mode="horizontal"
      default-active="/"
      router
      background-color="#00a896"
      text-color="#fff"
      active-text-color="#f0f3bd"
    >
      <el-menu-item index="/" style="display:inline">
        <el-image
          style="width: 100%; height: 100%"
          :src="require('@/assets/logo@0,2x.png')"
          fit="contain"
        ></el-image
      ></el-menu-item>
      <!-- <el-menu-item index="/destinations">
        <span slot="title">
          <font-awesome-icon icon="map-marker-alt" />&emsp;Destinations</span
        ></el-menu-item
      > -->
      <el-menu-item index="/flights">
        <span slot="title">
          <font-awesome-icon icon="plane-departure" />&emsp;Flights</span
        ></el-menu-item
      >
      <el-menu-item index="/hotels">
        <span slot="title"
          ><font-awesome-icon icon="hotel" />&emsp;Hotels</span
        ></el-menu-item
      >
      <el-menu-item index="/cruises">
        <span slot="title"><font-awesome-icon icon="ship" />&emsp;Cruises</span
        >&emsp;</el-menu-item
      >
      <el-menu-item index="/vacation-rentals">
        <span slot="title"
          ><font-awesome-icon icon="map-marked-alt" />&emsp;Vacation
          Rentals</span
        ></el-menu-item
      >
      <el-submenu index="/more">
        <template slot="title">
          <font-awesome-icon icon="list-alt" />
          &emsp;More
        </template>
        <el-menu-item index="/cars"
          ><font-awesome-icon icon="car" />&emsp;Cars</el-menu-item
        >
        <el-menu-item index="/deals"
          ><font-awesome-icon icon="percentage" />&emsp;Deals</el-menu-item
        >
        <el-menu-item index="/rewards"
          ><font-awesome-icon icon="gift" />&emsp;Rewards</el-menu-item
        >
        <el-menu-item index="/mobile"
          ><font-awesome-icon icon="mobile" />&emsp;Mobile</el-menu-item
        >
      </el-submenu>
      <el-submenu index="user" class="navUser">
        <template slot="title"
          ><font-awesome-icon icon="user-alt" />&emsp;User</template
        >
        <el-menu-item v-show="f1" index="/profile">Profile</el-menu-item>
        <el-menu-item v-show="f1" index="/orders">Orders</el-menu-item>
        <el-menu-item v-show="!f1" index="/sign-in">Sign In</el-menu-item>
        <el-menu-item v-show="f1" @click="signOut()">Sign out</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signIn: false
    };
  },
  computed: {
    f1() {
      return this.$store.getters.isLoggedIn;
    }
  },
  mounted() {
    this.refreshSign();
  },
  methods: {
    refreshSign: function() {
      console.log(this.$store.getters.getUsername);
      console.log(this.$store.getters.isLoggedIn);
      if (this.$store.getters.isLoggedIn) {
        this.signIn = true;
      } else {
        this.signIn = false;
      }
    },
    signOut: function() {
      alert("SIGN OUT!");
      this.$store.dispatch("SignOut").then(() => {
        this.refreshSign();
        this.$router.push("/sign-in");
      });
    }
  }
};
</script>

<style scoped>
.navUser {
  padding-right: 0px;
  float: right;
}
</style>
