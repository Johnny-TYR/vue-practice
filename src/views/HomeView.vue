<template lang="pug">
#HomeView
  Register
</template>

<script>
export default {
  name:'HomeView',
  components:{
    Register:()=>import("@/components/Auth/Register.vue")
  }
}
</script>