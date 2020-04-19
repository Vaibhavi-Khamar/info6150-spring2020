<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <div
      style="padding-top: 56.25%; width: 100%; height: 0; position: relative;"
    >
      <el-image
        style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;"
        :src="imgSrc"
        fit="fill"
      />
    </div>
    <div class="card-body">
      {{ title }}
      <i
        class="el-icon-arrow-right"
        style="float: right"
        @click="ToPackage()"
      ></i>
    </div>
  </el-card>
</template>
<script>
export default {
  props: ["imgSrc", "title", "text"],
  data() {
    return {};
  },
  methods: {
    ToPackage: function() {
      this.$router.push("/" + this.title);
    }
  }
};
</script>
<style scoped>
.card-body {
  padding: 14px;
  color: white;
  background-image: linear-gradient(to right, #00a896, #02c39a);
}
</style>
