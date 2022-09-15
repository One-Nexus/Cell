const concat = require('concat');
const path = require('path');
const fs = require('fs');

const files = [
  // vendor
  './node_modules/Sass-Boost/dist/_sass-boost.scss',
  // core stuff
  './src/_config.scss',
  './src/_parse-cq.scss',
  // atoms
  './src/atoms/_display.scss',
  './src/atoms/_position.scss',
  './src/atoms/_visibility.scss',
  // utilities
  './src/utilities/_create-context-selector.scss',
  './src/utilities/_css-properties.scss',
  './src/utilities/_get-module.scss',
  './src/utilities/_get-namespace.scss',
  './src/utilities/_remove-junk.scss',
  './src/utilities/_remove-modifiers.scss',
  './src/utilities/_shift-pseudo-elements.scss',
  './src/utilities/_theme.scss',
  './src/utilities/_this.scss',
  // mixins
  './src/mixins/_module.scss',
  './src/mixins/_component.scss',
  './src/mixins/_modifier.scss',
  './src/mixins/_extend.scss',
  './src/mixins/_context.scss',
  './src/mixins/_pseudo-state.scss',
  './src/mixins/_wrapper.scss'
];

concat(files).then(result => {
  fs.writeFile(path.join(__dirname, '../dist/cell.scss'), result, error => {
    if (error) {
      return console.warn(error);
    }
  });
});