import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/**
 * @function setup to setup shallow wrapper
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
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

describe('App.test.js', () => {

  test('renders browserRouter-component', () => {
    const wrapper = setup();
    const browserRouterComponent = findDataTest(wrapper, "browserRouter-component");

    expect(browserRouterComponent.length).toBe(1);
  });

  test('renders app-wrapper', () => {
    const wrapper = setup();
    const appWrapper = findDataTest(wrapper, "app-wrapper");

    expect(appWrapper.length).toBe(1);
  });

  test('renders header-component', () => {
    const wrapper = setup();
    const headerWrapper = findDataTest(wrapper, "header-component");

    expect(headerWrapper.length).toBe(1);
  });

  test('renders main-component', () => {
    const wrapper = setup();
    const mainComponent = findDataTest(wrapper, "main-component");

    expect(mainComponent.length).toBe(1);
  });

  test('renders footer-component', () => {
    const wrapper = setup();
    const footerComponent = findDataTest(wrapper, "main-component");

    expect(footerComponent.length).toBe(1);
  });

})