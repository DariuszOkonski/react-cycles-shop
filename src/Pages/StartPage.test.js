import React from 'react';
import StartPage from './StartPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/**
 * @function setup function return ShallowWrapper
 * @returns shallow Header component
 */
const setup = () => {
  return shallow(<StartPage />);
}

/**
 * @function findDataTest to find component from Header
 * @param {shallowWrapper} wrapper 
 * @param {string} comp
 * @returns {commponent} 
 */
const findDataTest = (wrapper, comp) => {
  return wrapper.find(`[data-test="${comp}"]`);
}

describe('StartPage.test.js', () => {

  test('renders start-wrapper', () => {
    const wrapper = setup();
    const startWrapper = findDataTest(wrapper, "start-wrapper");

    expect(startWrapper.length).toBe(1);
  })

  test('renders article-component', () => {
    const wrapper = setup();
    const articleComponent = findDataTest(wrapper, "article-component");

    expect(articleComponent.exists()).toBe(true);
  });

});