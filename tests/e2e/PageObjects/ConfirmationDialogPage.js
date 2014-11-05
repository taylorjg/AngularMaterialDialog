/**
 * Created by jonathantaylor on 05/11/2014.
 */
(function() {

    "use strict";

    var ConfirmationDialogPage = function() {
        this.dialog = element(by.id("confirmationDialog"));
        this.yesBtn = element(by.id("yesBtn"));
        this.noBtn = element(by.id("noBtn"));
    };

    module.exports = ConfirmationDialogPage;
}());
