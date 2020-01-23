<template>
  <div class="home">

    <div class="jumbotron">
      <h1>Easy Answer 2</h1>
      <h4>Join the web development community of Easy Answer to share your knowledge, learn or discuss!</h4>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2> All Questions</h2>
        </div>
        <div class="col-6">
          <h5>{{ tickets.length }} questions</h5>
        </div>
        <div class="col-6 form-group">
          <label for="search" class="px-3">Filter questions</label>
          <input name="search" type="text" class="w-50" placeholder="Search">
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <ticket-list :type="'all'"></ticket-list>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TicketList from '../components/TicketList';

export default {
  name: 'home',
  data() {
    return {
      env: process.env
    };
  },

  components: {
    TicketList
  },

    computed: {
    ...mapGetters(["currentUser", "isAuthenticated", "tickets"])
  }
};
</script>

<style scoped>
  .jumbotron {
    text-align: center;
    color: #FFF;
    font-weight: bold;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background: linear-gradient(-45deg, #791c96, #8e4eaf, #6894bf, #417fcc);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

</style>