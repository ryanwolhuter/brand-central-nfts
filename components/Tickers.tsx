import { useQuery, gql } from '@apollo/client'

const query = gql`
  {
      tickers {
      id
      name
      description
      imageURI
    }
  }
`

export default function Tickers() {
  const { data, loading, error } = useQuery(query)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const tickers = data.tickers

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
