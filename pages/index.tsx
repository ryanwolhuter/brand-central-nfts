import type { NextPage } from 'next'
import Head from 'next/head'
import ClientOnly from '../components/ClientOnly'
import ConnectWallet from '../components/ConnectWallet'
import Tickers from '../components/Tickers'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brand Central NFTs</title>
        <meta name="description" content="NFTs from the Brand Central Auction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ClientOnly>
          <ConnectWallet />
          <Tickers />
        </ClientOnly>
      </main>
    </div>
  )
}

export default Home
