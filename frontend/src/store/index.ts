import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tasksApi } from "./apis/tasksApi";

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(tasksApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>

export {
  useDeleteTaskMutation,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useSearchTasksQuery
} from "./apis/tasksApi";
