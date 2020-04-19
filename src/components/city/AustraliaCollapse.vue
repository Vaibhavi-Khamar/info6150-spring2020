<template>
<div>
   <el-collapse v-model="activeName" accordion>
  <el-collapse-item title="AUSTRALIA'S ANIMALS" name="1">
    <div>In Australia we have many unique native animals. Some are very famous, such as koalas and kangaroos, while others may not be familiar to visitors.</div>
    <div>The fauna of Australia is incredibly unique, and often a bucket list item for visitors. </div>
<div>You can get up close and personal with many of them in our zoos and wildlife parks or, if you're lucky, you might just spot them in their natural habitat.</div>
  </el-collapse-item>
  <el-collapse-item title="AUSTRALIA'S PLANTS" name="2">
    <div>There are an astounding 24,000 species of native plants in Australia, making the country's flora one of our most prized assets. </div>
    <div>Here are some of the more common species, and where you can spot them in the wild. </div>
<div>The most famous:ACACIA (WATTLES) Australia boasts more than 1,200 species of Acacia, which are commonly known as wattle trees.</div>
  </el-collapse-item>
  <el-collapse-item title="AUSTRALIA'S SEASONS" name="3">
    <div>Australia is a country for all seasons. Visit at any time of year to find incredible experiences that will guarantee lasting memories.</div>
    <div>Given the size of the country, the climate in Australia varies greatly from one region to the next. </div>
    <div>It’s also important to remember that Australia's seasons are at opposite times to those in the Northern Hemisphere. </div>
  </el-collapse-item>
</el-collapse>
</div>

</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }

</script>
<style scoped>


</style>