import { LOGIN, LOGOUT } from '../actions.type';
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from '../mutations.type';
import JwtService from '../../common/jwt.service';
import { AuthService } from '../../common/api.service';


const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
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
    const user = await AuthService.login();
    if (user) {
      context.commit(SET_AUTH, user);
    } else {
      context.commit(SET_ERROR);
    }
  },

  async [LOGOUT](context) {
    const res = await AuthService.logout();

    if (res.status === 200) {
      context.commit(PURGE_AUTH);
    } else {
      context.commit(SET_ERROR);
    }
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
