import React from 'react';
import Minutes from './Minutes';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Berlin Clock', function(){

    let wrapper;
    let minutes;

    describe('Single minutes row', function(){

        it('at 00:00:00 should have all the lamps to be OOOO', () => {
            let time = '00:00:00';
            let [h, m, s] = time.split("");
            wrapper = shallow(<Minutes minutes={m}/>);
            minutes = wrapper.instance();            
            
            expect(minutes.bottomMinutes()).toBe('OOOO');
        });

    });
});