/**
 * Created by taylojo on 05/11/14.
 */
(function() {

    "use strict";

    var _url = "http://localhost:63342/AngularMaterialDialog/index.html";

    describe("NameListApp end-to-end tests", function() {
        it("test1", function() {
            browser.get(_url);
            expect(element.all(by.repeater("item in nameListModel.items")).count()).toBe(5);
        });
    });
}());
