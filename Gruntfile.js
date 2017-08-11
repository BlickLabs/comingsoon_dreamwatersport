/*jslint node: true */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      options: {
        use : [
          function () {
            return require('autoprefixer-stylus')('last 2 versions', 'ie 8');
          }
        ]
      },
      compile: {
        files: {
          'css/style.css': 'styl/style.styl'
        }
      }
    },
		watch: {
      styl: {
        files: ['styl/style.styl'],
        tasks: ['stylus']
			}
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.registerTask('default', ['stylus', 'watch']);
};