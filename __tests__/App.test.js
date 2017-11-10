import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';

test('Renders correct text', () => {
  const wrapper = shallow(
    <App />
  );
  expect(wrapper.find('div').length).toEqual(1);
});
