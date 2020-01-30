<template>
  <div class="container" v-if="getTicket">
    <div class="row" v-if="getTicket.creatorId && getTicket.creatorId.length">

      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="card">
        
          <div class="card-body">
            <div class="d-flex justify-content-between ">
              <div class="message">
                <h5 class="card-title">{{ getTicket.title }}</h5>
                <div class="content expanded card-text">{{ getTicket.content }}</div>
                <div class="ticket-image" v-if="getTicket.image !== 'nofile'">
                  <img :src="getTicket.image" alt="ticket image" class="card-image image-responsive">
                </div>
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
                  {{ getTicket.tags }}
                </span>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="row">
              
              <div class="col-auto">
                <img :src="getTicket.creatorId[0].imgAvatar" class="image-avatar rounded-circle">
              </div>

              <div class="col-auto p-0">
                <div class="">
                  <span><b>{{ getTicket.creatorId[0].username }} </b>posted a question</span>
                </div>
                <small class="text-muted time">asked:{{ getTicket.created_at | date }}</small>
              </div>

            </div>
          </div>         
        </div>
      </div>
    </div>

    <div class="row" v-if="getComments.length > 0">
      <div class="col-md-2"></div>
      <div class="col-xs-12 col-md-8 col-md-offset-2">
        <div v-for="comment in getComments" :key="comment._id" class="card">

          <div class="card-body">  

             <div class="d-flex justify-content-between ">
              <div class="message">
                <p>{{ comment.content }}</p>
                <div v-if="comment.image !== 'nofile'" class="ticket-image">
                  <img :src="comment.image" alt="comment image" class="comment-image">
                </div>
              </div>

              <div class="ticket-comments votes pt-1">
                <span class="arrow" @click="() => { window.console.log('up')}"><b-icon-chevron-up></b-icon-chevron-up></span>
                <div class="comments text-center">5</div> 
                <span class="arrow" @click="() => { window.console.log('down')}"><b-icon-chevron-down></b-icon-chevron-down></span>
              </div> 
            </div>
          </div>
            
          <div class="card-footer" v-if="comment.creatorCommentId">
            <div class="row">
              
              <div class="col-auto">
                <img :src="comment.creatorCommentId.imgAvatar" :alt="comment.creatorCommentId.imgAvatar" class="image-avatar rounded-circle">
              </div>

              <div class="col-auto p-0">
                <div class="">
                  <span><b>{{ comment.creatorCommentId.username }}</b></span>
                </div>
                <small class="text-muted time">{{ comment.created_at | date }}</small>
              </div>

            </div>
          </div>   
        </div>
      </div>
    </div>

    <div>
      <new-comment></new-comment>
    </div>
  </div> 
</template>

<script>
import { GET_TICKET } from '../store/actions.type';
import { mapGetters } from 'vuex';
import { BIcon, BIconChevronDown, BIconChevronUp } from 'bootstrap-vue';
import NewComment from '../components/NewComment';
import store from '../store';

export default {
  name: 'ticketDetail',
  data() {
    return {
      commentsArr: [],
      uploadsURL: `${process.env.VUE_APP_API}/uploads/`
    };
  },

  components: {
    NewComment,
    BIcon,
    BIconChevronDown,
    BIconChevronUp
  },

  computed: {
    ...mapGetters(['getTicket', 'getComments']),
    // DOUBT -> Move to store: getter ??
    isTicketCreator() {
      // return this.ticket && this.ticket.creatorId[0] && (this.isTicketCreator[0]._id === this.currentUser._id);
      return true;
    }
  },

  beforeRouteEnter(to, from, next) {
    const { id } = to.params;
    store.dispatch(GET_TICKET, id).then(() => {
      next();
    });

  },

  mounted() {
    this.$nextTick(() => {
      // this.getTicketById();
    });
  },

  methods: {
    getTicketById() {
      const { id } = this.$route.params;
      this.$store.dispatch(GET_TICKET, id);
      // this.$store.dispatch(GET_TICKET_COMMENTS, id);
    },
  }
}
</script>

<style scoped>
  .content.expanded {
    height: auto;
    overflow: visible;
    text-overflow: unset;
  }

  .ticket-comments.votes {
    height: auto;
    font-weight: bold;
    color: #404040;
    background-color: transparent;
  }

  .ticket-comments.votes .arrow {
    font-size: 21px;
  }

  .ticket-image {
    max-width: 700px;
  }

  .ticket-image img {
    width: 100%;
  }

  .ticket-image .comment-image {
    width: 75%;
  }
</style>