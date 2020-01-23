import { TicketsService } from '../../common/api.service';
import { SAVE_TICKET } from '../actions.type';
import { SET_TICKET } from '../mutations.type';

const state = {
  id: '',
  title: '',
  content: '',
  tags: [],
  file: {},
  comments: [],
  creatorId: '',
};

const getters = {
};

const actions = {
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
    state.ticket = newTicket;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
