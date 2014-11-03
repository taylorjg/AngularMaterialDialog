/**
 * Created by jonathantaylor on 01/11/2014.
 */
(function () {

    "use strict";

    angular.module("NameListApp")
        .controller(
            "NameListController",
            ["$scope", "NameListPersistenceService", "ItemDialogService", "ConfirmationDialogService", function ($scope, NameListPersistenceService, ItemDialogService, ConfirmationDialogService) {

                NameListPersistenceService.getItems().then(function (items) {
                    $scope.nameListModel = window.nameListApp.models.nameListModel(items);
                });

                $scope.onAddItem = function (event) {
                    ItemDialogService.showAddItemDialog(event).then(function (item) {
                        NameListPersistenceService.saveItems($scope.nameListModel.addItem(item));
                    });
                };

                $scope.onEditItem = function (event, item) {
                    ItemDialogService.showEditItemDialog(event, item).then(function (item) {
                        NameListPersistenceService.saveItems($scope.nameListModel.editItem(item));
                    });
                };

                $scope.onDeleteItem = function (event, item) {
                    var title = "Delete Item";
                    var text = "Are you sure you want to delete item " + item.id + "?";
                    ConfirmationDialogService.showConfirmationDialog(event, title, text).then(function() {
                        NameListPersistenceService.saveItems($scope.nameListModel.deleteItem(item));
                    });
                };
            }]);
}());
