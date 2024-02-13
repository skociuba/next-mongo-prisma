import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const PostsApi = createApi({
  reducerPath: 'PostsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: '/api/mongocrud',
        method: 'GET',
      }),
    }),
    addPost: builder.mutation({
      query: (obj) => ({
        url: '/api/mongocrud',
        method: 'POST',
        body: obj,
      }),
    }),
    deletePost: builder.mutation({
      query: (_id) => ({
        url: '/api/mongocrud',
        method: 'DELETE',
        body: {_id},
      }),
    }),

    updatePost: builder.mutation({
      query: (updatedPost) => ({
        url: '/api/mongocrud',
        method: 'PUT',
        body: updatedPost,
      }),
    }),
  }),
});

export const {
  useAddPostMutation,
  useGetPostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
} = PostsApi;
