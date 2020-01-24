import { TicketsService } from '../../common/api.service';
import { SAVE_TICKET, GET_TICKET, CHECK_TICKET_CREATOR } from '../actions.type';
import { SET_TICKET } from '../mutations.type';

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
  comments(state) {
    return state.data.comments;
  },
  isTicketCreator(state) {
    return state;
  }
};

const actions = {
  async [GET_TICKET](context, id) {
    const { data } = await TicketsService.getTicket(id);
    context.commit(SET_TICKET, data);
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
  },

  async [CHECK_TICKET_CREATOR] (context, user) {

  }
};

const mutations = {
  [SET_TICKET](state, newTicket) {
    state.data = newTicket;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
