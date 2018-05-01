const peg = require('pegjs-dev');
const { Asset } = require('parcel-bundler');

class PEGJSAsset extends Asset {
  constructor(...args) {
    super(...args);
    this.type = 'js';
  }
  async parse(code) {
    return {
      source: peg.generate(code, {
        format: 'es',
        output: 'source',
      })
    };
  }
  async generate() {
    return {
      js: this.ast.source
    };
  }
}

module.exports = PEGJSAsset;