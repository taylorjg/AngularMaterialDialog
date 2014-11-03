/**
 * Created by jonathantaylor on 01/11/2014.
 */
(function () {

    "use strict";

    angular.module("NameListApp")
        .controller(
            "ConfirmationDialogController",
            ["$scope", "$mdDialog", "title", "text", function ($scope, $mdDialog, title, text) {

                $scope.confirmationDialogModel = window.nameListApp.models.confirmationDialogModel(title, text);

                $scope.onYes = function () {
                    $mdDialog.hide();
                };

                $scope.onNo = function () {
                    $mdDialog.cancel();
                };
            }]);
}());
