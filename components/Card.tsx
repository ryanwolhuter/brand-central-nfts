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
  padding-inline: 16px;
  border-radius: 20px;
  background: rgba(214, 225, 228, 0.137);
  backdrop-filter: blur(8px);
  box-shadow: 0px 0px 10px rgba(90, 33, 155, 0.24);
`

const Unclaimed = styled(Claimed)`
  background: rgba(36, 224, 215, 0.363);
`

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  width: 341px;
  margin-top: 140px;
  background: linear-gradient(
    45deg,
    rgba(92, 67, 185, 0.144) 0%,
    rgba(3, 168, 204, 0.2) 118.36%
  );
  box-shadow: 0px 18px 34px rgba(6, 3, 26, 0.24);
  border-radius: 15px;
  backdrop-filter: blur(24px);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 15px;
    padding: 1px;
    background: linear-gradient(45deg, hsla(0, 0%, 100%, 0.2), hsla(0, 0%, 100%, 0));
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

const Title = styled.h1`
  margin-top: 16px;
  padding-inline: 32px;
`

const BidDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Readex Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  padding-inline: 32px;
  margin-top: 16px;
  color: #a7f8f8;
`

const BuyerAddress = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 15px;
  margin-top: 16px;
  padding-top: 16px;
  margin-bottom: 24px;
  width: 341px;
  color: white;
  text-decoration: none;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid;
  border-image: linear-gradient(45deg, #fcfcfcd5, rgba(92, 67, 185, 0.144)) 1;

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
    rgba(83, 235, 255, 0.17) -2.88%,
    rgba(126, 151, 216, 0.38) 60.96%
  );
  box-shadow: 0px 40px 20px -30px rgba(6, 3, 26, 0.24);
  backdrop-filter: blur(40px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient(45deg, hsla(0, 0%, 100%, 0.2), hsla(0, 0%, 100%, 0));
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
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
    rgba(46, 214, 226, 0.315) -2.88%,
    rgba(94, 75, 196, 0.54) 60.96%
  );
  backdrop-filter: blur(20px);
  border-radius: 10px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient(45deg, hsla(0, 0%, 100%, 0.2), hsla(0, 0%, 100%, 0));
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

const ImageTitle = styled.h1`
  font-weight: 500;
  font-size: 64px;
  line-height: 96px;
  text-align: center;
  text-transform: uppercase;
  color: #f4dcfa;
`
