import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Header tests', () => {
  

  it('Header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Hello world renders', () => {
  const wrapper = shallow(<Header/>);
  console.log(wrapper.debug());
 // expect(wrapper.find('div').text()).toBe('Header div');
  })

  it('Snapshot matches renders', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
    })

})