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
  async [SAVE_TICKET](context, newTicket) {
    const response = await TicketsService.saveTicket(newTicket);
    
    if (response) {
      context.commit(ADD_NEW_TICKET, newTicket);
      context.commit(SET_TICKETS_COUNT);
    }
  }
};

const mutations = {
  [ADD_NEW_TICKET](state, newTicket) {
    state.tickets.push(newTicket);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
