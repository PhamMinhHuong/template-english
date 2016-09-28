'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var serverStatic = require('serve-static');

  // Configurable paths for the application
  var appConfig = {
    app: './'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    appConfig: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= appConfig.app %>/js/**/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      styles: {
        files: ['<%= appConfig.app %>/sass/{,*/}*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= appConfig.app %>/{,*/}*.html',
          '<%= appConfig.app %>/css/{,*/}*.css',
          '<%= appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 8886,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35727
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              serverStatic(appConfig.app)
            ];
          }
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= appConfig.app %>/js/{,*/}*.js'
        ]
      }
    },

    // compile sass files
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/sass',
          src: ['*.scss'],
          dest: '<%= appConfig.app %>/css',
          ext: '.css'
        }]
      }
    },

    validation: {
      files: {
          src: ['<%= appConfig.app %>/*.html']
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ["last 10 version"],
        map: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/css/',
          src: '{,*/}*.css',
          dest: '<%= appConfig.app %>/css/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-w3c-html-validation');

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {

    grunt.task.run([
      'sass',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);

  });

  grunt.registerTask('build', 'Compile then start a connect web server', function (target) {
    grunt.task.run([
      'sass'
    ]);
  });

  grunt.registerTask('test', 'Compile then start a connect web server', function (target) {
    grunt.task.run([
      'validation',
      'jshint'
    ]);
  });

};
