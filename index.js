
module.exports = function(b) {
  b.addAssetType('.pegjs', require.resolve('./src/PEGJSAsset'));
};