/**
 * Created by jonathantaylor on 01/11/2014.
 */
(function () {

    "use strict";

    angular.module("NameListApp")
        .controller(
            "NameListController",
            ["$scope", "$mdToast", "NameListPersistenceService", "ItemDialogService", "ConfirmationDialogService", "NotificationService", function ($scope, $mdToast, NameListPersistenceService, ItemDialogService, ConfirmationDialogService, NotificationService) {

                NameListPersistenceService.getItems().then(function (items) {
                    $scope.nameListModel = window.nameListApp.models.nameListModel(items);
                });

                $scope.onAddItem = function (event) {
                    ItemDialogService.showAddItemDialog(event).then(function (item) {
                        NameListPersistenceService.saveItems($scope.nameListModel.addItem(item));
                    });
                };

                $scope.onEditItem = function (event, item) {
                    ItemDialogService.showEditItemDialog(event, item).then(function (updatedItem) {
                        NameListPersistenceService.saveItems($scope.nameListModel.editItem(updatedItem));
                    });
                };

                $scope.onDeleteItem = function (event, item) {
                    var title = "Delete Item " + item.id;
                    var text = "Are you sure you want to delete item " + item.id + "?";
                    ConfirmationDialogService.showConfirmationDialog(event, title, text).then(function() {
                        NameListPersistenceService.saveItems($scope.nameListModel.deleteItem(item)).then(function() {
                            NotificationService.showDeletedItemNotification(item);
                        });
                    });
                };
            }]);
}());
