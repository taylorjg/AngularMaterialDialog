/**
 * Created by taylojo on 05/11/14.
 */
(function() {

    "use strict";

    describe("ItemDialogModel unit tests", function() {

        it("is initialised correctly when item is null", function() {
            var model = window.nameListApp.models.itemDialogModel(null);
            expect(model.item).toEqual({});
            expect(model.dialogTitle).toBe("Add Item");
        });

        it("is initialised correctly when item is not null", function() {
            var item = {id: 3, firstName: "f3", lastName: "l3", email: "e3"};
            var model = window.nameListApp.models.itemDialogModel(item);
            expect(model.item).toBe(item);
            expect(model.dialogTitle).toBe("Edit Item 3");
        });
    });
}());
