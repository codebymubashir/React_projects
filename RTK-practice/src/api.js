import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes:["Posts"],
    endpoints: (builder) => ({
        getPosts: builder.query({query: ()=> "/posts", providesTags: ["Posts"]}),
        newPosts: builder.mutation({
            query: (data) => ({
                url: "posts",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Posts"]
        }),
    }),
});

export const { useGetPostsQuery,useNewPostsMutation } = api;