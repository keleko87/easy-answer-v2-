<template>
  <div class="ticket-container">
    <div v-if="isLoading" class="ticket-preview">Loading tickets...</div>
    <div v-else>
      <div v-if="tickets.length === 0" class="ticket-preview">
        No tickets are here... yet.
      </div>
    </div>

    <div class="row" v-if="tickets.length">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="card" v-for="ticket in tickets" :ticket="ticket" :key="ticket._id">
        
          <div class="card-body">
            <div class="d-flex justify-content-between ">
              <div class="message">
                <h5 class="card-title">
                  <router-link :to="{ name: 'ticket-detail', params: { id: ticket._id }}" class="">
                    {{ ticket.title }}
                  </router-link>
                </h5>
                <div class="content card-text">
                  {{ ticket.content }}
                </div>
              </div>

              <div class="ticket-comments pt-1">
                <div class="comments text-center">23</div> 
                <small>answers</small>
              </div> 
            </div>
          
            <div class="actions">
              <div>
                <a href="#" class="card-link">Like</a>
                <a href="#" class="card-link">Reply</a>
                <a href="#" class="card-link">Share</a>
              </div>
              <div class="tag">
                <span class="tag-text">
                  {{ ticket.tags}}
                </span>
              </div>
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
      </div>
    </div>

    <div class="row">
      <div class="mx-auto">
        <b-pagination
          v-model="pagination.currentPage"
          :total-rows="ticketsCount"
          :per-page="pagination.perPage"
          aria-controls="ticket-list"
        ></b-pagination>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_TICKETS } from "../store/actions.type";
import { BPagination } from 'bootstrap-vue';

export default {
  name: "ticket-list",

  components: {
    BPagination
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
      pagination: {
        currentPage: 1,
        rows: 4,
        perPage: 2
      },
      hostURL: process.env.VUE_APP_API
    };
  },

  computed: {
    ...mapGetters(['ticketsCount', 'isLoading']),
    tickets() {
      const items = this.$store.getters.tickets;
      // Return just page of items needed
      return items.slice(
        (this.pagination.currentPage - 1) * this.pagination.perPage,
        this.pagination.currentPage * this.pagination.perPage
      )
    },
    totalRows () {
      return this.$store.getters.loadedLists.length
    }
  },

  mounted() {
    this.fetchtickets();
  },

  methods: {
    fetchtickets() {
      this.$store.dispatch(GET_TICKETS);
    }
  }
};
</script>

<style scoped>

</style>