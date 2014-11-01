/**
 * Created by jonathantaylor on 01/11/2014.
 */
(function () {

    "use strict";

    angular.module("NameListApp")
        .controller(
            "NameListController",
            ["$scope", "$timeout", "$mdDialog", "store", function ($scope, $timeout, $mdDialog, store) {

                var defaultItems = [
                    {
                        id: 1,
                        firstName: "firstname1",
                        lastName: "lastname1",
                        email: "firstname1.lastname1@gmail.com"
                    },
                    {
                        id: 2,
                        firstName: "firstname2",
                        lastName: "lastname2",
                        email: "firstname2.lastname2@gmail.com"
                    }
                ];

                var calculateInitialValueOfNextId = function (items) {
                    var highestId = 0;
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].id > highestId) {
                            highestId = items[i].id;
                        }
                    }
                    return highestId + 1;
                };

                var save = function () {
                    $timeout(function () {
                        store.set("items", $scope.items);
                    });
                };

                $scope.items = store.get("items") || defaultItems;
                $scope.nextId = calculateInitialValueOfNextId($scope.items);

                $scope.onAddItem = function (event) {
                    $mdDialog.show({
                        targetEvent: event,
                        templateUrl: "templates/itemDialog.html",
                        controller: "ItemDialogController",
                        locals: { item: null }
                    }).then(
                        function success(item) {
                            item.id = $scope.nextId++;
                            $scope.items.push(item);
                            save();
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
                            for (var i = 0; i < $scope.items.length; i++) {
                                if ($scope.items[i].id === item.id) {
                                    $scope.items.splice(i, 1, item);
                                    break;
                                }
                            }
                            save();
                        }
                    );
                };

                $scope.onDeleteItem = function (ev, item) {
                    // TODO: display a confirmation dialog...
                    for (var i = 0; i < $scope.items.length; i++) {
                        if ($scope.items[i].id === item.id) {
                            $scope.items.splice(i, 1);
                            break;
                        }
                    }
                    save();
                };
            }]);
}());
