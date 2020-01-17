import JwtService from '../../common/jwt.service';


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
  
};

const mutations = {

};

export default {
  state,
  getters
};
