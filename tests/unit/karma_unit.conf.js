(function() {

    "use strict";

    module.exports = function(config) {
        config.set({
            basePath: "../..",
            frameworks: ["jasmine"],
            files: [
                "bower_components/angular/angular.js",
                "bower_components/angular-aria/angular-aria.js",
                "bower_components/angular-animate/angular-animate.js",
                "bower_components/hammerjs/hammer.js",
                "bower_components/angular-material/angular-material.js",
                "bower_components/a0-angular-storage/dist/angular-storage.js",
                "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-mocks.js",
                "scripts/**/*.js",
                "tests/unit/*Spec.js"
            ],
            exclude: [],
            reporters: ["progress"],
            port: 9876,
            colors: true,
            logLevel: config.LOG_INFO,
            autoWatch: false,
            browsers: ["Chrome"],
            captureTimeout: 60000,
            singleRun: true
        });
    };
}());
