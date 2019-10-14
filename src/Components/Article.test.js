import React from 'react';
import Article from './Article';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  title: 'title-test',
  author: 'author-test',
  text: 'text-test'
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

describe('Article.test.js', () => {

  describe('Renders all elements without error', () => {
    let wrapper = null;
    beforeEach(() => {
      wrapper = shallow(<Article {...props} />);
    });

    test('renders article-wrapper', () => {
      const articleWrapper = findDataTest(wrapper, "article-wrapper");

      expect(articleWrapper.length).toBe(1);
    });

    test('renders title-component', () => {
      const titleComponent = findDataTest(wrapper, "title-component");

      expect(titleComponent.length).toBe(1);
    });

    test('renders author-component', () => {
      const authorComponent = findDataTest(wrapper, "author-component");

      expect(authorComponent.length).toBe(1);
    });

    test('renders paragraph-component', () => {
      const paragraphComponent = findDataTest(wrapper, "paragraph-component");

      expect(paragraphComponent.length).toBe(1);
    });
  });

  describe('Check if props displaying well in components', () => {
    let wrapper = null;
    beforeEach(() => {
      wrapper = shallow(<Article {...props} />);
    });

    test('Check title props displaying at title-component', () => {
      const titleComponent = findDataTest(wrapper, "title-component");

      expect(titleComponent.text()).toEqual(props.title);
    });

    test('Check author props displaying at author-component', () => {
      const authorComponent = findDataTest(wrapper, "author-component");

      expect(authorComponent.text()).toEqual(props.author);
    });

    test('Check text props displaying at paragraph-component', () => {
      const paragraphComponent = findDataTest(wrapper, 'paragraph-component');

      expect(paragraphComponent.text()).toEqual(props.text);
    });

  })

})