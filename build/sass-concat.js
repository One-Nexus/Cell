const concat = require('concat');
const path = require('path');
const fs = require('fs');

const files = [
  // vendor
  './node_modules/Sass-Boost/dist/_sass-boost.scss',
  // config
  './src/_config.scss',
  // utilities
  './src/utilities/_create-config.scss',
  './src/utilities/_css-properties.scss',
  './src/utilities/_enabled.scss',
  './src/utilities/_get-css-from-map.scss',
  './src/utilities/_get-module-name.scss',
  './src/utilities/_get-param.scss',
  './src/utilities/_merge-css-maps.scss',
  './src/utilities/_module-tree.scss',
  './src/utilities/_option.scss',
  './src/utilities/_remove-junk.scss',
  './src/utilities/_remove-modifiers.scss',
  './src/utilities/_selector-to-map.scss',
  './src/utilities/_setting.scss',
  './src/utilities/_show.scss',
  './src/utilities/_strip-glue.scss',
  './src/utilities/_theme.scss',
  './src/utilities/_this.scss',
  './src/utilities/_value-enabled.scss',
  // mixins
  './src/mixins/_module.scss',
  './src/mixins/_component.scss',
  './src/mixins/_modifier.scss',
  './src/mixins/_extend.scss',
  './src/mixins/_context.scss',
  './src/mixins/_option.scss',
  './src/mixins/_pseudo-state.scss',
  './src/mixins/_value.scss',
  './src/mixins/_wrapper.scss'
];

concat(files).then(result => {
  fs.writeFile(path.join(__dirname, '../dist/cell.scss'), result, error => {
    if (error) {
      return console.warn(error);
    }
  });
});