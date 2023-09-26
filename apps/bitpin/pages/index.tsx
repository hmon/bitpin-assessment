import { FC } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchMarkets } from '@bitpin/shared-utilities';
import { useMarkets, useUpdateMarkets } from '@bitpin/shared-hooks'
import { ColumnTemplate } from '@bitpin/shared-models'
import { Table } from '@bitpin/shared-components'

const tableHeaders: ColumnTemplate[] = [
  {
    title: 'ID',
    width: '10%',
    type: 'string',
    valueKey: 'id',
    sortable: true,
  },
  {
    title: 'کد',
    width: '30%',
    type: 'string',
    valueKey: 'code',
    sortable: false,
  },
  {
    title: 'نام',
    width: '30%',
    type: 'string',
    valueKey: 'title_fa',
    sortable: false,
  },
  {
    title: 'قیمت',
    width: '30%',
    type: 'string',
    valueKey: 'price',
    sortable: true,
  }
];

const Index: FC<object> = () => {
  const { data } = useMarkets();
  useUpdateMarkets();

  const last10Markets = data?.slice(0, 10);

  return <>
    <h1>Markets</h1>

    <Table columns={tableHeaders} data={last10Markets}/>
  </>;
};

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['fetchMarkets'], fetchMarkets);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Index;
