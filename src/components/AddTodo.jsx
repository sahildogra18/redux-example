import { useDispatch } from "react-redux";
import { addTodo } from "../Features/todo/todoSlice";
import { useState } from "react";

function AddTodo() {
  let [input, setinput] = useState("");
  let dispatch = useDispatch();

  function addTodoHandler(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setinput("");
  }

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="enter a todo"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
