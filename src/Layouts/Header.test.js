import React from 'react';
import Header from './Header';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/**
 * @function setup function return ShallowWrapper
 * @returns shallow Header component
 */
const setup = () => {
  return shallow(<Header />);
}

const findDataTest = (wrapper, comp) => {
  return wrapper.find(`[data-test="${comp}"]`);
}

describe('Header.test.js', () => {

  test('renders header-component', () => {
    const wrapper = setup();
    const headerComponent = findDataTest(wrapper, "header-component");

    expect(headerComponent.length).toBe(1);
  });

  test('renders switch-component', () => {
    const wrapper = setup();
    const switchComponent = findDataTest(wrapper, "switch-component");

    expect(switchComponent.length).toBe(1);
  });

  test('renders start-path', () => {
    const wrapper = setup();
    const startPath = findDataTest(wrapper, "start-path");

    expect(startPath.length).toBe(1);
  });

  test('renders bikes-path', () => {
    const wrapper = setup();
    const bikesPath = findDataTest(wrapper, "bikes-path");

    expect(bikesPath.length).toBe(1);
  });

  test('renders contact-path', () => {
    const wrapper = setup();
    const contactPath = findDataTest(wrapper, "contact-path");

    expect(contactPath.length).toBe(1);
  });

  test('renders admin-path', () => {
    const wrapper = setup();
    const adminPath = findDataTest(wrapper, "admin-path");

    expect(adminPath.length).toBe(1);
  });

  test('renders error-path', () => {
    const wrapper = setup();
    const errorPath = findDataTest(wrapper, "error-path");

    expect(errorPath.length).toBe(1);
  });
});