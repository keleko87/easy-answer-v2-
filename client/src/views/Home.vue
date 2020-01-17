<template>
  <div class="home">
    <div class="jumbotron">
      <h1>Easy Answer 2</h1>
      <p class="shadow">Join the web development community of Easy Answer to share your knowledge, learn or discuss!</p>
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
    /*border-radius:10px!important;*/
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('/assets/img/blurry.jpg');
    color: #FFF;
    position: relative;
    height: 100%;
    padding: 20px;
  }

  .jumbotron h1 {
    color: #ffeb3b;
    text-shadow: -1px 0 black, 0 1px black;
    text-align: center;
  }

  .jumbotron p {
    text-align: center;
  }

  .jumbotron .btn {
    border-radius: 0px!important;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    padding: 10px 40px;
    text-align: center;
  }

</style>