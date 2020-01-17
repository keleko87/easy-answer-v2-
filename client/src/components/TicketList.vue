<template>
  <div>
    <div v-if="isLoading" class="ticket-preview">Loading tickets...</div>
    <div v-else>
      <div v-if="tickets.length === 0" class="ticket-preview">
        No tickets are here... yet.
      </div>
    </div>

    <!-- <div class="container">
      <div class="row" v-for="(ticket) in tickets" :ticket="ticket" :key="ticket._id">
        <div class="col-md-2"></div>
        <div class="card col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ ticket.title }}</h5>
            <p class="card-text">{{ ticket.description }}</p>
          </div>
          <template v-if="ticket.image !== 'nofile'">
            <img class="card-img-top" :src="ticket.image" alt="Card image cap">
          </template>
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
    </div> -->

    <div class="container-fluid">

      <template v-if="tickets.length">
        <div class="row" v-for="ticket in tickets" :ticket="ticket" :key="ticket._id">         
 
          <div class="col-xs-12 col-md-8 col-md-offset-2">
            <div class="panel panel-white post panel-shadow">
                <div class="post-heading">
                    <div class="pull-left image">
                        <img :src="ticket.creatorId[0].imgAvatar" 
                             class="img-circle avatar" alt="user profile image">
                    </div>
                    <div class="pull-left meta">
                        <div class="title h5">
                            <a href="#"><b>{{ ticket.creatorId[0].username }}</b></a>
                            posted a question
                        </div>
                        <h6 class="text-muted time">Created:{{ ticket.created_at }}</h6>
                    </div>
                </div>
                <div class="post-description">

                  <h2>
                    <router-link to="`/ticket/${ticket._id}`">{{ ticket.title }}</router-link>
                  </h2>

                    <p class="limit-words">{{ ticket.content }}</p>

                    <div class="stats">
                        <span class="label lb-lg">{{ ticket.tags }}</span>
                    </div>
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
