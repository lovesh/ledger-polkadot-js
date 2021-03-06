const CLA = {
  KUSAMA: 0x99,
  POLKADOT: 0x90,
  POLYMATH: 0x91,
};

// https://github.com/satoshilabs/slips/blob/master/slip-0044.md
const SLIP0044 = {
  KUSAMA: 0x800001b2,
  POLKADOT: 0x80000162,
  POLYMATH: 0x80000001, // TODO replace with mainnet code when available
};

module.exports = {
  CLA,
  SLIP0044,
};
