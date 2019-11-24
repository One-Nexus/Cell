[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/One-Nexus/Cell/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/One-Nexus/Cell.svg?branch=master)](https://travis-ci.com/One-Nexus/Cell)
[![npm version](https://badge.fury.io/js/%40onenexus%2Fcell.svg)]((https://www.npmjs.com/package/@onenexus/cell))
[![npm downloads](https://img.shields.io/npm/dm/@onenexus/cell.svg)](https://www.npmjs.com/package/@onenexus/cell)

> Style BEM DOM elements using Sass

<img height="80px" src="http://onenexus.io/cell/images/cell-logo.png" />

* [Overview](#overview)
* [Installation & Setup](#installation--setup)
* [Creating a Module](https://github.com/One-Nexus/Cell/wiki/Creating-a-Module)
* [Mixins](#mixins)
* [Utility Functions](#utility-functions)

<table>
  <thead>
    <tr>
      <th colspan="4">CodeSandbox Demos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://codesandbox.io/s/cell-demo-r04z5">Standard Demo</a></td>
      <td><a href="https://codesandbox.io/s/cell-demo--js-iklx3">JavaScript Demo</a></td>
      <td><a href="https://codesandbox.io/s/cell-demo--react-hygf9">React Demo</a></td>
      <td><a href="https://codesandbox.io/s/cell-demo--basic-p55bc">Basic Sass-Only Demo</a></td>
    </tr>
  </tbody>
</table>

## Overview

Cell is used for styling DOM elements that follow the [Cell naming convention](https://github.com/One-Nexus/Cell/wiki/Cell-Naming-Convention) (which is almost identical to [BEM](http://getbem.com/)).

> [Learn how to integrate with React components](#using-with-react)

* Cell is used for creating modular, configurable and scalable Sass components
* Works with any Sass implementation (Ruby, Dart, Node...)
* Requires Sass 3.4+ (4.9+ if using Node-Sass)
* [Import themes/configuration into your Sass/Cell components as JavaScript/JSON](https://github.com/One-Nexus/Cell/wiki/JavaScript-Configuration#usage)
* Built for the [Synergy framework](https://github.com/One-Nexus/Synergy)

### Example

Given the following markup for an accordion with an active panel component:

> [View CodeSandbox Demo](https://codesandbox.io/s/cell-demo--basic-p55bc)

> Unlike traditional BEM, you do not need separate classes for modifiers

```html
<div class="accordion">
  <div class="accordion__panel">
    <div class="accordion__title">foo</div>
    <div class="accordion__content">bar</div>
  </div>
  <div class="accordion__panel--active">
    <div class="accordion_title">fizz</div>
    <div class="accordion_content">buzz</div>
  </div>
</div>
```

This can be styled with Cell like so:

```scss
@include module('accordion') {
  @include component('panel') {
    ...

    @include is('active') {
      @include component('content') {
        display: block;
      }
    }
  }

  @include component('title') {
    ...
  }

  @include component('content') {
    display: none;
    ...
  }
}
```

### Using `context()`

The above examples use the traditional _cascading_ paradigm to apply styles under certain conditions. You can see that to _show_ the `content` component above, the `display` property is applied in a cascading fashion _inside_ the `panel` component.

Cell allows you to go about this in a dfferent way, allowing you to keep all styles pertaining to a single component in one place, thanks to the [`context()`](https://github.com/One-Nexus/Cell/wiki/Context()) mixin, as seen in this example (this will produce identical CSS to the previous example):

```scss
@include module('accordion') {
  @include component('panel') {
    ...
  }

  @include component('title') {
    ...
  }

  @include component('content') {
    display: none;
    ...

    @include context('panel', 'active') {
      display: block;
    }
  }
}
```

## Installation & Setup

```
npm install --save @onenexus/cell
```

```scss
// this path will vary depending on where the library is being imported
@import '../../node_modules/@onenexus/cell/dist/cell';
```

If you are using Node Sass, you can import the library anywhere using:

```scss
@import '~@onenexus/cell/dist/cell';
```

> See the [JavaScript Configuration](https://github.com/One-Nexus/Cell/wiki/JavaScript-Configuration) page for instructions on how to use JavaScript/JSON configuration

## Using with JavaScript

Cell can be used with JavaScript for things like [theming](https://github.com/One-Nexus/Cell/wiki/Theming) and [module configuration](https://github.com/One-Nexus/Cell/wiki/Module-Configuration).

> [View CodeSandbox Demo](https://codesandbox.io/s/cell-demo--js-iklx3)

> [Using React?](#using-with-react)

### Example

```
modules/
|--myModule/
|  |--config.js
|  |--styles.scss
themes/
|--myTheme.js
app.scss
```

###### themes/myTheme.js

```js
export default {
  colors: {
    primary: '#00d4ff',
    secondary: '#58ed02'
  },
  breakpoints: {
    small: '720px',
    large: '1400px'
  }
}
```

###### modules/myModule/config.js

```js
export default (theme) => ({
  name: 'myModule',
  background: theme.colors.primary,
  gutter: '1em'
});
```

###### modules/myModule/styles.scss

```scss
@import 'config.js';

@include module {
  display: block;
  margin-top: this('gutter');

  @media (min-width: theme('breakpoints', 'small')) {
    display: inline-block;
  }
}
```

###### app.scss

```scss
@import '~@onenexus/cell/dist/cell';
@import 'themes/myTheme.js';
@import 'modules/myModule/styles';
```

###### CSS Output

```css
.myModule, [class*="myModule--"] {
  background: #00d4ff;
  display: block;
  margin-top: 1em;
}

@media (min-width: 720px) {
  .myModule, [class*="myModule--"] {
    display: inline-block;
  }
}
```

> Note that the `background` property is output to CSS despite not being hard-coded inside `styles.scss` - this is because configuration properties that correspond to CSS properties can be automatically parsed as CSS - read the [Cell Query Draft page](https://github.com/One-Nexus/Cell/wiki/Cell-Query-Draft) to learn more

> Read the [JavaScript Configuration page](https://github.com/One-Nexus/Cell/wiki/JavaScript-Configuration) for setup instructions and more information

## Using with React

Using Cell with React can be as simple as configuring your Webpack to use [Sass-Loader](https://github.com/webpack-contrib/sass-loader). See how the below React accordion component can be styled by importing its corresponding Cell module (`styles.scss`):

> [View CodeSandbox Demo](https://codesandbox.io/s/cell-demo--react-hygf9)

###### modules/Accordion/index.js

```jsx
import React, { useState } from 'react';
import './styles.scss';

const Accordion = ({ panels, ...props }) => {
  const [activeIndex, toggle] = useState(0);

  return (
    <div className='accordion' { ...props }>
      {panels.map(({ heading, content }, index) => (
        <div className={`accordion__panel${index === activeIndex ? '--active':''}`}>
          <div className='accordion__title' onClick={() => toggle(index)}>
            {title}
          </div>

          <div className='accordion__content'>
            {content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
```

### Using with Lucid (React Library)

[Lucid](https://github.com/One-Nexus/Lucid) is a React library for working with the Cell/BEM naming convention. If using Lucid, the above React component could be rewritten as:

```jsx
import React, { useState } from 'react';
import { Module, Component } from '@onenexus/lucid';
import './styles';

const Accordion = ({ panels, ...props }) => {
  const [activeIndex, toggle] = useState(0);

  return (
    <Module name='accordion' { ...props }>
      {panels.map(({ heading, content }, index) => (
        <Component name='panel' active={activeIndex === index}>
          <Component name='heading' onClick={() => toggle(index)}>
            {heading}
          </Component>

          <Component name='content'>
            {content}
          </Component>
        </Component>
      ))}
    </Module>
  );
}

export default Accordion;
```

This solution offers all the practical benefits of scoped styling (thanks to the underlying Cell/BEM naming convention) without any of the uglyness that BEM usually brings, and without any of the overhead that CSS-in-JS techniques (and actual *scoping*) bring, keeping everything clean and tidy.

## Useful Wiki Pages

* [Creating a Cell Module](https://github.com/One-Nexus/Cell/wiki/Creating-a-Module)
* [Module Configuration](https://github.com/One-Nexus/Cell/wiki/Module-Configuration)
* [Theming](https://github.com/One-Nexus/Cell/wiki/Theming)
* [Cell Query Draft (CQD)](https://github.com/One-Nexus/Cell/wiki/Cell-Query-Draft)
* [Using with JavaScript](https://github.com/One-Nexus/Cell/wiki/JavaScript-Configuration)

## Mixins

Cell comes with the following mixins to help create and structure your modules in the most efficient way possible:

* [Module](https://github.com/One-Nexus/Cell/wiki/Module())
* [Component](https://github.com/One-Nexus/Cell/wiki/Component())
* [Modifier](https://github.com/One-Nexus/Cell/wiki/Modifier())
* [Option](https://github.com/One-Nexus/Cell/wiki/Option())
* [Value](https://github.com/One-Nexus/Cell/wiki/Value())
* [Extend](https://github.com/One-Nexus/Cell/wiki/Extend())
* [Context](https://github.com/One-Nexus/Cell/wiki/Context())
* [Pseudo-State](https://github.com/One-Nexus/Cell/wiki/Pseudo-State())
* [Wrapper](https://github.com/One-Nexus/Cell/wiki/Wrapper())

## Utility Functions

* [Create Config](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#create-config)
* [Enabled](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#enabled)
* [Value Enabled](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#value-enabled)
* [Option](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#option)
* [Setting](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#setting)
* [This](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#this)
* [Theme](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#theme)

## BEM Inspired Motivation

The initial motiviation behind creating Cell is twofold:

* Address the uglyness of BEM
* Address the practical implementation of BEM using Sass

BEM solves very real problems like no other solution due to [its inherent nature](https://itnext.io/thinking-of-bem-as-a-ui-philosophy-instead-of-a-css-naming-convention-9727e2cf9328), however it is [often considered quite ugly](https://hackernoon.com/bem-should-not-exist-6414005765d6); the `__` and `--` thrown into your HTML along with [repeated keywords when using modifiers](https://stackoverflow.com/questions/32052836/sass-bem-avoid-modifier-duplication-when-element-is-inside-a-modifier) (`block__component block__component--modifier-1 block__component--modifier-2`) make the HTML extremely jarring to look at. Cell solves these issues by abstracting the logic into mixins and making use of CSS's [wildcard attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).

Since the initial conception, Cell has evolved to become a fully-fledged framework for writing scalable and maintainable CSS.

---

<a href="https://twitter.com/ESR360">
    <img src="http://edmundreed.com/assets/images/twitter.gif?v=1" width="250px" />
</a>
<a href="https://github.com/ESR360">
    <img src="http://edmundreed.com/assets/images/github.gif?v=1" width="250px" />
</a>
