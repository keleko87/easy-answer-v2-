<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Header from './components/Header';
// import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
