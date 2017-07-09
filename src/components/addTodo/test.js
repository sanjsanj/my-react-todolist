/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();
  const undeleteMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo
        submitTodo={submitMock}
        undeleteTodo={undeleteMock}
      />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  describe('Add todo button', () => {
    it('Should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('Should call the submitTodo function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} undeleteTodo={undeleteMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });

  describe('Undelete button', () => {
    it('Should exist', () => {
      expect(component.find('.todo-undelete').length).toEqual(1);
    });

    it('Should call the undeleteTodo function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} undeleteTodo={undeleteMock} />);

      expect(undeleteMock.mock.calls.length).toEqual(0);
      component.find('.todo-undelete').simulate('click');
      expect(undeleteMock.mock.calls.length).toEqual(1);
    });
  });
});
