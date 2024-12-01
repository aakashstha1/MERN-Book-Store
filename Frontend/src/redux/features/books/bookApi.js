import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";

// Define the base query
const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/books`,
  credentials: "include", // Include credentials for secure requests
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token"); // Fetch token from localStorage

    if (token) {
      Headers.set("Authorization", `Bearer ${token}`); // Set the Authorization header
    }
    return Headers;
  },
});

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery, // Attach the base query
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => "/", // Endpoint path for fetching all books
      providesTags: ["Books"],
    }),
    fetchBookById: builder.query({
      query: (id) => `/${id}`, // Endpoint path for fetching single book
      providesTags: (results, error, id) => [{ type: "Books", id }],
    }),
    addBook: builder.mutation({
      //'mutation' for post method and 'query' for grt
      query: (newBook) => ({
        url: `/create-boook`,
        method: "POST",
        body: newBook,
      }), // Endpoint path for fetching all books
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: (id, ...rest) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: rest,
        headers: {
          "Content-Type": "application/json",
        },
      }), // Endpoint path for fetching all books
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }), // Endpoint path for fetching all books
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useFetchAllBooksQuery,
  useFetchBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
export default booksApi;
