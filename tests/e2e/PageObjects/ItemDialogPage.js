/**
 * Created by jonathantaylor on 05/11/2014.
 */
(function() {

    "use strict";

    var ItemDialogPage = function() {
        this.dialog = element(by.id("itemDialog"));
        this.dialogTitle = element(by.model("itemDialogModel.title"));
        this.firstName = element(by.model("itemDialogModel.item.firstName")).element(by.css("input"));
        this.lastName = element(by.model("itemDialogModel.item.lastName")).element(by.css("input"));
        this.email = element(by.model("itemDialogModel.item.email")).element(by.css("input"));
        this.okBtn = element(by.id("okBtn"));
        this.cancelBtn = element(by.id("cancelBtn"));
    };

    module.exports = ItemDialogPage;
}());
