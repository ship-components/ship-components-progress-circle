jest.unmock('../ProgressCircle');

import React from 'react';
// import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const ProgressCircle = require('../ProgressCircle').default;

describe('ProgressCircle', function() {
  it('should assign a custom css class', function() {

    let cssClass = 'testClass';

    // Render a checkbox with label in the document
    let reactTree = TestUtils.renderIntoDocument(
      <ProgressCircle
        className={cssClass}
      />
    );

    let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, cssClass);
    expect(el.className.indexOf(cssClass)).toBeGreaterThan(-1);
  });

  it('should calculate the circumference of a cricle by its radius', function() {
    expect(ProgressCircle.calculateCircleCircumference(2)).toBeCloseTo(12.56637061435918, 6);
    expect(ProgressCircle.calculateCircleCircumference(10)).toBeCloseTo(62.83185307179586, 6);
  });


  it('should generate a svg path string', function() {
    const paths = [
      ProgressCircle.generateSvgPathString(2, 1),
      ProgressCircle.generateSvgPathString(10, 2),
      ProgressCircle.generateSvgPathString(100, 20)
    ];
    const pathMatch = /M\d+,\d+a\d+,\d+\s0\s1,0\s\d+,0a\d+,\d+\s0\s1,0\s\-\d+,0/;
    paths.forEach((path)=>{
      expect(typeof path).toEqual('string');
      expect(path).toMatch(pathMatch);
    });
  });

  it('should change the dash offset based on progress', function() {
      const radius = 10;
      const circumference = ProgressCircle.calculateCircleCircumference(radius);
      const progress = 50;

      // Render a checkbox with label in the document
      let reactTree = TestUtils.renderIntoDocument(
        <ProgressCircle
          radius={radius}
          progress={progress}
        />
      );
      let comp = TestUtils.findRenderedComponentWithType(reactTree, ProgressCircle);
      expect(comp.state.pathLength).toEqual(circumference);
  });
});
