module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt); // Dependency

    require('time-grunt')(grunt); // Measures the time each task takes to run
    grunt.initConfig();

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/src/',
                    src: ['**/*.{png,jpg,jpeg,gif,ico,svg}'],
                    dest: 'images/dest/'
                }]
            }
        }
    });

    // Load plugins and register default task
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
};
