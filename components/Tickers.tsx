import { useQuery, gql } from '@apollo/client'
import { BigNumber } from 'ethers'

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
    <div>
      <h1>Tickers</h1>
      <ul>
        {tickers.map(ticker => (
          <li key={ticker.id}>
            <h2>{ticker.id}</h2>
            <p>{ticker.description}</p>
            <img src={ticker.imageURI} alt={ticker.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}
