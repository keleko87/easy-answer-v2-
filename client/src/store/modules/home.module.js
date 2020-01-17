import { TicketsService } from '../../common/api.service';
import { FETCH_TICKETS } from '../actions.type';
import { FETCH_START, FETCH_END } from '../mutations.type';

const state = {
  isLoading: true
};

const getters = {
};

const actions = {
  // [FETCH_TICKETS]({ commit }) {
  //   commit(FETCH_START);
  //   return TicketsService.get('')
  //     .then(({ data }) => {
  //       console.log(data);
  //       commit(FETCH_END, data);
  //     })
  //     .catch(error => {
  //       throw new Error(error);
  //     });
  // }
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state) {
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
