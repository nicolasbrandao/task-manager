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
      createTask: builder.mutation ({
        query: (task: Omit<Task, "id">) => {
          return {
            url: '/',
            method: 'POST',
            body: {
              title: task.title,
              description: task.description
            }
          }
        }
      })
    }
  },
})

export const {
  useFetchAllTasksQuery,
  useDeleteTaskMutation,
  useCreateTaskMutation
} = tasksApi
export { tasksApi }