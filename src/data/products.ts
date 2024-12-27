import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'pow-evm',
    name: 'Custom Proof of Work Chain',
    category: 'Blockchain',
    consensusType: 'Proof of Work',
    chainType: 'EVM',
    description: 'Custom Proof of Work EVM chain (mainnet & testnet) with Blockscout UI',
    basePrice: 5000,
    additionalOptions: [
      { name: 'Latest Blockscout UI', price: 500 }
    ]
  },
  {
    id: 'poa-evm',
    name: 'Custom Proof of Authority Chain',
    category: 'Blockchain',
    consensusType: 'Proof of Authority',
    chainType: 'EVM',
    description: 'Custom Proof of Authority chain (mainnet & testnet) with Blockscout UI',
    basePrice: 4000,
    additionalOptions: [
      { name: 'Latest Blockscout UI', price: 500 }
    ]
  },
  {
    id: 'pos-evm',
    name: 'Custom Proof of Stake Chain',
    category: 'Blockchain',
    consensusType: 'Proof of Stake',
    chainType: 'EVM',
    description: 'Custom PoS EVM chain with simple logic (mainnet & testnet) with Blockscout UI',
    basePrice: 6000,
    additionalOptions: [
      { name: 'Latest Blockscout UI', price: 500 }
    ]
  },
  {
    id: 'privacy-pos-evm',
    name: 'Privacy Proof of Stake Chain',
    category: 'Blockchain',
    consensusType: 'Privacy Proof of Stake',
    chainType: 'EVM',
    description: 'Custom Privacy PoS EVM chain with simple logic (mainnet & testnet) with Blockscout UI',
    basePrice: 9000,
    additionalOptions: [
      { name: 'Latest Blockscout UI', price: 500 }
    ]
  },
  {
    id: 'dpos-evm',
    name: 'Delegated Proof of Stake Chain (EVM)',
    category: 'Blockchain',
    consensusType: 'Delegated Proof of Stake',
    chainType: 'EVM',
    description: 'Custom DPoS EVM chain (mainnet & testnet) with Blockscout UI',
    basePrice: 11000,
    additionalOptions: [
      { name: 'Latest Blockscout UI', price: 500 }
    ]
  },
  {
    id: 'dpos-non-evm',
    name: 'Delegated Proof of Stake Chain (Non-EVM)',
    category: 'Blockchain',
    consensusType: 'Delegated Proof of Stake',
    chainType: 'Non-EVM',
    description: 'Custom DPoS chain (non-EVM) with custom address prefix and explorer',
    basePrice: 15000
  },
  {
    id: 'dpos-hybrid',
    name: 'Hybrid DPoS Chain (EVM + Non-EVM)',
    category: 'Blockchain',
    consensusType: 'Delegated Proof of Stake',
    chainType: 'EVM + Non-EVM',
    description: 'Combined-interface DPoS chain that supports both EVM & non-EVM with explorers',
    basePrice: 20000,
    additionalOptions: [
      { name: 'Latest Blockscout UI', price: 500 }
    ]
  },
  {
    id: 'advanced-explorer',
    name: 'Advanced EVM Explorer',
    category: 'Explorer',
    consensusType: 'N/A',
    chainType: 'EVM',
    description: 'Advanced blockchain explorer for EVM chains with enhanced analytics, smart contract verification, and advanced search capabilities',
    basePrice: 1000
  }
];