import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home', () => {
  let wrapper;
  let getters;
  let store;
  let state = {
    home: {
      tickets: [
        { id: '1', title: 'my title', content: 'content 222' }, 
        { id: '2', title: 'title 2', content: 'content 222' }
      ]
    }
  };;

  beforeEach(() => {
    getters = {
      currentUser: () => { return { id: 'user', username: 'user name'} },
      isAuthenticated: () => true,
      tickets: () => [
        { id: '1', title: 'my title', content: 'content 222' }, 
        { id: '2', title: 'title 2', content: 'content 222' }
      ]
    };

    store = new Vuex.Store({
      getters,
      state: state
    });

    wrapper = shallowMount(Home, { 
      store, 
      localVue 
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is created', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('set data correctly when is created', () => {
    expect(typeof Home.data).toBe('function');
    const defaultData = Home.data();
    expect(defaultData.env).toBe(process.env);
  })
});
