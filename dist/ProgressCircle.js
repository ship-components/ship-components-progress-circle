/*!
 *                               __                   .__    .__                                                                                         .__               .__          
 * _______   ____ _____    _____/  |_            _____|  |__ |__|_____           _____________  ____   ___________   ____   ______ ______           ____ |__|______   ____ |  |   ____  
 * \_  __ \_/ __ \\__  \ _/ ___\   __\  ______  /  ___/  |  \|  \____ \   ______ \____ \_  __ \/  _ \ / ___\_  __ \_/ __ \ /  ___//  ___/  ______ _/ ___\|  \_  __ \_/ ___\|  | _/ __ \ 
 *  |  | \/\  ___/ / __ \\  \___|  |   /_____/  \___ \|   Y  \  |  |_> > /_____/ |  |_> >  | \(  <_> ) /_/  >  | \/\  ___/ \___ \ \___ \  /_____/ \  \___|  ||  | \/\  \___|  |_\  ___/ 
 *  |__|    \___  >____  /\___  >__|           /____  >___|  /__|   __/          |   __/|__|   \____/\___  /|__|    \___  >____  >____  >          \___  >__||__|    \___  >____/\___  >
 *              \/     \/     \/                    \/     \/   |__|             |__|               /_____/             \/     \/     \/               \/                \/          \/ 
 * react-ship-progress-circle 0.1.0
 * Description: React SVG Progress Circle
 * Author: Isaac Suttell
 * Homepage: https://github.com/ship-components/react-ship-progress-circle#readme
 * Bugs: https://github.com/ship-components/react-ship-progress-circle/issues
 * License: MIT
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ProgressCircle
	 * @file SVG Circle Indicating Definite Progress
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var ProgressCircle = (function (_React$Component) {
	  _inherits(ProgressCircle, _React$Component);

	  /**
	   * Build the initial <path> when we build the component
	   * @param  {Object} props
	   */

	  function ProgressCircle(props) {
	    _classCallCheck(this, ProgressCircle);

	    _get(Object.getPrototypeOf(ProgressCircle.prototype), 'constructor', this).call(this, props);

	    this.state = this.calculatePathState(props);
	  }

	  /**
	   * Default props
	   * @static
	   * @type {Object}
	   */

	  /**
	   * Update the SVG Path if the props change
	   * @param  {Object} nextProps
	   */

	  _createClass(ProgressCircle, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.radius !== this.props.radius || nextProps.strokeWidth !== this.props.strokeWidth) {
	        this.setState(this.calculatePathState(nextProps));
	      }
	    }

	    /**
	     * Generate a svn <path> based on a set of props
	     * @param  {Object} props
	     * @return {Object}
	     */
	  }, {
	    key: 'calculatePathState',
	    value: function calculatePathState() {
	      var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      return {
	        path: ProgressCircle.generateSvgPathString(props.radius, props.strokeWidth),
	        pathLength: ProgressCircle.calculateCircleCircumference(props.radius)
	      };
	    }
	  }, {
	    key: 'renderBackground',
	    value: function renderBackground() {
	      return _react2['default'].createElement('path', {
	        className: 'progress-circle--background',
	        d: this.state.path,
	        fill: 'none',
	        stroke: this.props.backgroundStroke,
	        strokeWidth: this.props.strokeWidth });
	    }

	    /**
	     * Render
	     * @return {React}
	     */
	  }, {
	    key: 'render',
	    value: function render() {
	      /**
	       * How wide/tall is it?
	       *
	       * @type    {Number}
	       */
	      var dimension = (parseInt(this.props.radius, 10) + parseInt(this.props.strokeWidth, 10)) * 2;

	      /**
	       * Rotate 90deg so the line starts at the top
	       *
	       * @type    {String}
	       */
	      var pathTransform = 'translate(' + dimension + ' 0) rotate(90)';

	      /**
	       * Setup SVG Styles
	       *
	       * @type    {Object}
	       */
	      var pathStyles = {
	        strokeDashoffset: this.state.pathLength * ((100 - this.props.progress) / 100) + 'px'
	      };

	      return _react2['default'].createElement(
	        'div',
	        { className: (this.props.className ? this.props.className + ' ' : '') + 'progress-circle' },
	        _react2['default'].createElement(
	          'svg',
	          {
	            className: 'progress-circle--svg',
	            width: dimension,
	            height: dimension },
	          this.props.background ? this.renderBackground() : null,
	          _react2['default'].createElement('path', {
	            className: 'progress-circle--path',
	            transform: pathTransform,
	            style: pathStyles,
	            ref: 'circle',
	            d: this.state.path,
	            strokeDasharray: this.state.pathLength,
	            fill: 'none',
	            stroke: this.props.stroke,
	            strokeWidth: this.props.strokeWidth })
	        )
	      );
	    }
	  }]);

	  return ProgressCircle;
	})(_react2['default'].Component);

	exports['default'] = ProgressCircle;
	ProgressCircle.defaultProps = {
	  radius: 10,
	  strokeWidth: 10,
	  progress: 0,
	  stroke: '#000000',
	  backgroundStroke: '#eeeeee'
	};

	/**
	 * Type Checking
	 * @static
	 * @type {Object}
	 */
	ProgressCircle.propTypes = {
	  radius: _react2['default'].PropTypes.number,
	  strokeWidth: _react2['default'].PropTypes.number,
	  progress: _react2['default'].PropTypes.number.isRequired,
	  className: _react2['default'].PropTypes.string,
	  stroke: _react2['default'].PropTypes.string,
	  backgroundStroke: _react2['default'].PropTypes.string
	};

	/**
	 * Calculate what the path of a circle centered in a space will be
	 * @static
	 * @param     {Object}    props
	 * @return    {String}
	 */
	ProgressCircle.generateSvgPathString = function generateSvgPathString(radius, strokeWidth) {
	  // Radius
	  var r = parseFloat(radius, 10);
	  var rx = r;
	  var ry = r;

	  // Center it
	  var cx = r + parseInt(strokeWidth, 10);
	  var cy = r + parseInt(strokeWidth, 10);

	  var path = 'M' + (cx - rx).toString() + ',' + cy.toString();
	  path += 'a' + rx.toString() + ',' + ry.toString() + ' 0 1,0 ' + (2 * rx).toString() + ',0';
	  path += 'a' + rx.toString() + ',' + ry.toString() + ' 0 1,0 ' + (-2 * rx).toString() + ',0';

	  return path;
	};

	/**
	 * Caluclate the circumference so we know how to animate the line
	 * @static
	 * @param     {Object}    props
	 * @return    {Number}
	 */
	ProgressCircle.calculateCircleCircumference = function calculateCircleCircumference(radius) {
	  return 2 * Math.PI * radius;
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ]);