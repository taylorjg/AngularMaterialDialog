/**
 * Created by jonathantaylor on 04/11/2014.
 */
(function() {

    "use strict";

    describe("NameListModel unit tests", function() {

        var _items;
        var _model;

        beforeEach(function() {
            _items = [
                {id: 1, firstName: "f1", lastName: "l1", email: "e1"},
                {id: 2, firstName: "f2", lastName: "l2", email: "e2"}
            ];
            _model = window.nameListApp.models.nameListModel(_items);
        });

        it("can create a model with an initial list of items", function() {
            expect(_model.items).toBe(_items);
        });

        it("can add an item", function() {
            _model.addItem({firstName: "f3", lastName: "l3", email: "e3"});
            expect(_model.items).toBe(_items);
            expect(_model.items.length).toBe(3);
            expect(_model.items[2].id).toBe(3);
            expect(_model.items[2].firstName).toBe("f3");
            expect(_model.items[2].lastName).toBe("l3");
            expect(_model.items[2].email).toBe("e3");
        });

        it("can delete an item", function() {
            _model.deleteItem(_items[0]);
            expect(_model.items).toBe(_items);
            expect(_model.items.length).toBe(1);
            expect(_model.items[0].id).toBe(2);
            expect(_model.items[0].firstName).toBe("f2");
            expect(_model.items[0].lastName).toBe("l2");
            expect(_model.items[0].email).toBe("e2");
        });

        it("can edit an item", function() {
            _model.editItem({id: 1, firstName: "f1-new", lastName: "l1-new", email: "e1-new"});
            expect(_model.items).toBe(_items);
            expect(_model.items.length).toBe(2);
            expect(_model.items[0].id).toBe(1);
            expect(_model.items[0].firstName).toBe("f1-new");
            expect(_model.items[0].lastName).toBe("l1-new");
            expect(_model.items[0].email).toBe("e1-new");
            expect(_model.items[1].id).toBe(2);
            expect(_model.items[1].firstName).toBe("f2");
            expect(_model.items[1].lastName).toBe("l2");
            expect(_model.items[1].email).toBe("e2");
        });

        it("can reset the list of items", function() {
            _model.resetItems([
                {id: 3, firstName: "f3", lastName: "l3", email: "e3"}
            ]);
            expect(_model.items).toBe(_items);
            expect(_model.items.length).toBe(1);
            expect(_model.items[0].id).toBe(3);
            expect(_model.items[0].firstName).toBe("f3");
            expect(_model.items[0].lastName).toBe("l3");
            expect(_model.items[0].email).toBe("e3");
        });
    });
}());
