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
    background: hsla(0, 0%, 100%, 0.5);
    backdrop-filter: blur(24px);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  return (
    <Wrapper>
      {accountData ? (
        <div>
          {accountData.address}
          <button onClick={disconnect}>Disconnect</button>
        </div>
      ) : (
        <button
          disabled={!metamask.ready}
          onClick={() => connect(metamask)}
        >
          Unlock with MetaMask
        </button>
      )}
    </Wrapper>
  )
}
