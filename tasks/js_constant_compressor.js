/*
 * js-constant-compressor
 * https://github.com/marmarosi/js-constant-compressor
 *
 * Copyright (c) 2014 Mármarosi József
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding
  // task creation: http://gruntjs.com/creating-tasks

  var MODE = {
    doNothing: 0,
    compressNamesOnly: 1,
    compressNamesAndValues: 2,
    replaceNamesWithValues: 3
  };

  var nameMapper = [];
  var valueMapper = [];
  var ix = 0;
  var iy = 0;

  grunt.registerMultiTask(
      'js_constant_compressor',
      'Replaces JavaScript constants stored in JSON objects with short names and values.',
      function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      spaSource: 'app.js',
      spaCompressed: 'app.compressed.js'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(fg) {

      // Determine processing mode of the file group.
      var mode;
      switch (fg.mode) {
        case 'compress-names-only':
          mode = MODE.compressNamesOnly;
          break;
        case 'compress-names-and-values':
          mode = MODE.compressNamesAndValues;
          break;
        case 'replace-names-with-values':
          mode = MODE.replaceNamesWithValues;
          break;
        default:
          mode = MODE.doNothing;
          grunt.log.error('Invalid mode for file group: "' + fg.mode + '"');
          grunt.fail.fatal('File groups require a valid mode: compress-names-only | compress-names-and-values | replace-names-with-values');
      }

      var fgOptions = {
        constantObjectName: fg.constantObjectName == undefined ? '_Z' : fg.constantObjectName,
        constantObjectPath: fg.constantObjectPath == undefined ? 'compressed.ja' : fg.constantObjectPath,
        mode: mode
      };

      var constantText = '';

      // Process specified files.
      var src = fg.src.filter(function(filepath) {

        // Warn on and remove invalid source files (if no null was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }

      }).map(function(filepath) {

        grunt.log.writeln('Processing file ' + filepath);

        // Read source file.
        var VALUE = {};
        var contents = grunt.file.read(filepath);
        var pos1 = contents.indexOf('var ');
        var pos2 = contents.indexOf('=', pos1 + 4);
        var NAME = contents.slice(pos1 + 4, pos2).trim() + '.';

        // Process constant object.
        eval('VALUE ' + contents.substr(pos2));
        if (typeof VALUE === 'object') {
          constantText += readConstants(VALUE, 0, NAME, nameMapper, valueMapper, fgOptions);
        } else {
          grunt.log.error('Source file ' + filepath + ' must contain an object.');
        }

        return '';
      }).join(grunt.util.normalizelf(', '));

      // Write the source file of the new constant object.
      if (fgOptions.mode === MODE.compressNamesOnly) {
        constantText =
          'var ' + fgOptions.constantObjectName + ' = {\n' +
          constantText.slice(0, -2) +
          '\n};\n';
        grunt.file.write(fgOptions.constantObjectPath, constantText);
        grunt.log.writeln('Constant object has been written into ' + fgOptions.constantObjectPath);
      }

    });

    // Check if SPA source exists.
    if (!grunt.file.exists(options.spaSource)) {
      grunt.log.warn('SPA source file "' + options.spaSource + '" not found.');
    } else {

      // Sort mappers by values in reverse order.
      valueMapper.sort(function (a, b) {
        if (a.name > b.name) { return -1; }
        if (a.name < b.name) { return 1; }
        return 0; // a must be equal to b
      });
      nameMapper.sort(function (a, b) {
        if (a.name > b.name) { return -1; }
        if (a.name < b.name) { return 1; }
        return 0; // a must be equal to b
      });

      // Read SPA source file.
      var spaSource = grunt.file.read(options.spaSource);

      // Replace constant values.
      valueMapper.forEach(function(vElement) {
        var re = new RegExp(escapeRegExp('\'' + vElement.name + '\''), 'g');
        spaSource = spaSource.replace(re, '\'' + vElement.value + '\'');
      });

      // Replace constant names.
      nameMapper.forEach(function(nElement) {
        var re = new RegExp(escapeRegExp(nElement.name), 'g');
        spaSource = spaSource.replace(re, nElement.value);
      });

      // Write the compressed SPA source file.
      grunt.file.write(options.spaCompressed, spaSource);
      grunt.log.writeln('SPA compressed source has been written into ' + options.spaCompressed);
      grunt.log.writeln('Count of mapped values: ' + iy);
      grunt.log.writeln('Count of mapped names: ' + ix);
    }

    function readConstants (obj, level, parentName, nameMapper, valueMapper, fgOptions) {
      var constantText = '';
      var newName = '';

      for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
          var value = obj[property];
          if (typeof value === 'string') {
            var newName = generateName(ix);
            switch (fgOptions.mode) {
              case MODE.compressNamesOnly:
                newName = generateName(ix);
                constantText += '    ' + newName + ': \'' + value + '\',\n';
                nameMapper.push({
                  name: parentName + property,
                  value: fgOptions.constantObjectName + '.' + newName
                });
                ix++;
                break;
              case MODE.compressNamesAndValues:
                newName = generateName(ix);
                valueMapper.push({ name: value, value: newName });
                nameMapper.push({
                  name: parentName + property,
                  value: '\'' + newName + '\''
                });
                iy++;
                ix++;
                break;
              case MODE.replaceNamesWithValues:
                nameMapper.push({
                  name: parentName + property,
                  value: '\'' + value + '\''
                });
                ix++;
                break;
              default:
            }
          }
          if (typeof value === 'number') {
            switch (fgOptions.mode) {
              case MODE.compressNamesOnly:
                newName = generateName(ix);
                constantText += '    ' + newName + ': ' + value + ',\n';
                nameMapper.push({
                  name: parentName + property,
                  value: fgOptions.constantObjectName + '.' + newName
                });
                ix++;
                break;
              case MODE.replaceNamesWithValues:
                nameMapper.push({
                  name: parentName + property,
                  value: value
                });
                ix++;
                break;
              default:
            }
          }
          if (typeof value === 'object') {
            constantText += readConstants(
              value,
              level + 1,
              parentName + property + '.',
              nameMapper,
              valueMapper,
              fgOptions
            );
          }
        }
      }
      return constantText;
    }

    function generateName(ix) {
      var chars = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      var name = '';
      var i = 0, j = ix + 1, divisor = chars.length - 10;
      do {
        i = j % divisor;
        j = (j - i) / divisor;
        name = chars[i] + name;
        divisor = chars.length;
      } while (j > 0);
      return name;
    }

    function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

  });

};
