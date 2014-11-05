/**
 * Created by taylojo on 05/11/14.
 */
(function() {

    "use strict";

    var _baseUrl = "http://localhost:63342/AngularMaterialDialog/index.html";

    var _urlWithTestIdentifier = function (testIdentifier) {
        return _baseUrl + "?e2etest=" + testIdentifier;
    };

    var NameListPage = function() {
        this.get = function (testIdentifier) {
            browser.get(_urlWithTestIdentifier(testIdentifier));
        };
        this.nameListItems = element.all(by.repeater("item in nameListModel.items"));
        this.addItemBtn = element(by.id("addItemBtn"));
        this.resetBtn = element(by.id("resetBtn"));
        this.getItemElementByBinding = function(item, binding) {
            return item.element(by.binding(binding));
        };
        this.getEditBtnForItemIndex = function (itemIndex) {
            return this.nameListItems.get(itemIndex).element(by.css(".editBtn"));
        };
        this.getDeleteBtnForItemIndex = function (itemIndex) {
            return this.nameListItems.get(itemIndex).element(by.css(".deleteBtn"));
        };
    };

    module.exports = NameListPage;
}());
