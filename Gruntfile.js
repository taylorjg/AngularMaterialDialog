/* global module */

module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({

        jshint: {
            options: grunt.file.readJSON(".jshintrc"),
            files: [
                "Gruntfile.js",
                "scripts/**/*.js",
                "tests/**/*.js"
            ]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.registerTask("default", ["jshint"]);
};
