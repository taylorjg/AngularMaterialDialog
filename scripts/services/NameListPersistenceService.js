/**
 * Created by jonathantaylor on 02/11/2014.
 */
(function () {

    "use strict";

    angular.module("NameListApp")
        .service(
            "NameListPersistenceService",
            ["$timeout", "$q", "store", function ($timeout, $q, store) {

                var STORE_KEY_ITEMS = "items";

                var DEFAULT_ITEMS = [
                    {
                        id: 1,
                        firstName: "Chico",
                        lastName: "Marx",
                        email: "chico.marx@gmail.com"
                    },
                    {
                        id: 2,
                        firstName: "Harpo",
                        lastName: "Marx",
                        email: "harpo.marx@gmail.com"
                    },
                    {
                        id: 3,
                        firstName: "Groucho",
                        lastName: "Marx",
                        email: "groucho.marx@gmail.com"
                    },
                    {
                        id: 4,
                        firstName: "Gummo",
                        lastName: "Marx",
                        email: "gummo.marx@gmail.com"
                    },
                    {
                        id: 5,
                        firstName: "Zeppo",
                        lastName: "Marx",
                        email: "zeppo.marx@gmail.com"
                    }
                ];

                this.getItems = function () {
                    var items = store.get(STORE_KEY_ITEMS) || DEFAULT_ITEMS;
                    return $q.when(items);
                };

                this.saveItems = function (items) {
                    var deferred = $q.defer();
                    $timeout(function () {
                        // We do this in a timeout function to allow the digest loop to run
                        // and update the $$hashKey properties of any recently added items.
                        store.set(STORE_KEY_ITEMS, items);
                        deferred.resolve(items);
                    });
                    return deferred.promise;
                };

                this.resetItems = function() {
                    return this.saveItems(DEFAULT_ITEMS);
                };
            }]);
}());
