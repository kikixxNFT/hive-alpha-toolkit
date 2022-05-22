import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { ApolloProvider } from '@apollo/client'
import { ApiClient } from '../graphql/client'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Hive Alpha Champions League Table</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          fontFamily: 'Poppins, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
        }}
      >
        <ApolloProvider client={ApiClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </MantineProvider>
    </>
  )
}
