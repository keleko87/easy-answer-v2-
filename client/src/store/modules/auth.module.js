import { LOGIN, LOGOUT, GET_USER_PROFILE } from '../actions.type';
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from '../mutations.type';
import JwtService from '../../common/jwt.service';
import ApiService from '../../common/api.service';


const state = {
  auth: {
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getToken()
  }
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  async [LOGIN](context) {
    const user = await ApiService.login();

    if (user) {
      context.commit(SET_AUTH, user);
    } else {
      context.commit(SET_ERROR);
    }
  },

  async [LOGOUT](context) {
    const user = await ApiService.logout();
    context.commit(SET_AUTH, user);
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    // JwtService.saveToken(state.user.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    // JwtService.destroyToken();
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
