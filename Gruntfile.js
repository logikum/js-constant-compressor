/*
 * js-constant-compressor
 * https://github.com/marmarosi/js-constant-compressor
 *
 * Copyright (c) 2014 Mármarosi József
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    js_const_min: {
      work: {
        options: {
          spaSource: [
            'build/app.js'
          ],
          spaCompressed: [
            'build/app.compressed.js'
          ]
        },
        files: [
          {
            src: [
              'source/MODULES.js',
              'source/URLS.js'
            ],
            mode: 'compress-names-only',
            constantObjectName: 'C',
            constantObjectPath: 'source/compressed.js'
          },
          {
            src: [
              'source/CONTROLLERS.js',
              'source/VIEWS.js'
            ],
            mode: 'compress-names-and-values'
          },
          {
            src: [
              'source/IMG__REF_TYPE.js'
            ],
            mode: 'replace-names-with-values'
          }
        ]
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, run all test.
  grunt.registerTask('default', ['js_const_min']);
};
