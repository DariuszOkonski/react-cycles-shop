import React from 'react';
import StartPage from './StartPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('StartPage.test.js', () => {

  test('renders start-wrapper', () => {
    const wrapper = shallow(<StartPage />);
    const startWrapper = wrapper.find('[data-test="start-wrapper"]');

    expect(startWrapper.length).toBe(1);
  })

  test('renders article-component', () => {
    const wrapper = shallow(<StartPage />);
    const articleComponent = wrapper.find('[data-test="article-component"]');

    expect(articleComponent.exists()).toBe(true);
  });

});