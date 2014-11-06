(function () {
    
    "use strict";

    module.exports.config = {
        seleniumServerJar: null,
        seleniumPort: null,
        chromeOnly: false,
        seleniumArgs: [],
        sauceUser: null,
        sauceKey: null,
        seleniumAddress: null,
        allScriptsTimeout: 11000,
        specs: [
          "EndToEndTestSpec.js"
        ],
        exclude: [],
        suites: {},
        capabilities: {
            "browserName": "chrome",
            "chromeOptions": {}
        },
        multiCapabilities: [],
        baseUrl: "http://localhost:" + (process.env.HTTP_PORT || "8000"),
        rootElement: "body",
        params: {
            login: {
                user: "Jane",
                password: "1234"
            }
        },
        framework: "jasmine",
        jasmineNodeOpts: {
            onComplete: null,
            isVerbose: true,
            showColors: true,
            includeStackTrace: true,
            defaultTimeoutInterval: 60000
        },
        onPrepare: function () {
//            var disableNgAnimate = function () {
//                angular.module("disableNgAnimate", []).run(function ($animate) {
//                    console.log("$animate.enabled(false)");
//                    $animate.enabled(false);
//                });
//            };
//            browser.addMockModule("disableNgAnimate", disableNgAnimate);
        }
    };
}());
