import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, usersURL, todosURL, commentsURL } from '../services'

export const JsonPlaceholderApi = createApi({
  reducerPath: 'JsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => usersURL,
    }),
    getUsersById: builder.query({
      query: (id) => `${usersURL}?id=${id}`,
    }),
    getTodosByUserId: builder.query({
      query: (id) => `${todosURL}?userId=${id}`,
    }),
    getCommentsByPostId: builder.query({
      query: (id) => `${commentsURL}?postId=${id}`,
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUsersByIdQuery,
  useGetTodosByUserIdQuery,
  useGetCommentsByPostIdQuery,
} = JsonPlaceholderApi