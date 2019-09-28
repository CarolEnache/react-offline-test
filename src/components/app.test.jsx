import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './app';
import { List, ListItem, Title, Subtitle } from '../styles/styled';

jest.mock('axios');

describe('App component', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    useFetch = jest.fn();
    wrapper = mount(<App />)
    instance = wrapper.instance();
  });

  describe('#useFetch', () => {
    it('should fetch the data', () => {
      const getSpy = jest.spyOn(window, 'fetch');
      const ceva = shallow(<List/>)
      expect(getSpy).toBeCalled();
    });
  });

  describe('render', () => {
    it('renders the title, subtitle and the list', () => {
      expect(wrapper.find(Title)).toHaveLength(1)
      expect(wrapper.find(Subtitle)).toHaveLength(1)
      expect(wrapper.find(List)).toHaveLength(1)
      // expect(wrapper.find(ListItem)) //.toHaveLength(1)
    });
  });
});

