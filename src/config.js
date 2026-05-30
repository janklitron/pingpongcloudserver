module.exports = {
  // Railway injects PORT automatically
  port: process.env.PORT || 9080,

  unixSocketPermissions: 0o777,

  // Railway sits behind a proxy — required for correct IP logging
  trustProxy: process.env.TRUST_PROXY !== 'false',

  anonymizeAddresses: process.env.ANONYMIZE_ADDRESSES === 'true',

  anonymizeGeneratedUsernames: true,

  perMessageDeflate: false,

  bufferSends: 60,

  enableRename: false,

  enableDelete: false,

  logging: {
    // Railway captures stdout — no need for file logs
    console: true,
    rotation: false,
  },
};
