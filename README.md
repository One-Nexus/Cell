[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/One-Nexus/Cell/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/One-Nexus/Cell.svg?branch=master)](https://travis-ci.com/One-Nexus/Cell)
[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=1.0.0-beta.1&x2=0)](https://www.npmjs.com/package/@onenexus/cell)
[![npm downloads](https://img.shields.io/npm/dm/@onenexus/cell.svg)](https://www.npmjs.com/package/@onenexus/cell)

> Style BEM DOM elements using Sass

<img height="80px" src="http://onenexus.io/cell/images/cell-logo.png" />

* [Overview](#overview)
* [Installation & Setup](#installation--setup)
* [Creating a Module](https://github.com/One-Nexus/Cell/wiki/Creating-a-Module)
* [Mixins](#mixins)
* [Utility Functions](#utility-functions)


## Overview

Cell is used for styling DOM elements that follow the [Synergy naming convention](https://github.com/One-Nexus/Synergy-Front-End-Guides/wiki/Synergy-Values#synergy-naming-convention) (which is practically identical to [BEM](http://getbem.com/)).

> [Learn how to integrate with React components](https://github.com/One-Nexus/Cell/wiki/Creating-a-Module#interface-react---jsx)

* Cell is used for creating modular, configurable and scalable Sass components
* Works with any Sass implementation (Ruby, Dart, Node...)
* Requires Sass 3.4+ (4.9+ if using Node-Sass)
* [Import themes/configuration into your Sass/Cell components as JavaScript/JSON](#TODO)
* Built for the [Synergy framework](https://github.com/One-Nexus/Synergy)

### Example

Given the following markup for an accordion with an active panel component:

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

...or like so:

```sass
@include module('accordion', (
  panel: (
    ...,

    'is-active': (
      content: (
        display: block
      )
    )
  ),

  title: (
    ...
  ),

  content: (
    display: none,
    ...
  )
));
```

### Using `context()`

The above examples use the traditional _cascading_ paradigm to apply styles under certain conditions. You can see that to _show_ the `content` component above, the `display` property is applied in a cascading fashion _inside_ the `panel` component.

Cell allows you to go about this in a dfferent way, allowing you to keep all styles pertaining to a single component in one place, thanks to the [`context()`](#TODO) mixin, as seen in this example (this will produce identical CSS to the previous example):

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
    ...,

    @include context('panel', 'active') {
      display: block;
    }
  }
}
```

...or like so:

```sass
@include module('accordion', (
  panel: (
    ...
  ),

  title: (
    ...
  ),

  content: (
    display: none,
    ...,

    'panel-is-active': {
      display: block
    }
  )
));
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

## Useful Wiki Pages

* []()

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

* [Config](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#config)
* [Enabled](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#enabled)
* [Value Enabled](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#value-enabled)
* [Option](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#option)
* [Setting](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#setting)
* [This](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#this)

---

<a href="https://twitter.com/ESR360">
    <img src="http://edmundreed.com/assets/images/twitter.gif?v=1" width="250px" />
</a>
<a href="https://github.com/ESR360">
    <img src="http://edmundreed.com/assets/images/github.gif?v=1" width="250px" />
</a>
