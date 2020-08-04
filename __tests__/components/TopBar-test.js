import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import {TopBar} from '../../src/components/TopBar';


describe('Top bar ', () => {

    let component;
    beforeEach(() => {

         component = shallow(<TopBar />);
    });
        test('should not show buffering', () => {

            expect(component).toBeDefined();
            expect(component.find('button')).toBeTruthy();
            expect(component.find('PlayProgressBar')).toBeTruthy();

            expect(component.find('PlayProgressBar').find('ProgressBar').exists()).toBe(false)

        });

});
