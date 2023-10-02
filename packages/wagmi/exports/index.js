import { Web3Modal } from '../src/client.js';
import { VERSION } from '../src/utils/constants.js';

export { EIP6963Connector } from '../src/connectors/EIP6963Connector.js';
export { defaultWagmiConfig } from '../src/utils/defaultWagmiCoreConfig.js';
export { walletConnectProvider } from '../src/utils/provider.js';

export function createWeb3Modal(options) {
  return new Web3Modal({ ...options, _sdkVersion: 'html-wagmi-' + VERSION });
}
