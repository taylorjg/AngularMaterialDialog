/**
 * Created by jonathantaylor on 01/11/2014.
 */
(function () {

    "use strict";

    angular.module("NameListApp")
        .controller(
            "NameListController",
            ["$scope", "$mdDialog", "NameListPersistenceService", function ($scope, $mdDialog, NameListPersistenceService) {

                NameListPersistenceService.getItems().then(function(items) {
                    $scope.nameListModel = window.nameListApp.models.nameListModel(items);
                });

                $scope.onAddItem = function (event) {
                    $mdDialog.show({
                        targetEvent: event,
                        templateUrl: "templates/itemDialog.html",
                        controller: "ItemDialogController",
                        locals: { item: null }
                    }).then(
                        function success(item) {
                            $scope.nameListModel.addItem(item);
                            NameListPersistenceService.saveItems($scope.nameListModel.items);
                        }
                    );
                };

                $scope.onEditItem = function (event, item) {
                    $mdDialog.show({
                        targetEvent: event,
                        templateUrl: "templates/itemDialog.html",
                        controller: "ItemDialogController",
                        locals: { item: item }
                    }).then(
                        function success(item) {
                            $scope.nameListModel.replaceItem(item);
                            NameListPersistenceService.saveItems($scope.nameListModel.items);
                        }
                    );
                };

                $scope.onDeleteItem = function (ev, item) {
                    // TODO: display a confirmation dialog...
                    $scope.nameListModel.removeItem(item);
                    NameListPersistenceService.saveItems($scope.nameListModel.items);
                };
            }]);
}());
