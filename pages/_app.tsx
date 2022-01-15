import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo-client'
import { Provider as WagmiProvider, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function connectors() {
  return [
    new InjectedConnector({ chains: defaultChains })
  ]
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider autoConnect connectors={connectors}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </WagmiProvider>
  )
}

export default MyApp
