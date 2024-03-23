// Import necessary dependencies
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a function to get the auth token
const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

// Define the API endpoint and access token
const access = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWYxYjE4NDk4MGNlZWUwOWI4Mjc2ZDAiLCJpYXQiOjE3MTExNjcxMTUsImV4cCI6MTcxMTMzOTkxNX0.UyNUSaIcab7VXHNhZm1t2bLrHPG1iBceLlufiOMj4ko`;

// Create the category API
export const categoryAPI = createApi({
  reducerPath: "categoryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    prepareHeaders: (headers) => {
      const token = getAuthToken();
      if (token) {
        headers.set("Authorization", `Bearer ${access}`);
      }
      return headers;
    },
  }),

  // Define the endpoints
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `categories`,
    }),
    getCategoryByID: builder.query({
      query: (categoryID) => `/categories/${categoryID}`,
    }),

    // Update category mutation
    updateCategory: builder.mutation({
      query: (updateCategory) => ({
        url: `/categories/${updateCategory.id}`,
        method: "PUT",
        body: updateCategory,
      }),
    }),

    // Create category mutation
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: "/categories",
        method: "POST",
        body: newCategory,
      }),
    }),
  }),
});

// Export the hooks for the API endpoints
export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIDQuery,
  useUpdateCategoryMutation,
  useCreateCategoryMutation,
} = categoryAPI;
