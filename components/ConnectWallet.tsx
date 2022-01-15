import styled from 'styled-components'
import { useAccount, useConnect } from 'wagmi'

export default function ConnectWallet() {
  const [{ data: connectData }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount()

  const metamask = connectData.connectors?.[0]

  const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: ${connectData.connected ? 'auto' : '100%'};
    top: 0;
    left: 0;
    background: rgba(20, 19, 19, 0.137);
    backdrop-filter: blur(24px);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const ConnectButton = styled.button`
    background: linear-gradient(
      300deg,
      rgba(46, 214, 226, 0.315) -2.88%,
      rgba(94, 75, 196, 0.54) 60.96%
    );
    color: white;
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
    outline: none;
    border: none;
    border-radius: 30px;
    padding: 16px 24px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 30px;
      padding: 1px;
      background: linear-gradient(
        45deg,
        hsla(0, 0%, 100%, 0.2),
        hsla(0, 0%, 100%, 0)
      );
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
    box-shadow: 0px 0px 30px 2px rgba(91, 3, 233, 0.24);
  `

  const DisconnectButton = styled(ConnectButton)`
    margin-left: auto;
    margin-right: 32px;
    margin-block: 16px;
    padding: 8px 24px;
  `

  return (
    <Wrapper>
      {accountData ? (
        <DisconnectButton onClick={disconnect}>Disconnect</DisconnectButton>
      ) : (
        <ConnectButton disabled={!metamask.ready} onClick={() => connect(metamask)}>
          Unlock with MetaMask
        </ConnectButton>
      )}
    </Wrapper>
  )
}
