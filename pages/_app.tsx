import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo-client'
import { Provider as WagmiProvider, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { createGlobalStyle } from 'styled-components'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider autoConnect connectors={connectors}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ApolloProvider>
    </WagmiProvider>
  )
}

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
    color: #fff;
    font-family: 'Readex Pro', sans-serif;
    background-color: #030024;
    background-image: url('colors.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
 }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`
