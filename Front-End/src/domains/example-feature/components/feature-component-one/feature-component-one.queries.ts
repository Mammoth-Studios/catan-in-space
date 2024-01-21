import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userQuerySlice = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    // this will point to our DB, but for now we'll use a fake one
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = userQuerySlice;
