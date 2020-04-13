<template>
  <div id="navbar">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/">
        <b-img src="../logo@0,2x.png" alt="Responsive image"></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav pills>
          <b-nav-item href="/"
            ><font-awesome-icon icon="plane-departure"></font-awesome-icon>
            Flights</b-nav-item
          >

          <!-- <b-nav-item href="/about">About</b-nav-item> -->

          <b-nav-item href="/hotels">
            <font-awesome-icon icon="hotel"></font-awesome-icon>
            Hotels</b-nav-item
          >

          <b-nav-item href="/Cruises"
            ><font-awesome-icon icon="ship"></font-awesome-icon>
            Cruises</b-nav-item
          >
          <b-nav-item href="/VacationRentals"
            ><font-awesome-icon icon="map-marked-alt"></font-awesome-icon>
            Vacation Rentals</b-nav-item
          >

          <b-nav-item-dropdown id="nav-dropdown" text="More" right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <font-awesome-icon icon="list-alt"></font-awesome-icon>
              More
            </template>
            <b-dropdown-item href="#"
              ><font-awesome-icon icon="car"></font-awesome-icon>
              Cars</b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><font-awesome-icon icon="percentage"></font-awesome-icon> Deals
            </b-dropdown-item>
            <b-dropdown-item href="#"
              ><font-awesome-icon icon="gift"></font-awesome-icon>
              Rewards</b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><font-awesome-icon icon="mobile"></font-awesome-icon>
              Mobile</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Account </em>
              <font-awesome-icon icon="user-alt" />
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style>
#navbar {
  background-color: #028090;
  color: #f0f3bd;
}
.navbar-nav li a {
  color: #f0f3bd !important;
}
.navbar-nav li a:hover {
  color: #02c39a !important;
}
.dropdown-menu {
  background-color: #028090;
}
.dropdown-menu a:hover {
  color: #05668d !important;
  background-color: #a9e4ec !important;
}
</style>
