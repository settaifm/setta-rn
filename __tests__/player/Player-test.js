/**
 * @format
 */

import 'react-native';
import React from 'react';

import configureMockStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import { shallow } from 'enzyme';


import Player from '../../src/player/Player';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const mockSelectors = (storeValues) => {
  const mockStore = configureMockStore()({
    mobile: {
      isUserConnected: false,
      ...storeValues
    },
  });

  jest
      .spyOn(Redux, 'useSelector')
      .mockImplementation(state => state.dependencies[0](mockStore.getState()));
};


describe('isUserConnected: true', () => {
  beforeEach(() => {
    mockSelectors({ isUserConnected: true });
   const component = shallow(<Player />);

    test('should render a disconnect button', () => {
      expect(component).toBeDefined();
      expect(component.find('button')).toBeTruthy();
    });
  });
});
