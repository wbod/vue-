<template>
  <div>
    <h1>EventTest组件</h1>
    <button @click="test1">测试原生事件</button>
    <hr>
    
    <!-- native将自定义事件强制修改为原生事件 -->
    <Event1 @click.native="test2($event)"></Event1>
    <hr>

    <Event2 @click="test3" @xxx="test4($event)"></Event2>
  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    components: {
      Event1,
      Event2,
    },

    methods: {
      test1(){
        alert('test1()' +event.target.innerHTML)
      },
      test2(){
        alert('test2()' +event.target.innerHTML)
      },
      test3(data){
         alert('click test3()' +data)
      },
      test4(data){
        alert('click test4()' +data)
      }
      
    }
  }
</script>
