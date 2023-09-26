import 'uno.css'
import '../styles/global.scss'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '@bitpin/common-layout'

import { Theme } from '@radix-ui/themes'

import { AnchorTagTarget, INavbar } from '@bitpin/shared-models'
import { DevSupport } from '@react-buddy/ide-toolbox-next'
import { ComponentPreviews, useInitial } from '@bitpin/dev'
import { Hydrate, QueryClient, QueryClientProvider, DehydratedState } from '@tanstack/react-query'
import { useState } from 'react'

interface PageProps extends AppProps {
  navbarItems: INavbar[];
  dehydratedState: DehydratedState;
}

function CustomApp({ Component, pageProps, navbarItems }: PageProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <Head>
        <title>Bitpin Assessment</title>
      </Head>
      <Theme appearance='dark'>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <main className='app'>
              <Navbar navbarItems={navbarItems} />
              <div className='container'>
                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                  <Component {...pageProps} />
                </DevSupport>
              </div>
            </main>
          </Hydrate>
        </QueryClientProvider>
      </Theme>
    </>
  )
}

CustomApp.getInitialProps = () => {
  //Todo: Fetch data from server
  const navbarItems: INavbar[] = [
    {
      id: 1,
      title: 'خانه',
      href: '/',
      target: AnchorTagTarget.SELF
    }
  ]

  return {
    navbarItems
  }
}

export default CustomApp
