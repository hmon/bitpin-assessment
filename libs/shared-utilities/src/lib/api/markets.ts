import { apiV1Fetch } from './api'

export const fetchMarkets = () =>
  apiV1Fetch('mkt/markets/', {
    method: 'GET'
  })
