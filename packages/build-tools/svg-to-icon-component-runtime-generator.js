const path = require('path');
const pascalCase = require('pascal-case');
const { stringifyRequest } = require('loader-utils');
const { stringifySymbol, stringify } = require('svg-sprite-loader/lib/utils');

module.exports = function runtimeGenerator({ symbol, config, context, loaderContext }) {
  const { spriteModule, symbolModule, runtimeOptions } = config;
  const compilerContext = loaderContext._compiler.context;
  const iconModulePath = path.resolve(compilerContext, runtimeOptions.iconModule);
  const iconModuleRequest = stringify(
    path.relative(path.dirname(symbol.request.file), iconModulePath)
  );

  const spriteRequest = stringifyRequest({ context }, spriteModule);
  const symbolRequest = stringifyRequest({ context }, symbolModule);
  const parentComponentDisplayName = 'SpriteSymbolComponent';
  const displayName = `${pascalCase(symbol.id)}${parentComponentDisplayName}`;

  // console.log(symbol);
  // console.log(symbol.id); // twitter
  // console.log(iconModuleRequest); // ../../../../../../docs-site/icon.jsx
  // console.log(displayName); // TwitterSpriteSymbolComponent
  // console.log(symbol._tree);
  // console.log(symbol._tree[0]);

  return `
    import { h, Component } from 'preact';
    import SpriteSymbol from ${symbolRequest};
    import sprite from ${spriteRequest};
    import ${parentComponentDisplayName} from ${iconModuleRequest};

    const symbol = new SpriteSymbol(${stringifySymbol(symbol)});
    sprite.add(symbol);
    export default class ${displayName} extends Component {
      render() {
        return <${parentComponentDisplayName} glyph="${symbol.id}" {...this.props} />;
      }
    }
  `;
};
