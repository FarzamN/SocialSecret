import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const getApi = createApi({
  reducerPath: 'getApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
  endpoints: builder => ({
    getData: builder.query({
      query: () => ({
        url: 'products',
        method: 'GET',
      }),
    }),
    getDataById: builder.query({
      query: id => ({
        url: `products/${id}`,
        method: 'GET',
      }),
    }),
    postData: builder.mutation({
      query: data => ({
        url: 'products',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {useGetDataQuery, useGetDataByIdQuery, usePostDataMutation} =
  getApi;
