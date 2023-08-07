import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../lib/utils'

export type TasksState =  {
  tasks: Task[]
  editingTask: Task,
  isEditingDialogOpen: boolean,
  searchingTerm: string
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    editingTask: {
      id: "",
      title: "",
      description: ""
    },
    isEditingDialogOpen: false,
    searchingTerm: "",
  } as TasksState,
  reducers: {
    updateTasksList: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload
    },
    updateEditingTask: (state, action: PayloadAction<Task>) => {
      state.editingTask = action.payload
    },
    toggleEditDialog: (state, action: PayloadAction<boolean>) => {
      state.isEditingDialogOpen = action.payload
    },
    updateSearchingTerm: (state, action: PayloadAction<string>) => {
      state.searchingTerm = action.payload
    }
  }
})

export const { updateTasksList, updateEditingTask, toggleEditDialog, updateSearchingTerm } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer

