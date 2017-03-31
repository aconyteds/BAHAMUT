module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    uglify: {
      dist: {
        src: ['src/vendor/*.js'],
        dest: "build/vendor.min.js"
      }
    },
    sass: {
      options: {
        style: "expanded",
        lineNumbers: true
      },
      dist: {
        files: { 'src/app/css/main.css': 'src/app/scss/main.scss' }
      }
    },
    watch: {
      scripts: {
        files: ['assets/js/**/*.js', '!assets/js/vendor.min.js'],
        tasks: ['uglify'],
        options: {
            spawn: false,
        },
      },
      css: {
        files: ['assets/styles/**/*.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
      }
    }
  });

  grunt.registerTask('default', ['uglify', 'sass']);
};
