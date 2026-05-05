import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '../models/food'

type Order = {
  id: number,
  price: number
}

type PurchasePayload = {
  products: Order[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  },
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseReponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedFood: builder.query<Restaurant[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<PurchaseReponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      })
    })
  })
})

export const { useGetFeaturedFoodQuery, useGetRestaurantByIdQuery, usePurchaseMutation } = api

export default api