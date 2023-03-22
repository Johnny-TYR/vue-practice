<template lang="pug">
#AboutView
  CustomForm
  iViewForm
</template>
<script>
export default {
  components:{
    CustomForm:()=>import("@/components/Form/CustomForm.vue"),
    iViewForm:()=>import("@/components/Form/iViewForm.vue")
  }
};
</script>
