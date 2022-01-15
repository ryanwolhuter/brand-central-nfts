import type { NextPage } from 'next'
import Head from 'next/head'
import ClientOnly from '../components/ClientOnly'
import ConnectWallet from '../components/ConnectWallet'
import Tickers from '../components/Tickers'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Brand Central NFTs</title>
        <meta
          name="description"
          content="NFTs from the Brand Central Auction"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ClientOnly>
          <ConnectWallet />
          <Tickers />
        </ClientOnly>
      </Main>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 180px;
`

const Main = styled.main`
  margin-inline: auto;
  padding-inline: 32px;
`
