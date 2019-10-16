import React from 'react';
import ContactPage from './ContactPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('contactPage.test.js', () => {

  describe('render tests', () => {
    test('renders contact-wrapper', () => {
      const wrapper = shallow(<ContactPage />)
      const contactWrapper = wrapper.find('[data-test="contact-wrapper"]');

      expect(contactWrapper.length).toBe(1);
    });

    test('renders header-component', () => {
      const wrapper = shallow(<ContactPage />);
      const headerComponent = wrapper.find('[data-test="header-component"]');

      expect(headerComponent.length).toBe(1);
    });

    test('renders form-component', () => {
      const wrapper = shallow(<ContactPage />);
      const formComponent = wrapper.find('[data-test="form-component"]');

      expect(formComponent.length).toBe(1);
    });

    test('renders textarea-component', () => {
      const wrapper = shallow(<ContactPage />);
      const textareaComponent = wrapper.find('[data-test="textarea-component"]');

      expect(textareaComponent.length).toBe(1);
    })

    test('renders button-component', () => {
      const wrapper = shallow(<ContactPage />);
      const buttonComponent = wrapper.find('[data-test="button-component"]');

      expect(buttonComponent.length).toBe(1);
    });

    test('renders prompt-component', () => {
      const wrapper = shallow(<ContactPage />);
      const promptComponent = wrapper.find('[data-test="prompt-component"]');

      expect(promptComponent.length).toBe(1);
    });

    test('renders redirect-component', () => {
      const wrapper = shallow(<ContactPage />);
      wrapper.setState({ redirect: true });

      const redirectComponent = wrapper.find('[data-test="redirect-component"]');

      expect(redirectComponent.length).toBe(1);
    })

  });

  describe('state tests', () => {
    let testNode = 'test node';

    test('submit state.text value and state.redirect value', () => {
      const wrapper = shallow(<ContactPage />)
      wrapper.setState({ text: testNode, redirect: false })

      const formComponent = wrapper.find('[data-test="form-component"]');
      formComponent.simulate('submit');

      expect(wrapper.state().text).toEqual('');
      expect(wrapper.state().redirect).toEqual(true);
    });

    //TODO - proglems with this test
    // test('change state.text value after change at textarea-component', () => {
    //   const wrapper = shallow(<ContactPage />);
    //   const textareaComponent = wrapper.find('[data-test="textarea-component"]');

    //   console.log(wrapper.state());
    //   textareaComponent.simulate('change', { target: { text: 'hello' } });
    //   console.log(wrapper.state());
    // })
  })

})