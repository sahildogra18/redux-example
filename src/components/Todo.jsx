import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/todo/todoSlice";

const Todo = () => {
  let todos = useSelector((state) => state.todo.todos); // Updated state access
  let dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
          >
            X
          </button>
        </li>
      ))}
    </>
  );
};

export default Todo;
