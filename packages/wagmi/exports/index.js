import { Web3Modal } from '../src/client.ts';
import { VERSION } from '../src/utils/constants.ts';

export { EIP6963Connector } from '../src/connectors/EIP6963Connector.ts';
export { defaultWagmiConfig } from '../src/utils/defaultWagmiCoreConfig.ts';
export { walletConnectProvider } from '../src/utils/provider.ts';

export function createWeb3Modal(options) {
  return new Web3Modal({ ...options, _sdkVersion: 'html-wagmi-' + VERSION });
}
