<template>
  <div class="container" v-if="ticket && ticket.creatorId.length">
    <div class="row">

      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="card">
        
          <div class="card-body">
            <div class="d-flex justify-content-between ">
              <div class="message">
                <h5 class="card-title">{{ ticket.title }}</h5>
                <div class="content expanded card-text">{{ ticket.content }}</div>
              </div>

              <div class="ticket-comments pt-1">
                <div class="comments text-center">23</div> 
                <small>answers</small>
              </div> 
            </div>
          
            <div class="actions">
              <div>
                <template v-if="isTicketCreator">
                  <a href="#" class="card-link">Edit</a>
                  <a href="#" class="card-link">Delete</a>
                </template>
                <a href="#" class="card-link">Share</a>
              </div>
              <div class="tag">
                <span class="tag-text">
                  {{ ticket.tags }}
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
  </div> 
</template>

<script>
import { GET_TICKET } from '../store/actions.type';
import { mapGetters } from 'vuex';

export default {
  name: 'ticketDetail',
  data() {
    return {

    };
  },

  computed: {
    ...mapGetters(['ticket', 'currentUser']),

    // DOUBT -> Move to store: getter ??
    isTicketCreator() {
      return this.ticket.creatorId[0]._id === this.currentUser._id;
    }
  },

  created() {
    this.getTicketById();  
  },

  methods: {
    getTicketById() {
      const { id } = this.$route.params;
      this.$store.dispatch(GET_TICKET, id);
    }
  },
}
</script>

<style scoped>
  .content.expanded {
    height: auto;
    overflow: visible;
    text-overflow: unset;
  }
</style>