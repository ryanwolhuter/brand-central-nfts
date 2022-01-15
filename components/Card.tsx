import styled from 'styled-components'
import { Ticker } from './Tickers'
import Link from 'next/link'

interface Props {
  ticker: Ticker
}

export default function Card({ ticker }: Props) {
  return (
    <Wrapper>
      <PlaceholderOuter>
        <PlaceholderInner>
          <ImageTitle>{ticker.id}</ImageTitle>
          <ClaimedOrUnclaimed nftClaimed={ticker.nftClaimed} />
        </PlaceholderInner>
      </PlaceholderOuter>
      <Title>{ticker.id}</Title>
      <BidDetails>
        <p>{Number(ticker.shbBid) / 10 ** 18} SHB</p>
        <p>
          {ticker.numberOfBidsReceived}{' '}
          {ticker.numberOfBidsReceived === '1' ? 'bid' : 'bids'}
        </p>
      </BidDetails>

      <Link href={`https://etherscan.io/address/${ticker.bidder}`} passHref>
        <BuyerAddress>{ticker.bidder}</BuyerAddress>
      </Link>
    </Wrapper>
  )
}

function ClaimedOrUnclaimed({ nftClaimed }: { nftClaimed: boolean }) {
  return nftClaimed ? (
    <Claimed>claimed</Claimed>
  ) : (
    <Unclaimed>unclaimed</Unclaimed>
  )
}

const Claimed = styled.p`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px;
  border-radius: 8px;
  background: rgba(3, 168, 204, 0.2);
`

const Unclaimed = styled(Claimed)`
  background: rgba(204, 77, 3, 0.2);
`

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  width: 341px;
  margin-top: 120px;
  background: linear-gradient(
    92.09deg,
    rgba(77, 23, 230, 0.2) 0%,
    rgba(3, 168, 204, 0.2) 118.36%
  );
  box-shadow: 0px 18px 34px rgba(6, 3, 26, 0.24);
  border-radius: 15px;
`

const Title = styled.h1`
  margin-top: 16px;
`

const BidDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Readex Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  padding-right: 4px;
  margin-top: 16px;
  color: #a7f8f8;
`

const BuyerAddress = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 15px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: hsl(0, 0%, 80%);
  }
`

const PlaceholderOuter = styled.div`
  width: 277px;
  height: 277px;
  margin-inline: auto;
  margin-top: -100px;
  background: linear-gradient(
    135.24deg,
    rgba(83, 100, 255, 0.17) -2.88%,
    rgba(157, 118, 250, 0.38) 60.96%
  );
  box-shadow: 0px 40px 20px -30px rgba(6, 3, 26, 0.24);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PlaceholderInner = styled.div`
  width: 245px;
  height: 245px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(
    135.24deg,
    rgba(83, 100, 255, 0.17) -2.88%,
    rgba(157, 118, 250, 0.54) 60.96%
  );
  backdrop-filter: blur(4px);
  border-radius: 10px;
`

const ImageTitle = styled.h1`
  font-weight: 500;
  font-size: 64px;
  line-height: 96px;
  text-align: center;
  text-transform: uppercase;
  color: #f4dcfa;
`
