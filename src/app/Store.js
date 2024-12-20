import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/todo/todoSlice";

export let store = configureStore({
  reducer: {
    todo: todoReducer, // Reducer nu 'todo' naam de under configure kita hai
  },
});
