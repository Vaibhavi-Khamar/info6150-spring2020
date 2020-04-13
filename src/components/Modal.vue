<template>
  <div id="Modal">
    <b-button v-b-modal.modal-1>Sign up</b-button>

    <b-modal id="modal-1" centered title="Confirm your email">
      <p class="my-4">An email has been sent to your email address.</p>
      <p>Please verify it!</p>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "Modal"
};
</script>
<style>
#Modal button {
  color: #05668d !important;
  background-color: #f0f3bd !important;
  border: none !important;
}

#modal-1___BV_modal_header_ {
  color: #f0f3bd;
  background-color: #028090;
}

#modal-1___BV_modal_footer_ {
  color: #f0f3bd;
  background-color: #05668d;
}

#modal-1___BV_modal_content_ .btn-primary {
  color: #05668d;
  background-color: #f0f3bd;
  border: none !important;
}
#modal-1___BV_modal_content_ .btn-secondary {
  color: #05668d !important;
  background-color: #f0f3bd !important;
  border: none !important;
}
</style>
