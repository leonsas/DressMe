/*global module*/
module.exports = function (grunt) {
  'use strict';
 
  var gruntConfig = {};
  grunt.loadNpmTasks('grunt-contrib-jshint');
  gruntConfig.jshint = {
      options: { bitwise: true, camelcase: true, curly: true, eqeqeq: true, forin: true, immed: true,
          indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, plusplus: true,
          quotmark: true, regexp: true, undef: true, unused: true, strict: true, trailing: true,
          maxparams: 3, maxdepth: 2, maxstatements: 50},
      all: [
          'Gruntfile.js',
          'assets/js/*.js'
      ]
  };
  grunt.registerTask('travis', 'jshint'); 
  
  
  grunt.loadNpmTasks('grunt-contrib-qunit');
    gruntConfig.qunit = {
    src: ['/tests/tests.html'],
         options: {
            urls: [
              'http://localhost:8000/tests/tests.html',
            ]}
    };
    grunt.registerTask('test', 'qunit:src');
    
  grunt.initConfig(gruntConfig);
   
};