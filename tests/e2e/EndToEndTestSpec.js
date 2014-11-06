/**
 * Created by taylojo on 05/11/14.
 */
(function() {

    "use strict";

    var NameListPage = require("./PageObjects/NameListPage.js");
    var ItemDialogPage = require("./PageObjects/ItemDialogPage.js");
    var ConfirmationDialogPage = require("./PageObjects/ConfirmationDialogPage.js");

    describe("NameListApp end-to-end tests", function() {

        var nameListPage = new NameListPage();
        var itemDialogPage = new ItemDialogPage();
        var confirmationDialogPage = new ConfirmationDialogPage();

        it("test1", function() {
            nameListPage.get();
            expect(nameListPage.nameListItems.count()).toBe(5);
        });

        it("test2", function() {
            nameListPage.get();
            var item = nameListPage.nameListItems.get(2);
            expect(nameListPage.getItemElementByBinding(item, "item.id").getText()).toBe("3");
            expect(nameListPage.getItemElementByBinding(item, "item.firstName").getText()).toBe("Groucho");
            expect(nameListPage.getItemElementByBinding(item, "item.lastName").getText()).toBe("Marx");
            expect(nameListPage.getItemElementByBinding(item, "item.email").getText()).toBe("groucho.marx@gmail.com");
        });

        it("test3", function() {
            nameListPage.get();
            nameListPage.addItemBtn.click();
            expect(itemDialogPage.dialog.isDisplayed()).toBe(true);
        });

        it("test4", function() {
            nameListPage.get();
            nameListPage.resetBtn.click();
            expect(confirmationDialogPage.dialog.isDisplayed()).toBe(true);
        });

        it("test5", function() {
            nameListPage.get();
            nameListPage.getEditBtnForItemWithIndex(2).click();
            expect(itemDialogPage.dialog.isDisplayed()).toBe(true);
        });

        it("test6", function() {
            nameListPage.get();
            nameListPage.getDeleteBtnForItemWithIndex(2).click();
            expect(confirmationDialogPage.dialog.isDisplayed()).toBe(true);
        });

        it("test7", function() {
            nameListPage.get();
            nameListPage.getEditBtnForItemWithIndex(2).click();
            expect(itemDialogPage.firstName.getAttribute("value")).toBe("Groucho");
            expect(itemDialogPage.lastName.getAttribute("value")).toBe("Marx");
            expect(itemDialogPage.email.getAttribute("value")).toBe("groucho.marx@gmail.com");
        });
    });
}());
