/**
 * Created by jonathantaylor on 05/11/2014.
 */
(function() {

    "use strict";

    var ItemDialogPage = function() {
        this.dialog = function() {
            return $("#itemDialog");
        }
        this.dialogTitle = function() {
            return element(by.model("itemDialogModel.title"));
        }
        this.firstName = function() {
            return element(by.model("itemDialogModel.item.firstName")).$("input");
        }
        this.lastName = function() {
            return element(by.model("itemDialogModel.item.lastName")).$("input");
        }
        this.email = function() {
            return element(by.model("itemDialogModel.item.email")).$("input");
        }
        this.okBtn = function() {
            return $("#okBtn");
        }
        this.cancelBtn = function() {
            return $("#cancelBtn");
        }
    };

    module.exports = ItemDialogPage;
}());
