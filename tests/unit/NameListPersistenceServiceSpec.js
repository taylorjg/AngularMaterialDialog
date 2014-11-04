/**
 * Created by taylojo on 04/11/14.
 */
(function() {

    "use strict";

    describe("NameListPersistenceService unit tests", function() {

        var _rootScope;
        var _store;
        var _service;

        beforeEach(angular.mock.module("NameListApp"));

        beforeEach(angular.mock.inject(function($injector) {
            _rootScope = $injector.get("$rootScope");
            _store = $injector.get("store");
            _service = $injector.get("NameListPersistenceService");
        }));

        it("getItems() returns 5 default items when the items do not exist in local storage", function() {

            var actual;

            spyOn(_store, "get").andCallFake(function() {
                return undefined;
            });

            _service.getItems().then(function(items) {
                actual = items;
            });

            _rootScope.$digest();

            expect(actual.length).toBe(5);
            expect(actual[0].lastName).toBe("Marx");
            expect(actual[1].lastName).toBe("Marx");
            expect(actual[2].lastName).toBe("Marx");
            expect(actual[3].lastName).toBe("Marx");
            expect(actual[4].lastName).toBe("Marx");
        });

        it("getItems() returns items from local storage when they exist", function() {

            var actual;

            spyOn(_store, "get").andCallFake(function() {
                return [
                    { id: 99, firstName: "FFF", lastName: "LLL", email: "EEE@gmail.com" }
                ];
            });

            _service.getItems().then(function(items) {
                actual = items;
            });

            _rootScope.$digest();

            expect(actual.length).toBe(1);
            expect(actual[0].id).toBe(99);
            expect(actual[0].firstName).toBe("FFF");
            expect(actual[0].lastName).toBe("LLL");
            expect(actual[0].email).toBe("EEE@gmail.com");
        });
    });
}());
