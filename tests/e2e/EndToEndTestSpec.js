/**
 * Created by taylojo on 05/11/14.
 */
(function() {

    "use strict";

    var NameListPage = require("./PageObjects/NameListPage.js");
    var ItemDialogPage = require("./PageObjects/ItemDialogPage.js");
    var ConfirmationDialogPage = require("./PageObjects/ConfirmationDialogPage.js");

    var _getPersistedItems = function() {
        return browser.executeScript("return JSON.parse(localStorage.getItem('items'))");
    };

    var _setPersistedItems = function(items) {
        var stringifiedItems = JSON.stringify(items);
        browser.driver.executeScript("localStorage.setItem('items', '" + stringifiedItems + "')");
    };

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

        it("test8", function() {
            nameListPage.get();
            nameListPage.addItemBtn.click();
            itemDialogPage.firstName.sendKeys("Karl");
            itemDialogPage.lastName.sendKeys("Marx");
            itemDialogPage.email.sendKeys("karl.marx@gmail.com");
            itemDialogPage.okBtn.click();
            expect(nameListPage.nameListItems.count()).toBe(6);
            var item = nameListPage.nameListItems.get(5);
            expect(nameListPage.getItemElementByBinding(item, "item.id").getText()).toBe("6");
            expect(nameListPage.getItemElementByBinding(item, "item.firstName").getText()).toBe("Karl");
            expect(nameListPage.getItemElementByBinding(item, "item.lastName").getText()).toBe("Marx");
            expect(nameListPage.getItemElementByBinding(item, "item.email").getText()).toBe("karl.marx@gmail.com");
        });

        // There seems to be a timing problem involving this test.
        // This test passes when run in isolation but fails when running all the tests together.
        xit("test9", function() {
            nameListPage.get();
            nameListPage.getDeleteBtnForItemWithIndex(2).click();
            confirmationDialogPage.yesBtn.click();
            expect(nameListPage.nameListItems.count()).toBe(4);
            expect(nameListPage.getItemElementByBinding(nameListPage.nameListItems.get(0), "item.id").getText()).toBe("1");
            expect(nameListPage.getItemElementByBinding(nameListPage.nameListItems.get(1), "item.id").getText()).toBe("2");
            expect(nameListPage.getItemElementByBinding(nameListPage.nameListItems.get(2), "item.id").getText()).toBe("4");
            expect(nameListPage.getItemElementByBinding(nameListPage.nameListItems.get(3), "item.id").getText()).toBe("5");
        });

        it("test10", function() {
            nameListPage.get();
            _setPersistedItems([{ id: 1, firstName: 'f1', lastName: 'l1', email: 'e1'}]);
            browser.refresh();
            expect(nameListPage.nameListItems.count()).toBe(1);
            var item = nameListPage.nameListItems.get(0);
            expect(nameListPage.getItemElementByBinding(item, "item.id").getText()).toBe("1");
            expect(nameListPage.getItemElementByBinding(item, "item.firstName").getText()).toBe("f1");
            expect(nameListPage.getItemElementByBinding(item, "item.lastName").getText()).toBe("l1");
            expect(nameListPage.getItemElementByBinding(item, "item.email").getText()).toBe("e1");
        });

        it("test11", function() {
            nameListPage.get();
            _setPersistedItems([]);
            browser.refresh();
            expect(_getPersistedItems()).toEqual([]);
            nameListPage.addItemBtn.click();
            itemDialogPage.firstName.sendKeys("Karl");
            itemDialogPage.lastName.sendKeys("Marx");
            itemDialogPage.email.sendKeys("karl.marx@gmail.com");
            itemDialogPage.okBtn.click();
            expect(nameListPage.nameListItems.count()).toBe(1);
            var item = nameListPage.nameListItems.get(0);
            expect(nameListPage.getItemElementByBinding(item, "item.id").getText()).toBe("1");
            expect(nameListPage.getItemElementByBinding(item, "item.firstName").getText()).toBe("Karl");
            expect(nameListPage.getItemElementByBinding(item, "item.lastName").getText()).toBe("Marx");
            expect(nameListPage.getItemElementByBinding(item, "item.email").getText()).toBe("karl.marx@gmail.com");
            _getPersistedItems().then(function(items) {
                expect(items.length).toBe(1);
                expect(items[0].id).toBe(1);
                expect(items[0].firstName).toBe("Karl");
                expect(items[0].lastName).toBe("Marx");
                expect(items[0].email).toBe("karl.marx@gmail.com");
            });
        });
    });
}());
