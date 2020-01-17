<template>
  <div class="home">
    <div class="jumbotron">
      <h1>Easy Answer 2</h1>
      <h4>Join the web development community of Easy Answer to share your knowledge, learn or discuss!</h4>
    </div>
    <div>
      <ticket-list :type="''"></ticket-list>
    </div>
  </div>
</template>

<script>
import TicketList from '../components/TicketList';

export default {
  name: 'home',
  data() {
    return {
      env: process.env
    };
  },
  components: {
    TicketList,
  }
};
</script>

<style scoped>
  .jumbotron {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    /* background-image: url('/public/img/android-chorme-192x192.png'); */
  }

</style>