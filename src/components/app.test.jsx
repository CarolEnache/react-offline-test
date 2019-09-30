import React from 'react';
import { mount, shallow } from 'enzyme';

import App from './app';
import { List, ListItem, Title, Subtitle } from '../styles/styled';
import Gauge from 'react-svg-gauge';

import * as useFetch from '../utils/useFetch';
import * as data from '../../example_api_response.json';

jest.mock('axios');

describe('App component', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    jest.spyOn(useFetch, 'default').mockImplementation(() => ({ data }));
    wrapper = mount(<App />)
    instance = wrapper.instance();
  });

  describe('#useFetch', () => {
    it('should fetch the data', () => {
      expect(useFetch.default).toBeCalled();
    });
  });

  describe('render', () => {
    it('renders the title, subtitle and the list', () => {
      expect(wrapper.find(Title)).toHaveLength(1)
      expect(wrapper.find(Subtitle)).toHaveLength(1)
      expect(wrapper.find(List)).toHaveLength(1)
    });

    it('rendres the list items and gauges', () => {
      const listItemInstance =wrapper.find(ListItem);
      expect(listItemInstance).toHaveLength(9);
      expect(listItemInstance.children().find(Gauge)).toHaveLength(9);
    });
  });
});

