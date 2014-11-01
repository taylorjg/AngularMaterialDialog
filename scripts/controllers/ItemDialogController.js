/**
 * Created by jonathantaylor on 01/11/2014.
 */
(function() {

    "use strict";

    angular.module("NameListApp")
        .controller(
            "ItemDialogController",
            ["$scope", "$interpolate", "$mdDialog", "item", function ($scope, $interpolate, $mdDialog, item) {

                $scope.item = item || {};

                if (item) {
                    $scope.title = $interpolate("Edit Item {{id}}")({id: item.id});
                }
                else {
                    $scope.title = "Add Item";
                }

                $scope.onCancel = function() {
                    $mdDialog.cancel();
                };

                $scope.onOk = function() {
                    $mdDialog.hide($scope.item);
                };
            }]);
}());
