import { createSlice, configureStore } from "@reduxjs/toolkit";
const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
const done = null;
// const tasks = [
//   {
//     id: 1,
//     title: "task 1",
//     desc: "description 1",
//     isDone: true,
//   },
//   {
//     id: 2,
//     title: "task 2",
//     desc: "description 2",
//     isDone: false,
//   },
// ];

const doneSlice = createSlice({
  name: "done",
  initialState: done,
  reducers: {
    setDone: (state, action) => {
      return (state = action.payload);
    },
  },
});
const todoSlice = createSlice({
  name: "todos",
  initialState: tasks,
  reducers: {
    addTodo: (state, action) => {
      localStorage.setItem("tasks", JSON.stringify([...state, action.payload]));
      return (state = [...state, action.payload]);
    },
    updateTodo: (state, action) => {
      state = state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    },
    deleteTodo: (state, action) => {
      state = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));

      return state;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export const { setDone } = doneSlice.actions;
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    done: doneSlice.reducer,
  },
});
