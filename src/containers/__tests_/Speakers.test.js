import React from 'react'; 
import Speakers from '../Speakers';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Speakers/>);
});
