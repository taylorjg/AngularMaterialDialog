/**
 * Created by jonathantaylor on 02/11/2014.
 */
(function() {

    "use strict";

    angular.module("NameListApp")
        .service(
            "ItemDialogService",
            ["$mdDialog", function($mdDialog) {

                var _show = function(event, item) {
                    return $mdDialog.show({
                        targetEvent: event,
                        templateUrl: "templates/itemDialog.html",
                        controller: "ItemDialogController",
                        locals: {
                            item: item
                        }
                    });
                };

                this.addItem = function(event) {
                    return _show(event, null);
                };

                this.editItem = function(event, item) {
                    return _show(event, item);
                };
            }]
        );
}());
