import React from 'react'; 
import Sessions from '../Sessions';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Sessions/>);
});
