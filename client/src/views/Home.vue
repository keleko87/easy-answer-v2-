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
import { mapGetters } from "vuex";
// import { FETCH_TICKETS } from "../store/actions.type";
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
  },

    computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
};
</script>

<style scoped>
  .jumbotron {
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