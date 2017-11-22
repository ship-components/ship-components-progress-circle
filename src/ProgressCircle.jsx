/**
 * ProgressCircle
 * @file SVG Circle Indicating Definite Progress
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class ProgressCircle extends React.Component {

  /**
   * Build the initial <path> when we build the component
   * @param  {Object} props
   */
  constructor(props) {
    super(props);

    this.state = this.calculatePathState(props);
  }

  /**
   * Update the SVG Path if the props change
   * @param  {Object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if(nextProps.radius !== this.props.radius || nextProps.strokeWidth !== this.props.strokeWidth) {
      this.setState(this.calculatePathState(nextProps));
    }
  }

  /**
   * Generate a svn <path> based on a set of props
   * @param  {Object} props
   * @return {Object}
   */
  calculatePathState(props = {}) {
    return {
      path: ProgressCircle.generateSvgPathString(props.radius, props.strokeWidth),
      pathLength: ProgressCircle.calculateCircleCircumference(props.radius)
    };
  }

  renderBackground() {
    return (
      <path
        className='progress-circle--background'
        d={this.state.path}
        fill='none'
        stroke={this.props.backgroundStroke}
        strokeWidth={this.props.strokeWidth} />
    );
  }

  /**
   * Render
   * @return {React}
   */
  render() {
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
      strokeDashoffset : this.state.pathLength * ((100 - this.props.progress) / 100) + 'px'
    };

    return (
      <div className={(this.props.className ? this.props.className + ' ' : '') + 'progress-circle'}>
        <svg
          className='progress-circle--svg'
          width={dimension}
          height={dimension} >
            {this.props.background ? this.renderBackground() : null}
            <path
              className='progress-circle--path'
              transform={pathTransform}
              style={pathStyles}
              ref='circle'
              d={this.state.path}
              strokeDasharray={this.state.pathLength}
              fill='none'
              stroke={this.props.stroke}
              strokeWidth={this.props.strokeWidth} />
        </svg>
      </div>
    );
  }
}

/**
 * Default props
 * @static
 * @type {Object}
 */
ProgressCircle.defaultProps = {
  radius: 10,
  strokeWidth: 10,
  progress: 0,
  stroke: '#000000',
  backgroundStroke: '#eeeeee'
}

/**
 * Type Checking
 * @static
 * @type {Object}
 */
ProgressCircle.propTypes = {
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  progress: PropTypes.number.isRequired,
  className: PropTypes.string,
  stroke: PropTypes.string,
  backgroundStroke: PropTypes.string
}

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

  var path = 'M' + (cx-rx).toString() + ',' + cy.toString();
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
}
