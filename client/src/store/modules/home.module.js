import { TicketsService } from '../../common/api.service';
import { GET_TICKETS } from '../actions.type';
import { FETCH_START, FETCH_END, SET_TICKETS, SET_TICKETS_COUNT } from '../mutations.type';

const state = {
  tags: [],
  tickets: [],
  isLoading: true,
  ticketsCount: 0
};

const getters = {
  ticketsCount(state) {
    return state.ticketsCount;
  },

  tickets(state) {
    return state.tickets;
  },

  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  async [GET_TICKETS](context) {
    context.commit(FETCH_START);
    const { data } = await TicketsService.getTickets();
    context.commit(FETCH_END);
    context.commit(SET_TICKETS, data);
    context.commit(SET_TICKETS_COUNT, data.length);
  }
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state) {
    state.isLoading = false;
  },
  [SET_TICKETS](state, tickets) {
    state.tickets = tickets;
  },
  [SET_TICKETS_COUNT](state, tickets) {
    state.ticketsCount = tickets.length;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
