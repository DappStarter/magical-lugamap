require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth range provide gesture help foster gasp'; 
let testAccounts = [
"0xefd7dd666e0e6123f844ceeaaa5260da039b35c62dac5169517f2d9cda515e33",
"0x518a7fe6c50ef3db577bba23a8fa0b2145cda3c2a6281c39947bf07b2df02178",
"0x2e21aee29b61e11340a1f73ab50ae75d66df108f731fed418e5db5645b3e0d15",
"0x8a23b0dc52129513c330d80456a08701d02b3fbb2e98ea4230fd1e7a0cb9469c",
"0xb107b91ac1dbda2b8efffbfeda900648dfa9effc55f4144f5013028ae6858fc5",
"0xd5b22ad0de4b254a8b00248bc2981347d0d334ef1ac2e205d50f480a793f9445",
"0x30609e4c210848cba9dbc72122aed571c5408071adaaab5c58a5a9621fe925f3",
"0x5e479a62092a02b360b30f104bc83661fc3cc75b5e9907cceded264c298a985a",
"0x26ac47d3ca168da668835638a76cc28f458358fe47e8d2363e4bf251ecb76041",
"0xc098578d3bf3e16e752ef111fac3a08bfda7358701354a78f97a9fc353b43403"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
