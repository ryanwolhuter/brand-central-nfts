import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo-client'
import { Provider as WagmiProvider, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { createGlobalStyle } from 'styled-components'

function connectors() {
  return [new InjectedConnector({ chains: defaultChains })]
}

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: border-box;
    }

 html, body {
   margin: 0;
   padding: 0;
 }

 body {
   background-color: #2B2B2B;
   color: #fff;
   font-family: 'Readex Pro', sans-serif;
 }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider autoConnect connectors={connectors}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ApolloProvider>
    </WagmiProvider>
  )
}

export default MyApp
