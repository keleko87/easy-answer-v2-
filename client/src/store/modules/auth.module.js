import { LOGIN, LOGOUT } from '../actions.type';
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from '../mutations.type';
import JwtService from '../../common/jwt.service';
import { AuthService } from '../../common/api.service';


const state = {
  errors: null,
  user: {
   _id: '',
   username: '',
   email: '',
   imgAvatar: ''
  },
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    // PENDING REMOVE WHEN LOGIN FEATURE IS ADDED
    state.user = {
      _id: '5e26f691358276336845a086',
      username: 'Mario Martin',
      email: 'mariomarsan7@gmail.com',
      imgAvatar: 'https://avatars.slack-edge.com/2017-05-22/185651642560_074e8eb908d505721a15_512.jpg'
     };
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
