import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, usersURL, todosURL, commentsURL } from '../services'

export const JsonPlaceholderApi = createApi({
  reducerPath: 'JsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // ---------- READ ----------
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

    // ---------- DELETE ----------
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${usersURL}/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(
            JsonPlaceholderApi.util.updateQueryData('getUsers', undefined, (draft) =>
              draft.filter((user) => user.id !== id)
            )
          )
        } catch {}
      },
    }),

    // ---------- CREATE ----------
    addUser: builder.mutation({
      query: (newUser) => ({
        url: usersURL,
        method: 'POST',
        body: newUser,
      }),
      async onQueryStarted(newUser, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(
            JsonPlaceholderApi.util.updateQueryData('getUsers', undefined, (draft) => {
              const nextId = Math.max(0, ...draft.map((u) => u.id)) + 1
              draft.push({ ...newUser, id: nextId })
            })
          )
        } catch {}
      },
    }),

    // ---------- UPDATE ----------
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `${usersURL}/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        // pehle cache badlo (UI foran change), phir server ka jawab dekho
        const patchResult = dispatch(
          JsonPlaceholderApi.util.updateQueryData('getUsers', undefined, (draft) => {
            const user = draft.find((u) => u.id === id)
            if (user) {
              Object.assign(user, patch, {
                address: { ...user.address, ...patch.address },
                company: { ...user.company, ...patch.company },
              })
            }
          })
        )
        try {
          await queryFulfilled
        } catch {
          // id <= 10 asli server users hain, fail ho to change wapas lo.
          // id > 10 humne khud banaye hain, server unko jaanta hi nahi (fake API ki limit)
          if (id <= 10) patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUsersByIdQuery,
  useGetTodosByUserIdQuery,
  useGetCommentsByPostIdQuery,
  useDeleteUserMutation,
  useAddUserMutation,
  useUpdateUserMutation,
} = JsonPlaceholderApi