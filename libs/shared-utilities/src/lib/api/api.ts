import { ofetch } from 'ofetch'

export const apiV1Fetch = ofetch.create({
  baseURL: `https://api.bitpin.org/v1/`,
})
