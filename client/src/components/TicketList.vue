<template>
  <div>
    <div v-if="isLoading" class="ticket-preview">Loading tickets...</div>
    <div v-else>
      <div v-if="tickets.length === 0" class="ticket-preview">
        No tickets are here... yet.
      </div>
      <div
        v-for="(ticket) in tickets"
        :ticket="ticket"
        :key="ticket._id">
      
        <div class="card" style="width: 18rem;">
          <template v-if="ticket.image !== 'nofile'">
            <img class="card-img-top" :src="ticket.image" alt="Card image cap">
          </template>
          <div class="card-body">
            <h5 class="card-title">{{ ticket.title }}</h5>
            <p class="card-text">{{ ticket.description }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_TICKETS } from "../store/actions.type";

export default {
  name: "ticket-list",
  components: {
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "all"
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    ...mapGetters(["ticketsCount", "isLoading", "tickets"])
  },

  mounted() {
    this.fetchtickets();
  },

  methods: {
    fetchtickets() {
      this.$store.dispatch(FETCH_TICKETS);
    }

    // ADD PAGINATION 
  }
};
</script>
