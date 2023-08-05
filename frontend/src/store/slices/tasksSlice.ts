import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../lib/utils'

export type TasksState =  {
  tasks: Task[]
  editingTask: Task,
  isEditingDialogOpen: boolean
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
    isEditingDialogOpen: false
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
    }
  }
})

export const { updateTasksList, updateEditingTask, toggleEditDialog } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer

