# ship-components-progress-circle
[React](http://facebook.github.io/react/) svg progress component. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/) or [browserify](http://browserify.org/). Source is in ES6 and is compiled down to ES5 using [Babel](https://babeljs.io/).

[![npm](https://img.shields.io/npm/v/ship-components-progress-circle.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-progress-circle)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-progress-circle/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-progress-circle)
[![Coverage](http://img.shields.io/coveralls/ship-components/ship-components-progress-circle.svg?style=flat)](https://coveralls.io/github/ship-components/ship-components-progress-circle)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-progress-circle.svg?style=flat)](https://david-dm.org/ship-components/ship-components-progress-circle?type=dev)

## Usage

### ES6/JSX (Recommended)
The component is written using ES6/JSX therefore Babel is required to directly use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```js
import React from 'react';
import ProgressCircle from 'ship-components-progress-circle';

export default class Status extends React.Component {
  render() {
    let progress = Math.round((this.props.complete / this.props.total) * 100);
    return (
      <div className='status'>
        <div className='status--label'>
          {this.props.complete} / {this.props.total}
        </div>
        <ProgressCircle
          className='status--circle'
          progress={progress}
          radius={100}
          background
          strokeWidth={2}
        />
      </div>
    )
  }
}
```

### Webpack Configuration
This module is designed to be used with webpack and requires babel.

```shell
npm install webpack babel-loader --save-dev
```

Below are is a sample of how to setup webpack:

```js
/**
 * Relevant Webpack Configuration
 */
{
  [...]
  module: {
    loaders: [
      // Setup support for ES6
      {
        test: /\.(jsx?|es6)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  [...]
}
```

## Tests

*There's currently a bug in Jest, so the units tests and they will not run.*

1. `npm install`
2. `npm test`

## History
* 0.3.0 - Updated Babel to env
* 0.2.0 - Upgrades to React 15, Adds Travis CI, coveralls and fixes the test script
* 0.1.0 - Initial

## License
The MIT License (MIT)

Copyright (c) 2017 Isaac Suttell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
