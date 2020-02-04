import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import Ticket from '../../../src/views/Ticket.vue';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuelidate);

describe('Ticket', () => {
  const options = {
    data() {
      return {
        form: {
          title: '',
          content: '',
          tags: [''],
          photo: ""
        }
      }
    }
  };

  let vm;
  let wrapper;
  let input;
  let spy;
  let actions;
  let store;

  let state = {
    ticket: {
      data:{
        id: '1',
        title: 'my title',
        content: 'content 222'
      },
      comments: [
        {
          _id: '1',
          content: 'My comment',
          creatorId: { _id: '1233 ' }
        }
      ]
    }
  };

  beforeEach(() => {
    store = new Vuex.Store({
      state
    });

    wrapper = mount(Ticket);
  });

  afterEach(() => {
    // wrapper.destroy();
  });

  xit('is created', () => {     
    const defaultData = Ticket.data();
    expect(wrapper.isVueInstance).toBeTruthy();
    expect(defaultData.form).toBeDefined();
    expect(defaultData.form.title).toBeDefined();
  });

  
  xit('is example', () => {    
    const clickMethodStub = jest.fn();
    wrapper = mount(Ticket);
    wrapper.setData({ form: { title: '1212' } });
    wrapper.setMethods({ onSubmit: clickMethodStub })

    expect(wrapper.vm.form). toBeDefined();
    
    // const clickMethodStub = jest.fn();
    // input = wrapper.find('button');
    // input.trigger('click');
    // // spy = jest.spyOn(wrapper.vm, 'onSelect')
    // jest.useFakeTimers()
 
    // expect(clickMethodStub.called).toBe(true);
  });
  
  xit('should change photo reference when on select method is triggered', () => {     
    // vm.onSelect = jest.fn();
    console.log(vm.$options.methods, 'T-----', vm.$options.methods.onSelect);

    const onSelect = vm.$options.methods.onSelect();

    expect(onSelect).toHaveBeenCalled();

    // spy.mockRestore();
  });

  xit('should save ticket when click submit button', () => {     
    const onSubmitSpy = jest.spyOn(Ticket, 'onSubmit');
    const onSubmit = wrapper.onSubmit();
    const btn = wrapper.find('.btn').trigger('click');

    expect(onSubmitSpy).toHaveBeenCalled();
    expect(onSubmit).toBe(true);

    spy.mockRestore();
  });

});
