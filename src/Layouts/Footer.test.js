import React from 'react';
import Footer from './Footer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer.test.js', () => {
  test('render footer-component', () => {
    const wrapper = shallow(<Footer />);
    const footerComponent = wrapper.find('[data-test="footer-component"]');

    expect(footerComponent.length).toBe(1);
  });
})