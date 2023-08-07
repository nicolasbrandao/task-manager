import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Task } from '../../lib/utils'

const URL = import.meta.env.VITE_TASKS_BASE_URL

const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  tagTypes: ['Task'],
  endpoints(builder) {
    return {
      searchTasks: builder.query({
        query: (searchTerm?: string) => {
          if(!searchTerm) return "/"
          return `/search/${searchTerm}`
        },
        providesTags: ['Task']
      }),
      deleteTask: builder.mutation ({
        query: (taskId: string) => {
          return {
            url: `/${taskId}`,
            method: 'DELETE',
          }
        },
        invalidatesTags: ['Task']
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
        },
        invalidatesTags: ['Task']
      }),
      updateTask: builder.mutation ({
        query: (task: Task) => {
          return {
            url: `/${task.id}`,
            method: 'PUT',
            body: {
              title: task.title,
              description: task.description
            }
          }
        },
        invalidatesTags: ['Task']
      }),
    }
  },
})

export const {
  useDeleteTaskMutation,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useSearchTasksQuery
} = tasksApi
export { tasksApi }