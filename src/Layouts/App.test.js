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

describe('App.test.js', () => {

  test('renders browserRouter-component', () => {
    const wrapper = setup();
    const browserRouterComponent = wrapper.find('[data-test="browserRouter-component"]');

    expect(browserRouterComponent.length).toBe(1);
  });

  test('renders app-wrapper', () => {
    const wrapper = setup();
    const appWrapper = wrapper.find('[data-test="app-wrapper"]');

    expect(appWrapper.length).toBe(1);
  });

  test('renders header-component', () => {
    const wrapper = setup();
    const headerWrapper = wrapper.find('[data-test="header-component"]');

    expect(headerWrapper.length).toBe(1);
  });

  test('renders main-component', () => {
    const wrapper = setup();
    const mainComponent = wrapper.find('[data-test="main-component"]');

    expect(mainComponent.length).toBe(1);
  });

  test('renders footer-component', () => {
    const wrapper = setup();
    const footerComponent = wrapper.find('[data-test="footer-component"]');

    expect(footerComponent.length).toBe(1);
  });

})