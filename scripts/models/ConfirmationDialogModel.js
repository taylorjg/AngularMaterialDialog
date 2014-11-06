/**
 * Created by taylojo on 03/11/14.
 */
(function() {

    "use strict";

    window.nameListApp = window.nameListApp || {};
    window.nameListApp.models = window.nameListApp.models || {};

    window.nameListApp.models.confirmationDialogModel = function (title, text) {
        return {
            title: title,
            text: text
        };
    };
}());
