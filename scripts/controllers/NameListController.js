/**
 * Created by jonathantaylor on 01/11/2014.
 */
(function () {

    "use strict";

    angular.module("NameListApp")
        .controller(
            "NameListController",
            ["$scope", "NameListPersistenceService", "ItemDialogService", function ($scope, NameListPersistenceService, ItemDialogService) {

                NameListPersistenceService.getItems().then(function (items) {
                    $scope.nameListModel = window.nameListApp.models.nameListModel(items);
                });

                $scope.onAddItem = function (event) {
                    ItemDialogService.addItem(event).then(function success(item) {
                        NameListPersistenceService.saveItems($scope.nameListModel.addItem(item));
                    });
                };

                $scope.onEditItem = function (event, item) {
                    ItemDialogService.editItem(event, item).then(
                        function success(item) {
                            NameListPersistenceService.saveItems($scope.nameListModel.replaceItem(item));
                        }
                    );
                };

                $scope.onDeleteItem = function (ev, item) {
                    // TODO: display a confirmation dialog...
                    NameListPersistenceService.saveItems($scope.nameListModel.removeItem(item));
                };
            }]);
}());
