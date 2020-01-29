import { TicketsService, CommentService } from '../../common/api.service';
import { SAVE_TICKET, SAVE_COMMENT, GET_TICKET, GET_TICKET_COMMENTS } from '../actions.type';
import { SET_TICKET, SET_COMMENT_IN_TICKET, SET_COMMENTS } from '../mutations.type';
import Vue from 'vue';

const state = {
  data: {
    id: '',
    title: '',
    content: '',
    tags: [],
    file: {},
    comments: [],
    creatorId: []
  }
};

const getters = {
  getTicket(state) {
    return state.data;
  },

  getComments(state) {
    return state.data.comments;
  }
};

const actions = {
  async [GET_TICKET](context, id) {
    const { data } = await TicketsService.getTicket(id);
    context.commit(SET_TICKET, data);
    const comments = await CommentService.getTicketComments(id);
    context.commit(SET_COMMENTS, comments.data);
    // context.dispatch(GET_TICKET_COMMENTS, id);
  },

  async [GET_TICKET_COMMENTS] (context, ticketId) {
    const { data } = await CommentService.getTicketComments(ticketId);
    context.commit(SET_COMMENTS, data);
  },

  async [SAVE_TICKET](context, form) {
    try {
      await TicketsService.saveTicket(form);
      context.commit(SET_TICKET, form);
    } 
    catch(err) {
      window.console.log('error', err);
      return err;
    }
  },

  async [SAVE_COMMENT](context, { form, id }) { 
    try {
      const { data } = await CommentService.saveComment(form, id);
      
      if (data) {
        context.commit(SET_COMMENT_IN_TICKET, data);
        console.log(context.getters.getComments, 'save.comment thennnnn', state.data.comments);
        return data;
      }
    } 
    catch(err) {
      window.console.log('error', err);
      return err;
    }
  }
};

const mutations = {
  [SET_TICKET](state, newTicket) {
    state.data = newTicket;
  },
  [SET_COMMENTS](state, comments) {
    state.data.comments = comments;
  },
  [SET_COMMENT_IN_TICKET] (state, comment) {
    console.log('setttt', state.data.comments);
    let comments = state.data.comments;
    state.data.comments = [];

    Vue.set(comments, comments.length, comment);
    state.data.comments = comments;
    console.log('set after:::::::', state.data.comments);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
