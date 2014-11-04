/**
 * Created by jonathantaylor on 04/11/2014.
 */
(function() {

    "use strict";

    describe("NameListModel unit tests", function() {

        it("can create a model with an empty list of initial items", function() {
            var model = window.nameListApp.models.nameListModel([]);
            expect(model.items).toEqual([]);
        });

        it("can create a model with an non-empty list of initial items", function() {
            var model = window.nameListApp.models.nameListModel([
                {id: 1, firstName: "f1", lastName: "l1", email: "e1"},
                {id: 2, firstName: "f2", lastName: "l2", email: "e2"}
            ]);
            expect(model.items.length).toBe(2);
            expect(model.items[0].id).toBe(1);
            expect(model.items[1].id).toBe(2);
        });

        it("can add an item", function() {
            var model = window.nameListApp.models.nameListModel([
                {id: 1, firstName: "f1", lastName: "l1", email: "e1"},
                {id: 2, firstName: "f2", lastName: "l2", email: "e2"}
            ]);
            model.addItem({firstName: "", lastName: "", email: ""});
            expect(model.items.length).toBe(3);
            expect(model.items[2].id).toBe(3);
        });

        it("can delete an item", function() {
            var model = window.nameListApp.models.nameListModel([
                {id: 1, firstName: "f1", lastName: "l1", email: "e1"},
                {id: 2, firstName: "f2", lastName: "l2", email: "e2"}
            ]);
            model.deleteItem(model.items[0]);
            expect(model.items.length).toBe(1);
            expect(model.items[0].id).toBe(2);
        });

        it("can edit an item", function() {
            var model = window.nameListApp.models.nameListModel([
                {id: 1, firstName: "f1", lastName: "l1", email: "e1"},
                {id: 2, firstName: "f2", lastName: "l2", email: "e2"}
            ]);
            model.editItem({id: 1, firstName: "f1-new", lastName: "l1-new", email: "e1-new"});
            expect(model.items.length).toBe(2);
            expect(model.items[0].id).toBe(1);
            expect(model.items[0].firstName).toBe("f1-new");
            expect(model.items[0].lastName).toBe("l1-new");
            expect(model.items[0].email).toBe("e1-new");
            expect(model.items[1].id).toBe(2);
            expect(model.items[1].firstName).toBe("f2");
            expect(model.items[1].lastName).toBe("l2");
            expect(model.items[1].email).toBe("e2");
        });

        it("can reset the list of items", function() {
            var model = window.nameListApp.models.nameListModel([
                {id: 1, firstName: "f1", lastName: "l1", email: "e1"},
                {id: 2, firstName: "f2", lastName: "l2", email: "e2"}
            ]);
            model.resetItems([
                {id: 3, firstName: "f3", lastName: "l3", email: "e3"}
            ]);
            expect(model.items.length).toBe(1);
            expect(model.items[0].id).toBe(3);
        });
    });
}());
