import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo, undeleteTodo }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >

        <input
          className="todo-input"
          ref={(element) => {
            input = element;
          }}
        />

        <button type="submit" className="todo-submit">
          Add Todo
        </button>

        <button
          className="todo-undelete"
          onClick={() => undeleteTodo()}
        >
          Undelete
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
};

export default AddTodo;
