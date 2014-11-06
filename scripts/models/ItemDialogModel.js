/**
 * Created by jonathantaylor on 01/11/2014.
 */
(function () {

    "use strict";

    window.nameListApp = window.nameListApp || {};
    window.nameListApp.models = window.nameListApp.models || {};

    window.nameListApp.models.itemDialogModel = function (item) {
        return {
            item: item || {},
            dialogTitle: item ? "Edit Item " + item.id : "Add Item"
        };
    };
}());
