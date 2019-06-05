[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/One-Nexus/Cell/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/One-Nexus/Cell.svg?branch=master)](https://travis-ci.com/One-Nexus/Cell)
[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=1.0.0-beta.1&x2=0)]((https://www.npmjs.com/package/@onenexus/cell))
[![npm downloads](https://img.shields.io/npm/dm/@onenexus/cell.svg)](https://www.npmjs.com/package/@onenexus/cell)

> Style Synergy modules/BEM DOM elements using Sass

<img height="80px" src="http://onenexus.io/cell/images/cell-logo.png" />

* [Overview](#overview)
* [Installation & Setup](#installation--setup)
* [Creating a Module](https://github.com/One-Nexus/Cell/wiki/Creating-a-Module)
* [Mixins](#mixins)
* [Utility Functions](#utility-functions)

<img src="http://www.onenexus.io/cell/images/CellvsSatan.gif" />

## Overview

Cell is used for styling DOM elements that follow the [Synergy naming convention](https://github.com/One-Nexus/Synergy-Front-End-Guides/wiki/Synergy-Values#synergy-naming-convention) (which includes BEM).

> [Learn how to integrate with React components](https://github.com/One-Nexus/Cell/wiki/Creating-a-Module#interface-react---jsx)

* Cell is used for creating modular, configurable and scalable Sass components
* Works with any Sass implementation (Ruby, Dart, Node...)
* Requires Sass 3.4+ (4.9+ if using Node-Sass)
* Import configuration into your Sass/Cell components as JavaScript/JSON
* Built for the [Synergy framework](https://github.com/One-Nexus/Synergy)

### Example

Given the following markup for an accordion with an active panel component:

```html
<div class="accordion">
    <div class="accordion_panel">
        <div class="accordion_title">foo</div>
        <div class="accordion_content">bar</div>
    </div>
    <div class="accordion_panel-active">
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

        @include modifier('active') {
            @include component('content') {
                display: block;
                ...
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
    'component(panel)': (
        'modifier(active)': (
            'component(content)': (
                display: block,
                ...
            )
        )
    ),

    'component(title)': (
        ...
    ),

    'component(content)': (
        display: none,
        ...
    )
));
```

...and even:


```sass
@include module('accordion', (
    _panel: (
        -active: (
            _content: (
                display: block,
                ...
            )
        )
    ),

    _title: (
        ...
    ),

    _content: (
        display: none,
        ...
    )
));
```

<img src="http://www.onenexus.io/cell/images/GokuvsCell.gif" />

## Installation & Setup

```
npm install --save @onenexus/cell
```

```scss
// this path will vary depending on where the library is imported
@import '../../node_modules/@onenexus/cell/dist/cell';
```

If you are using Node Sass, you can import the library anywhere using:

```scss
@import '~@onenexus/cell/dist/cell';
```

> Using BEM? Checkout the [Working With BEM](https://github.com/One-Nexus/Cell/wiki/Working-With-BEM) page

> See the [JavaScript Configuration](https://github.com/One-Nexus/Cell/wiki/JavaScript-Configuration) page for instructions on how to use JavaScript/JSON configuration

<img src="http://www.onenexus.io/cell/images/TrunksvsCell.gif" />

## Mixins

Cell comes with the following mixins to help create and structure your modules in the most efficient way possible:

* [Module](https://github.com/One-Nexus/Cell/wiki/Module())
* [Component](https://github.com/One-Nexus/Cell/wiki/Component())
* [Modifier](https://github.com/One-Nexus/Cell/wiki/Modifier())
* [Option](https://github.com/One-Nexus/Cell/wiki/Option())
* [Value](https://github.com/One-Nexus/Cell/wiki/Value())
* [Extend](https://github.com/One-Nexus/Cell/wiki/Extend())
* [Context](https://github.com/One-Nexus/Cell/wiki/Context())

<img src="http://www.angelfire.com/anime/friezasdomain/animatedgifs/cell/cell6.gif" />

## Utility Functions

* [Config](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#config)
* [Enabled](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#enabled)
* [Value Enabled](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#value-enabled)
* [Option](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#option)
* [Setting](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#setting)
* [This](https://github.com/One-Nexus/Cell/wiki/Utility-Functions#this)

<img src="http://www.onenexus.io/cell/images/freizaandcell.gif" />

---

<a href="https://twitter.com/ESR360">
    <img src="http://edmundreed.com/assets/images/twitter.gif?v=1" width="250px" />
</a>
<a href="https://github.com/ESR360">
    <img src="http://edmundreed.com/assets/images/github.gif?v=1" width="250px" />
</a>