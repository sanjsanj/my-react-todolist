/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '.';

describe('TodoList component', () => {
  const todos = [
  ];

  const component = shallow(<TodoList todos={todos} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should display a todo when passed in as a prop', () => {
    expect(component.find('li').getText).toEqual(todos.text);
  });
});
