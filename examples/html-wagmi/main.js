import { arbitrum, mainnet } from 'https://esm.sh/@wagmi/core@1/chains'
import { createWeb3Modal, defaultWagmiConfig } from 'https://esm.sh/@web3modal/wagmi@beta?bundle'

// 1. Create projectId
const projectId = 'YOUR_PROJECT_ID'

// 2. Create wagmiConfig
const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: 'Web3Modal HTML Example'
  }
})

// 3. Create modal
const modal = createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: 'light' })

// 4. Trigger modal programaticaly
const openConnectModalBtn = document.getElementById('open-connect-modal')
const openNetworkModalBtn = document.getElementById('open-network-modal')

openConnectModalBtn.addEventListener('click', () => modal.open())
openNetworkModalBtn.addEventListener('click', () => modal.open({ view: 'Networks' }))

// 5. Alternatively use w3m component buttons (see index.html)
