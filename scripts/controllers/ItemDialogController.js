/**
 * Created by jonathantaylor on 01/11/2014.
 */
(function () {

    "use strict";

    angular.module("NameListApp")
        .controller(
            "ItemDialogController",
            ["$scope", "$interpolate", "$mdDialog", "item", function ($scope, $interpolate, $mdDialog, item) {

                $scope.itemDialogModel = window.nameListApp.models.itemDialogModel(item);

                $scope.onOk = function () {
                    $mdDialog.hide($scope.itemDialogModel.item);
                };

                $scope.onCancel = function () {
                    $mdDialog.cancel();
                };
            }]);
}());
