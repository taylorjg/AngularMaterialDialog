(function () {
    
    "use strict";

    module.exports.config = {
        specs: [
          "EndToEndTestSpec.js"
        ],
        baseUrl: "http://localhost:63342",
        framework: "jasmine",
        jasmineNodeOpts: {
            onComplete: null,
            isVerbose: true,
            showColors: true,
            includeStackTrace: true,
            defaultTimeoutInterval: 60000
        }
    };
}());
