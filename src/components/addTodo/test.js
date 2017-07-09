/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  let component;
  let mountedComponent;
  const submitMock = jest.fn();
  const undeleteMock = jest.fn();
  const changeMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo
        submitTodo={submitMock}
        undeleteTodo={undeleteMock}
        inputChanged={changeMock}
        disableAddTodo
        disableUndelete
      />,
    );

    mountedComponent = mount(
      <AddTodo
        submitTodo={submitMock}
        undeleteTodo={undeleteMock}
        inputChanged={changeMock}
        disableAddTodo
        disableUndelete
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
      expect(submitMock.mock.calls.length).toEqual(0);
      mountedComponent.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });

    it('Should be disabled when there is no text in the input', () => {
      const disabled = component.find('.todo-submit').html().includes('disabled=""');

      expect(disabled).toEqual(true);
    });

    it('Should not be disabled when there is text in the input', () => {
      component = shallow(
        <AddTodo
          submitTodo={submitMock}
          undeleteTodo={undeleteMock}
          inputChanged={changeMock}
          disableAddTodo={false}
          disableUndelete
        />,
      );

      const disabled = component.find('.todo-submit').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    });
  });

  describe('Undelete button', () => {
    const undeleteComponent = shallow(
      <AddTodo
        submitTodo={submitMock}
        undeleteTodo={undeleteMock}
        inputChanged={changeMock}
        disableAddTodo
        disableUndelete={false}
      />,
    );

    it('Should exist', () => {
      expect(undeleteComponent.find('.todo-undelete').length).toEqual(1);
    });

    it('Should call the undeleteTodo function when clicked', () => {
      expect(undeleteMock.mock.calls.length).toEqual(0);
      undeleteComponent.find('.todo-undelete').simulate('click');
      expect(undeleteMock.mock.calls.length).toEqual(1);
    });

    it('Should be disabled when there is no deleted todo', () => {
      const disabled = component.find('.todo-undelete').html().includes('disabled=""');

      expect(disabled).toEqual(true);
    });

    it('Should not be disabled when there is a deleted todo', () => {
      const disabled = undeleteComponent.find('.todo-undelete').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    });
  });
});
