/**
 * Created by taylojo on 05/11/14.
 */
(function() {

    "use strict";

    var BASE_URL = "http://localhost:63342/AngularMaterialDialog/index.html";

    var NameListPage = function() {
        this.get = function () {
            browser.get(BASE_URL);
        };
        this.nameListItems = element.all(by.repeater("item in nameListModel.items"));
        this.addItemBtn = element(by.id("addItemBtn"));
        this.resetBtn = element(by.id("resetBtn"));
        this.getItemElementByBinding = function(item, binding) {
            return item.element(by.binding(binding));
        };
        this.getEditBtnForItemWithIndex = function (itemIndex) {
            return this.nameListItems.get(itemIndex).element(by.css(".editBtn"));
        };
        this.getDeleteBtnForItemWithIndex = function (itemIndex) {
            return this.nameListItems.get(itemIndex).element(by.css(".deleteBtn"));
        };
    };

    module.exports = NameListPage;
}());
