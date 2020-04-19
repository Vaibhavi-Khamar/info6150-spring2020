<template>
  <el-col :offset="1">
    <el-row>
    <h2>Your Profile</h2>
    </el-row>
    <el-card shadow="hover">

    <el-row>
        <el-col :span="8">
          Name:
        </el-col>
        <el-col :span="8">
          <el-profile
            v-model="json"
            :readonly="true"
            >
          </el-profile>
        </el-col>
    </el-row>

    </el-card>
  </el-col>
</template>
<script>
export default {
  props: {
  json: {}
  }
};
</script>
<style scoped>
h2 {
  color: #00a896;
}
</style>