import { useQuery, useQueryClient } from '@tanstack/react-query'
import { ApiResponse, Markets, PriceInfo } from '@bitpin/shared-models'
import { fetchMarkets } from '@bitpin/shared-utilities';
import { useEffect } from 'react'

export const useMarkets = () =>
  useQuery<ApiResponse<Markets>, unknown, Markets[], string[]>({
    queryKey: ['fetchMarkets'],
    queryFn: fetchMarkets,
    select: (data) => data.results,
    retry: 3,
    staleTime: 1000 * 60 * 10,
    retryDelay: 1000 * 60,
  });

export const useUpdateMarkets = () => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const ws = new WebSocket('wss://ws.bitpin.org');

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          method: 'sub_to_price_info',
        }),
      );
    };

    ws.onmessage = (event) => {
      const data: Record<string, PriceInfo> | { message: string } = JSON.parse(event.data);
      if ('message' in data) return

      queryClient.setQueryData<ApiResponse<Markets>>(['fetchMarkets'], (oldData) => {
        if (!oldData) return oldData
        const newData = { ...oldData }
        newData.results = newData.results.map((market) => {
          if (market.id in data) {
            console.log('updating price', market.title, data[market.id].price)
            market.price = data[market.id].price as string
          }
          return market
        })
        return newData
      })
    }

    return () => {
      ws.close()
    }
  }, [queryClient])
};
