<template>

  <div id="app">
    <router-view></router-view>
    
</div>
</template>

<script>

//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
  
  
  }
}
</script>

<style>
@import url('./style/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');

#app {
  font-family:'Roboto', sans-serif;
  
  padding: 02px;
}
</style>
