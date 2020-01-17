<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/img/mevn.jpg" /> -->
    <ticket-list :type="''"></ticket-list>
  </div>
</template>

<script>
// @ is an alias to /src
import TicketList from '../components/TicketList';

export default {
  name: 'home',
  components: {
    TicketList,
  }
};
</script>
