const peg = require('pegjs-dev');
const { Asset } = require('parcel-bundler');

class PEGJSAsset extends Asset {
  async parse(code) {
    return {
      source: peg.generate(code, {
        format: 'es',
        output: 'source',
      })
    };
  }
  async generate() {
    return [
      {
        type: 'js',
        value: this.ast.source
      }
    ];
  }
}

module.exports = PEGJSAsset;