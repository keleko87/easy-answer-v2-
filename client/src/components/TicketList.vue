<template>
  <div class="ticket-container">
    <div v-if="isLoading" class="ticket-preview">Loading tickets...</div>
    <div v-else>
      <div v-if="tickets.length === 0" class="ticket-preview">
        No tickets are here... yet.
      </div>
    </div>

    <div class="container">
      <template v-if="tickets.length">
        <div class="card" v-for="ticket in tickets" :ticket="ticket" :key="ticket._id">
        
          <div class="card-body">
            <div class="message">
               <h5 class="card-title">
                 <router-link :to="{ name: 'ticket-detail', params: { id: ticket._id }}" class="">
                    {{ ticket.title }}
                  </router-link>
                </h5>
              <h5 class="card-title">{{ ticket.title }}</h5>
              <p class="card-text">{{ ticket.content }}</p>
              <!-- <img :src="ticket.image" alt="ticket image"> -->
            </div>
            <div class="actions">
              <a href="#" class="card-link">Like</a>
              <a href="#" class="card-link">Reply</a>
              <a href="#" class="card-link">Share</a>
            </div>
          </div>

           <div class="card-footer">
            <div class="row">
              <div class="col-auto">
                <img :src="ticket.creatorId[0].imgAvatar" class="image-avatar float-left rounded-circle">
              </div>
              <div class="col-auto p-0">
                <div class="">
                  <span><b>{{ ticket.creatorId[0].username }} </b>posted a question</span>
                </div>
                <small class="text-muted time">asked:{{ ticket.created_at | date }}</small>
              </div>
            </div>
          </div>         
        </div>
      </template>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_TICKETS } from "../store/actions.type";

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
      currentPage: 1,
      hostURL: process.env.VUE_APP_API
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
      this.$store.dispatch(GET_TICKETS);
    },

    // ADD PAGINATION 
  }
};
</script>

<style scoped>
  .card {
    text-align: left;
    margin-bottom: 20px;
  }
  .card .card-body .message {
  }

  .card .card-body .actions {
    margin-top: 5px;
  }

  .image-avatar {
    width: 41px;
    height: 41px;
  }

  .ticket-label {
    padding: 5px;
    color: #39739d;
    background-color: #e1ecf4;
    border-color: #e1ecf4;
  }

</style>