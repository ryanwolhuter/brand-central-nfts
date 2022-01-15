import { useQuery, gql } from '@apollo/client'
import styled from 'styled-components'
import Card from './Card'

export type Ticker = {
  id: string
  shbBid: string
  bidder: string
  biddingEnd: string
  numberOfBidsReceived: string
  nftClaimed: boolean
  tokenURI: string
  imageURI: string
  name: string
  description: string
  uriLastUpdated: string
}

const query = gql`
  {
    tickers {
      id
      shbBid
      bidder
      biddingEnd
      numberOfBidsReceived
      nftClaimed
      tokenURI
      imageURI
      name
      description
      uriLastUpdated
    }
  }
`

export default function Tickers() {
  const { data, loading, error } = useQuery(query)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const tickers: Ticker[] = data.tickers

  return (
    <Wrapper>
      {tickers.map((ticker) => (
        <Card ticker={ticker} key={ticker.id} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(341px, 1fr));
  gap: 16px;
`
