import { TicketsService, CommentService } from '../../common/api.service';
import { SAVE_TICKET, GET_TICKET, GET_TICKET_COMMENTS } from '../actions.type';
import { SET_TICKET, SET_COMMENTS } from '../mutations.type';

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
  ticket(state) {
    return state.data;
  },
  getComments(state) {
    return state.data.comments;
  }
};

const actions = {
  async [GET_TICKET](context, id) {
    const { data } = await TicketsService.getTicket(id);
    const comments = await CommentService.getTicketComments(id);
    context.commit(SET_TICKET, data);
    context.commit(SET_COMMENTS, comments.data);
    // context.dispatch(GET_TICKET_COMMENTS, id);
  },

  async [GET_TICKET_COMMENTS] (context, ticketId) {
    const { data } = await CommentService.getTicketComments(ticketId);
    context.commit(SET_COMMENTS, data);
  },

  async [SAVE_TICKET](context, form) {

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('content', form.content);
    formData.append('tags', form.tags);
    if (form.photo) {
      formData.append('photo', form.photo);
    }

    try {
      await TicketsService.saveTicket(formData);
      context.commit(SET_TICKET, form);
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
    console.log('after', state.data.comments);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
