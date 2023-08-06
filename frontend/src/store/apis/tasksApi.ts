import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Task } from '../../lib/utils'

const URL = import.meta.env.VITE_TASKS_BASE_URL

const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints(builder) {
    return {
      fetchAllTasks: builder.query<Task[], void>({
        query: () => {
          return {
            url: '/',
            method: 'GET',
          }
        },
      }),
      deleteTask: builder.mutation ({
        query: (taskId: string) => {
          return {
            url: `/${taskId}`,
            method: 'DELETE',
          }
        }
      }),
    }
  },
})

export const {
  useFetchAllTasksQuery,
  useDeleteTaskMutation
} = tasksApi
export { tasksApi }