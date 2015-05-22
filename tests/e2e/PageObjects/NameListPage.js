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
        this.nameListItems = function() {
            return element.all(by.repeater("item in nameListModel.items"));
        }
        this.addItemBtn = function() {
            return $("#addItemBtn");
        }
        this.resetBtn = function() {
            return $("#resetBtn");
        }
        this.getItemElementByBinding = function(item, binding) {
            return item.element(by.binding(binding));
        };
        this.getEditBtnForItemWithIndex = function (itemIndex) {
            return this.nameListItems().get(itemIndex).$(".editBtn");
        };
        this.getDeleteBtnForItemWithIndex = function (itemIndex) {
            return this.nameListItems().get(itemIndex).$(".deleteBtn");
        };
    };

    module.exports = NameListPage;
}());
