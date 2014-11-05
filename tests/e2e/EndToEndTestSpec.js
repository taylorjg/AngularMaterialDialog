/**
 * Created by taylojo on 05/11/14.
 */
(function() {

    "use strict";

    var NameListPage = require("./PageObjects/NameListPage.js");

    describe("NameListApp end-to-end tests", function() {

        var nameListPage = new NameListPage();

        it("test1", function() {
            nameListPage.get(1);
            expect(nameListPage.nameListItems.count()).toBe(5);
        });

        it("test2", function() {
            nameListPage.get(1);
            var item = nameListPage.nameListItems.get(2);
            expect(nameListPage.getItemElementByBinding(item, "item.id").getText()).toBe("3");
            expect(nameListPage.getItemElementByBinding(item, "item.firstName").getText()).toBe("Groucho");
            expect(nameListPage.getItemElementByBinding(item, "item.lastName").getText()).toBe("Marx");
            expect(nameListPage.getItemElementByBinding(item, "item.email").getText()).toBe("groucho.marx@gmail.com");
        });

        it("test3", function() {
            nameListPage.get(1);
            nameListPage.addItemBtn.click();
            expect(element(by.css("#itemDialog")).isDisplayed()).toBe(true);
        });

        it("test4", function() {
            nameListPage.get(1);
            nameListPage.resetBtn.click();
            expect(element(by.css("#confirmationDialog")).isDisplayed()).toBe(true);
        });

        it("test5", function() {
            nameListPage.get(1);
            nameListPage.getEditBtnForItemIndex(2).click();
            expect(element(by.css("#itemDialog")).isDisplayed()).toBe(true);
        });

        it("test6", function() {
            nameListPage.get(1);
            nameListPage.getDeleteBtnForItemIndex(2).click();
            expect(element(by.css("#confirmationDialog")).isDisplayed()).toBe(true);
        });
    });
}());
