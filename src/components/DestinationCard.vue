<template>
  <div>
    <div>
      <b-card
        v-bind:title="title"
        v-bind:img-src="src"
        img-alt="Image"
        class="mb-2"
        bg-variant="light"
      >
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "DestinationCard",
  props: {
    src: String,
    title: String
  }
};
</script>
