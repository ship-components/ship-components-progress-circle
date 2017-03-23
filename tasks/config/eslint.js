/**
 * eslint
 *
 * ---------------------------------------------------------------
 *
 * # Lints js, jsx, and es6
 *
 * For usage docs see:
 *      https://github.com/sindresorhus/grunt-eslint
 */
module.exports = function(grunt) {
  grunt.config.set('eslint', {
    target: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.es6'],
    options: {
      maxWarnings: 0
    }
  });
};
