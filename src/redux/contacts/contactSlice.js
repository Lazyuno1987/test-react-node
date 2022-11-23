
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const contactApi = createApi({
  reducerPath: 'contactApi',
     baseQuery: fetchBaseQuery({ baseUrl: `https://dull-pear-giraffe-wear.cyclic.app/api/feedback` }),
 //baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/api/feedback` }),
  //baseQuery: fetchBaseQuery({ baseUrl: `https://db-for-feedback.herokuapp.com/api/feedback` }),
  endpoints: (builder) => ({
   
      addContact: builder.mutation({
      query: values => ({
        url: '/',
        method: 'POST',
        body: values,
      }),
      }),
   
  }),
})


export const { useAddContactMutation } = contactApi;

