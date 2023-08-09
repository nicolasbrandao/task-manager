import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../lib/utils";

export type TasksState =  {
  editingTask: Task,
  isEditingDialogOpen: boolean,
}

const initialState: TasksState = {
  editingTask: {
    id: "",
    title: "",
    description: ""
  },
  isEditingDialogOpen: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateEditingTask: (state, action: PayloadAction<Task>) => {
      state.editingTask = action.payload;
    },
    toggleEditDialog: (state, action: PayloadAction<boolean>) => {
      state.isEditingDialogOpen = action.payload;
    },
  }
});

export const {
  updateEditingTask,
  toggleEditDialog,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
