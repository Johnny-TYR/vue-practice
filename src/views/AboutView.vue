<template lang="pug">
#AboutView
  h1 {{"Inline Form"}}
  iViewForm
  h1 {{"Form Item"}}
  FormItems
</template>
<script>
export default {
  components:{
    iViewForm:()=>import("@/components/iViewForms/InlineForm.vue"),
    FormItems:()=>import("@/components/iViewForms/FormItems.vue")
  }
};
</script>
