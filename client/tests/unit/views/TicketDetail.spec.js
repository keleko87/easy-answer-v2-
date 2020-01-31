import { shallowMount } from '@vue/test-utils'
import TicketDetail from '@/views/TicketDetail.vue';

describe('TicketDetail', () => {
  xit('renders props.msg when passed', () => {
    const msg = 'new messWSage'
    const wrapper = shallowMount(TicketDetail, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
