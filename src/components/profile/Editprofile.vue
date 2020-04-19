<template>
  <el-form :model="json">
  <el-form-item label="Name">
    <el-input v-model="json.name"></el-input>
  </el-form-item>
  <el-form-item label="Username">
    <el-input v-model="json.region"></el-input>
  </el-form-item>
  <el-form-item label="Current City">
    <el-input v-model="json.type"></el-input>
  </el-form-item>
  <el-form-item label="About You">
    <el-input v-model="json.type"></el-input>
  </el-form-item>
</el-form>
</template>
<script>
export default {
props: {
  json: {}
  }
};
</script>
