import Vue from 'vue';
import { TicketsService, CommentService } from '../../common/api.service';
import { SAVE_TICKET, SAVE_COMMENT, GET_TICKET, GET_TICKET_COMMENTS } from '../actions.type';
import { SET_TICKET, SET_COMMENT_IN_TICKET, SET_COMMENTS } from '../mutations.type';

const state = {
  data: {},
  comments: [],
};

const getters = {
  getTicket(state) {
    return state.data;
  },

  getComments(state) {
    return state.comments;
  }
};

const actions = {
  async [GET_TICKET](context, id) {
    const { data } = await TicketsService.getTicket(id);
    context.commit(SET_TICKET, data);
    context.dispatch(GET_TICKET_COMMENTS, id);
  },

  async [GET_TICKET_COMMENTS] (context, ticketId) {
    const { data } = await CommentService.getTicketComments(ticketId);
    context.commit(SET_COMMENTS, data);
    return data;
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

    const { data } = await CommentService.saveComment(form, id);

    if (data) {
      context.commit(SET_COMMENT_IN_TICKET, data);
      context.dispatch(GET_TICKET_COMMENTS, id);
    }
  }
};

const mutations = {
  [SET_TICKET](state, newTicket) {
    state.data = { ...newTicket };  // Equivalent to Object.assign({}, newTicket);
  },
  [SET_COMMENTS](state, comments) {
    state.comments = [ ...comments ];
  },
  [SET_COMMENT_IN_TICKET] (state, comment) {
    // state.comments.push(comment); // NO REACTIVE 
    Vue.set(state.comments, state.comments.length, comment);  // REACTIVE!!
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
