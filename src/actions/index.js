import types from '../constants/';

let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId;
};

const actions = {
  submitTodo(text) {
    return {
      type: types.SUBMIT_TODO,
      id: nextId(),
      text,
    };
  },

  deleteTodo(id) {
    return {
      type: types.DELETE_TODO,
      id,
    };
  },

  undeleteTodo() {
    return {
      type: types.UNDELETE_TODO,
    };
  },

  inputChanged(inputText) {
    return {
      type: types.INPUT_CHANGED,
      inputText,
    };
  },
};

export default actions;
