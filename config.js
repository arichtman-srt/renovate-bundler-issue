
module.exports = {
  hostRules: [{
    hostType: 'rubygems',
    matchHost: 'rubygems.pkg.github.com',
    token: process.env.BUNDLE_RUBYGEMS__PKG__GITHUB__COM,
  }],
};
