<template lang="pug">
#AboutView
  h1 {{"Form Todo"}}
  FormTodo
  h1 {{ "Form Custom" }}
  FormCustom
  h1 {{ "Form Validate" }}
  FormValidate
  h1 {{ "Align Forms" }}
  AlignForms
  h1 {{ "Inline Form" }}
  iViewForm
  h1 {{ "Form Item" }}
  FormItems
</template>
<script>
export default {
  components: {
    iViewForm: () => import("@/components/iViewForms/InlineForm.vue"),
    FormItems: () => import("@/components/iViewForms/FormItems.vue"),
    AlignForms: () => import("@/components/iViewForms/AlignForms.vue"),
    FormValidate: () => import("@/components/iViewForms/FormValidate.vue"),
    FormCustom: () => import("@/components/iViewForms/FormCustom.vue"),
    FormTodo: () => import("@/components/iViewForms/FormTodo.vue"),
  },
};
</script>
