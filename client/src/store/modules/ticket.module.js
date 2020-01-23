import { TicketsService } from '../../common/api.service';
import { SAVE_TICKET } from '../actions.type';
import { ADD_NEW_TICKET, SET_TICKETS_COUNT } from '../mutations.type';

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
      const response = await TicketsService.saveTicket(formData);
      if (response) {
        console.log('NOT WORKING');
        context.commit(ADD_NEW_TICKET, form);
        context.commit(SET_TICKETS_COUNT);
      }
    }
    catch(err) {
      console.log('error', err);
    }
  }
};

const mutations = {
  // NOT WORKING
  [ADD_NEW_TICKET](state, newTicket) {
    console.log('stateee', state);
    state.tickets.push(newTicket);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
