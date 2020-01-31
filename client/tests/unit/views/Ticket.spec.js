import { shallowMount } from '@vue/test-utils'
import Ticket from '@/views/Ticket.vue';

describe('Ticket', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      currentUser: () => { return { id: 'user', username: 'user name'} },
      isAuthenticated: () => true,
      tickets: () => [
        { id: '1', title: 'my title', content: 'content 222' }, 
        { id: '2', title: 'title 2', content: 'content 222' }
      ]
    }

    store = new Vuex.Store({
      getters,
      store
    })
  });

  xit('renders props.msg when passed', () => {
    const msg = 'new messWSage'
    const wrapper = shallowMount(Ticket, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
