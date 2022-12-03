require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember evil grid prize off gesture'; 
let testAccounts = [
"0x43d3954c5cb34c6b2cb2e8073c744d3975b17e3dc9e67602a870020e5a59b6f2",
"0xdd0e77f73af26edf65f3e3107c53b227e457b375a84165ebe8872e3ac5d19603",
"0x84d6fab9cc8c537336e0ff40984635194dc7fb06449af36550dbff80fb603018",
"0xa8cc570e4f6a9b0a0a6566387221138cdbac0184d9529624abf11be9949a30d1",
"0x5927addf0e1394c4f5173b0f30f43eb1f65f4c785e413e24b9e62e8ecd14e97d",
"0x6986b28156753cf8f3f3b512ed05a3d6eec8ea6275af980bb003d906a51813f4",
"0x782d3168438e963f0a8b1b4c9ae649082ba219cbfea04338bd0c70ee5dbd24c0",
"0x1aace875de7d4abde6e7f3d00f28fef1e82f3437686434ed928f1f228ec26dd3",
"0x5ff0e674a1f5b381575cae54eb7faa92ae537d66dd5f79ac20d8e9e44964e9a9",
"0x51c951677961266f180339da72a0279dc93357f289a93e4ffbb5e2c4dc251eaa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


