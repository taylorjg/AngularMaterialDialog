/**
 * Created by jonathantaylor on 05/11/2014.
 */
(function() {

    "use strict";

    var ConfirmationDialogPage = function() {
        this.dialog = function() {
            return $("#confirmationDialog");
        }
        this.yesBtn = function() {
            return $("#yesBtn");
        }
        this.noBtn = function() {
            return $("#noBtn");
        }
    };

    module.exports = ConfirmationDialogPage;
}());
