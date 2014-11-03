/**
 * Created by jonathantaylor on 02/11/2014.
 */
(function () {

    "use strict";

    angular.module("NameListApp")
        .service(
            "ConfirmationDialogService",
            ["$mdDialog", function ($mdDialog) {

                this.showConfirmationDialog = function (event, title, text) {
                    return $mdDialog.show({
                        targetEvent: event,
                        templateUrl: "templates/confirmationDialog.html",
                        controller: "ConfirmationDialogController",
                        locals: {
                            title: title,
                            text: text
                        }
                    });
                };
            }]
        );
}());
