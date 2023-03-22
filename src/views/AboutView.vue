<template lang="pug">
#AboutView
  iViewForm
</template>
<script>
export default {
  components:{
    iViewForm:()=>import("@/components/iViewForms/InlineForm.vue")
  }
};
</script>
