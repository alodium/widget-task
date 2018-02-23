import * as React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import '../setupTests';

describe('App', () => {
    const app = shallow(<App />);

    it('renders App', () => {
        expect(app).toMatchSnapshot();
    });

    it('displays the headline text correcly', () => {
        expect(app.find('h3').text()).toEqual('42');
    });
});