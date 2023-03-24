<template lang="pug">
#HomeView
  Register(v-show="showRegister")
  Button(@click ="showRegister = !showRegister") {{"Register"}}
</template>

<script>
export default {
  name:'HomeView',
  components:{
    Register:()=>import("@/components/Auth/Register.vue")
  },
  data(){
    return{
      showRegister: false
    }
  }
}
</script>