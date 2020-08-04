import 'react-native';
import React from 'react';

import configureMockStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import { shallow } from 'enzyme';

import {BufferingProgressBar} from '../../src/components/BufferingProgressBar';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {mockSelectors} from '../mocks/mock-store';



const setMockStoreData =(storeValues)=>{
    mockSelectors("player",storeValues);
}

describe('Buffering bar ', () => {

    let component;
    beforeEach(() => {
        setMockStoreData({ isBuffering: false });
        component = shallow(<BufferingProgressBar />);
    });
    test('should not show buffering initially ', () => {

        expect(component).toBeDefined();


        expect(component.find('ProgressBar').exists()).toBe(false)

    });
    test('should not show buffering initially and show when isbuffering is true', () => {

        expect(component).toBeDefined();


        expect(component.find('ProgressBar').exists()).toBe(false)

        setMockStoreData({ isBuffering: true });
        component.setProps();



        expect(component.find('ProgressBar').exists()).toBe(true)

    });

});
