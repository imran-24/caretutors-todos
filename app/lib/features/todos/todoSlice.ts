import { createSlice } from "@reduxjs/toolkit";
import { generateUniqueId, getAllTasks } from "../../utils";

interface TodoState {
  todos: {
    id: string;
    title: string;
    description: string;
  }[];

}

const initialState: TodoState = {
  todos: getAllTasks().reverse() || [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const task = action.payload;

      state.todos.unshift(task);
      localStorage.setItem("tasks", JSON.stringify(state.todos));
    },
    edit: (state, action) => {
      if (action?.payload?.id) {
        state.todos = state.todos?.map((item: any) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
        
        localStorage.setItem("tasks", JSON.stringify(state.todos));
      }
    },
    remove: (state, action) => {
      if (action?.payload?.id) {
        state.todos = state.todos?.filter((item: any) => item.id !== action.payload.id);
        return localStorage.setItem("tasks", JSON.stringify(state.todos));
      }
    },
  },
});

export const {add, edit, remove} = todoSlice.actions
export default todoSlice.reducer;
