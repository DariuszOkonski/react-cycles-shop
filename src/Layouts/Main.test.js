import React from 'react';
import Main from './Main';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/**
 * @function setup function return ShallowWrapper
 * @returns shallow Header component
 */
const setup = () => {
  return shallow(<Main />);
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

describe('Main.test.js', () => {

  test('rendering main-wrapper', () => {
    const wrapper = setup();
    const mainWrapper = findDataTest(wrapper, "main-wrapper");

    expect(mainWrapper.length).toBe(1);
  });

  test('rendering navigation-component', () => {
    const wrapper = setup();
    const navigationComponent = findDataTest(wrapper, "navigation-component");

    expect(navigationComponent.length).toBe(1);
  });

  test('rendering content-component', () => {
    const wrapper = setup();
    const contentComponent = findDataTest(wrapper, "content-component");

    expect(contentComponent.length).toBe(1);
  });
})