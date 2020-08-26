<template>
  <div>
    <h2>深入v-model</h2>

    <input type="text" v-model="name">
    <span>{{name}}</span>
    <br>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data() {
      return {
        name:'Tom',
        name2:'Jack',
        name3:'rous',
        name4:'Bob'
      }
    },
    components: {
      CustomInput
    }
  }
</script>
