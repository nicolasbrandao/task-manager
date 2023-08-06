import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  tasksReducer,
  updateTasksList,
  updateEditingTask,
  toggleEditDialog
} from './slices/tasksSlice'
import { tasksApi } from './apis/tasksApi'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(tasksApi.middleware)
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export { updateTasksList, updateEditingTask, toggleEditDialog }

export {
  useFetchAllTasksQuery,
  useDeleteTaskMutation
} from './apis/tasksApi'